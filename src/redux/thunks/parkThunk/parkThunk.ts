import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteParkActionCreator } from "../../features/accountSlice/accountSlice";
import { loadParksActionCreator } from "../../features/parksSlice/parkSlice";

const url: string = `${process.env.REACT_APP_API_URL}/parks`;

const getAuth = () => {
  const token = localStorage.getItem("token");
  const authorization = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return authorization;
};

export const loadParksThunk = () => async (dispatch: Dispatch) => {
  const { data, status } = await axios.get(`${url}/list`);

  if (status === 200) {
    dispatch(loadParksActionCreator(data));
  }
};

export const deleteParkThunk = (id: string) => async (dispatch: Dispatch) => {
  const { status } = await axios.delete(`${url}/${id}`, getAuth());
  if (status === 200) {
    dispatch(deleteParkActionCreator(id));
  }
};
