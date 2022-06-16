import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  addFavouriteActionCreator,
  deleteFavouriteActionCreator,
  loadAccountActionCreator,
} from "../../features/accountSlice/accountSlice";
import {
  loadingActionCreator,
  notLoadingActionCreator,
} from "../../features/uiSlice/uiSlice";

const url: string = `${process.env.REACT_APP_API_URL}/users`;
const getAuth = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const addFavouriteThunk =
  (parkId: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator());
      const { status } = await axios.put(
        `${url}/addfavourite`,
        {
          id: parkId,
        },
        getAuth()
      );
      dispatch(addFavouriteActionCreator(parkId));

      if (status === 200) {
        toast.success("Park added to favourites");
      } else {
        toast.error(`Error adding the park to favourites, try again!`);
      }
    } catch (e) {
      toast.error(
        `You need to have an account and to be LoggedIn to save a park`
      );
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };

export const deleteFavouriteThunk =
  (parkId: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator());
      const { status } = await axios.put(
        `${url}/deletefavourite`,
        {
          id: parkId,
        },
        getAuth()
      );
      dispatch(deleteFavouriteActionCreator(parkId));

      if (status === 200) {
        toast.success("Park deleted from favourites");
      } else {
        toast.error(`Error deleting park from favourites, try again!`);
      }
    } catch (e) {
      toast.error(`Error deleting park from favourites, try again!`);
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };

export const loadAccountThunk = () => async (dispatch: Dispatch) => {
  const { data: dataAccount, status: statusAccount } = await axios.get(
    `${url}/account`,
    getAuth()
  );
  if (statusAccount === 200) {
    dispatch(loadAccountActionCreator(dataAccount));
  }
};
