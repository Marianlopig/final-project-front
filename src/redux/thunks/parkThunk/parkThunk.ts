import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {} from "../../features/accountSlice/accountSlice";
import { loadParksActionCreator } from "../../features/parksSlice/parkSlice";
import {
  loadingActionCreator,
  notLoadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { IFilters, IPark } from "../../types/parkInterfaces";
import { toast } from "react-toastify";

const url: string = `${process.env.REACT_APP_API_URL}/parks`;

const getAuth = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const loadParksThunk =
  (filter?: IFilters) => async (dispatch: Dispatch) => {
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

      const { data, status } = await axios.get(`${url}/list?${query}`);
      dispatch(loadingActionCreator());

      if (status === 200) {
        dispatch(loadParksActionCreator(data));
      }
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };

export const deleteParkThunk = (id: string) => async (dispatch: Dispatch) => {
  dispatch(loadingActionCreator());
  await axios.delete(`${url}/${id}`, getAuth());
  dispatch(notLoadingActionCreator());
};

export const createParkThunk =
  (park: IPark, images?: FileList) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator());

      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const parkRequest = new FormData();
      if (images) {
        for (let i = 0; i < images.length; i++) {
          parkRequest.append("image", images[i]);
        }
      }

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

      const { status } = await axios.post(`${url}/`, parkRequest, config);
      if (status === 201) {
        toast.success("Park created! Thanks!");
      } else {
        toast.error(`Error creating the park`);
      }
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };
