import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { loadParksActionCreator } from "../../features/parksSlice/parkSlice";

const url: string = `${process.env.REACT_APP_API_URL}/parks/list`;
export const loadParksThunk = () => async (dispatch: Dispatch) => {
  const { data, status } = await axios.get(url);

  if (status === 200) {
    dispatch(loadParksActionCreator(data));
  }
};
