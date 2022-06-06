import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { loadParksActionCreator } from "../../features/parksSlice/parkSlice";

const url: string = `${process.env.REACT_APP_API_URL}/parks/list`;

const getAuth = () => {
  const token = localStorage.getItem("token");
  const authorization = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return authorization;
};

export const loadParksThunk = () => async (dispatch: Dispatch) => {
  const { data, status } = await axios.get(url);

  if (status === 200) {
    dispatch(loadParksActionCreator(data));
  }
};

export const deleteParkThunk = (id: string) => async (dispatch: Dispatch) => {
  await axios.delete(`${url}/parks/${id}`, getAuth());
};
