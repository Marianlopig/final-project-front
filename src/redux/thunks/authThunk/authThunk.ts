import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  DataAxiosLogin,
  IUser,
  LoginData,
  LoginResponse,
} from "../../types/userInterfaces";
import { loginActionCreator } from "../../features/authSlice/authSlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  loadingActionCreator,
  notLoadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { toast } from "react-toastify";

export const loginThunk =
  (userData: LoginData) => async (dispatch: Dispatch) => {
    dispatch(loadingActionCreator());
    const url: string = `${process.env.REACT_APP_API_URL}/users/login`;
    try {
      const { data, status }: DataAxiosLogin = await axios.post(url, userData);

      if (status === 200) {
        toast.success("LogIn successful!");
        const { name, username, userId }: LoginResponse = jwt_decode(
          data.token
        );
        localStorage.setItem("token", data.token);
        dispatch(loginActionCreator({ name, username, userId }));
      }
    } catch (error: any) {
      toast.error("Wrong username or password, try again");
      return { error: error.message };
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };

export const registerThunk =
  (userData: IUser) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator());
      await axios.post(
        `${process.env.REACT_APP_API_URL}/users/register`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("User created!");
    } catch (error: any) {
      toast.error("Wrong username or password, try again");
      return error.message;
    } finally {
      dispatch(notLoadingActionCreator());
    }
  };
