import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {} from "../../features/accountSlice/accountSlice";
import { loadParksActionCreator } from "../../features/parksSlice/parksSlice";
import {
  loadingActionCreator,
  notLoadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { IFilters, IPark } from "../../types/parkInterfaces";
import { toast } from "react-toastify";
import { loadParkDetailsActionCreator } from "../../features/parkSlice/parkSlice";

const url: string = `${process.env.REACT_APP_API_URL}/parks`;

const getAuth = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const loadParksThunk =
  (filter?: IFilters, urlPath?: string) => async (dispatch: Dispatch) => {
    try {
      let query = "";
      if (filter) {
        if (filter.owner) {
          query += "&owner=" + filter.owner;
        }
        if (filter.city) {
          query += "&city=" + filter.city;
        }
        if (filter.ids) {
          query += "&ids=" + filter.ids;
        }
      }

      dispatch(loadingActionCreator());
      const { data, status } = await axios.get(
        urlPath ?? `${url}/list?${query}`
      );

      if (status === 200) {
        dispatch(loadParksActionCreator(data));
      }
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };

export const deleteParkThunk = (id: string) => async (dispatch: Dispatch) => {
  dispatch(loadingActionCreator());
  const { status } = await axios.delete(`${url}/${id}`, getAuth());
  if (status === 200) {
    toast.success("Park deleted!");
  } else {
    toast.error(`Error deleting the park`);
  }
  dispatch(notLoadingActionCreator());
};

const appendImages = (request: FormData, images?: FileList) => {
  if (images) {
    for (let i = 0; i < images.length; i++) {
      request.append("image", images[i]);
    }
  }
};

const getFormDataFromPark = (park: IPark, images?: FileList): FormData => {
  const parkRequest = new FormData();
  appendImages(parkRequest, images);

  parkRequest.append("name", park.name);
  parkRequest.append("description", park.description);
  parkRequest.append("location.type", park.location.type);
  parkRequest.append(
    "location.coordinates[0]",
    park.location.coordinates[0].toString()
  );
  parkRequest.append(
    "location.coordinates[1]",
    park.location.coordinates[1].toString()
  );
  parkRequest.append("address.city", park.address?.city ?? "");
  parkRequest.append("address.address", park.address?.address ?? "");

  park.details.forEach((detail, index) => {
    parkRequest.append(`details[${index}]`, detail);
  });

  return parkRequest;
};

const getConfigCreateUpdate = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return config;
};

export const createParkThunk =
  (park: IPark, images?: FileList) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator());

      const parkRequest = getFormDataFromPark(park, images);

      const { status } = await axios.post(
        `${url}/`,
        parkRequest,
        getConfigCreateUpdate()
      );
      if (status === 201) {
        toast.success("Park created! Thanks!");
      } else {
        toast.error(`Error creating the park`);
      }
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };

export const editParkThunk =
  (park: IPark, images?: FileList) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator());

      const parkRequest = getFormDataFromPark(park, images);

      await axios.put(
        `${url}/${park.id}`,
        parkRequest,
        getConfigCreateUpdate()
      );

      toast.success("Park Updated! Thanks!");
    } catch (e) {
      toast.error(`Error updating the park`);
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };

export const getParkDetailThunk =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator());
      const { data, status } = await axios.get(`${url}/${id}`);
      if (status === 200) {
        dispatch(loadParkDetailsActionCreator(data));
      }
    } catch (error: any) {
      toast.error("There was a problem with the details, try again");
      return error.message;
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };
