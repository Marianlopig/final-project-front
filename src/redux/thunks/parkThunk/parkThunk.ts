import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addParkActionCreator,
  deleteParkActionCreator,
} from "../../features/accountSlice/accountSlice";
import { loadParksActionCreator } from "../../features/parksSlice/parkSlice";
import {
  loadingActionCreator,
  notLoadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { IPark } from "../../types/parkInterfaces";
import { toast } from "react-toastify";

const url: string = `${process.env.REACT_APP_API_URL}/parks`;

const getAuth = () => {
  const token = localStorage.getItem("token");
  const authorization = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return authorization;
};

export const loadParksThunk = () => async (dispatch: Dispatch) => {
  try {
    const { data, status } = await axios.get(`${url}/list`);
    dispatch(loadingActionCreator());

    if (status === 200) {
      dispatch(loadParksActionCreator(data));
    }
  } finally {
    dispatch(notLoadingActionCreator());
  }
};

export const deleteParkThunk = (id: string) => async (dispatch: Dispatch) => {
  const { status } = await axios.delete(`${url}/${id}`, getAuth());
  if (status === 200) {
    dispatch(deleteParkActionCreator(id));
  }
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
      /*parkRequest.append(
        "location.coordinates",
        JSON.stringify(park.location.coordinates)
      );*/
      parkRequest.append("details", JSON.stringify(park.details));
      parkRequest.append("address.city", park.address?.city ?? "");
      parkRequest.append("address.address", park.address?.address ?? "");

      const { status, data } = await axios.post(`${url}/`, parkRequest, config);
      if (status === 201) {
        toast.success("Park created! Thanks!");
        dispatch(addParkActionCreator(data));
      } else {
        toast.error(`Error creating the park`);
      }
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };
