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

export const createParkThunk = (park: IPark) => async (dispatch: Dispatch) => {
  try {
    dispatch(loadingActionCreator());
    const { status, data } = await axios.post(`${url}/`, park, getAuth());
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
