import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearToken,
  goitApi,
  setToken,
  // authorization,
} from "../../config/goitApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/signup/", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/login/", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await goitApi.post("users/logout/");
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk("refresh", async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;

  if (!savedToken) {
    return thunkApi.rejectWithValue("No token exist!");
  }
  try {
    setToken(savedToken);
    const { data } = await goitApi.get("users/current/");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// export const refreshUserThunk = createAsyncThunk(
//   "srefresh",
//   async (_, thunkApi) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       return thunkApi.rejectWithValue("No token found");
//     }

//     try {
//       setToken(token);
//       const { data } = await goitApi.get("users/current");
//       return data;
//       // await goitApi.get("users/current");

//       //  {
//       //   headers: {
//       //     Authorization: `Bearer ${data.token}`,
//       //   },

//       // const { data } = await goitApi.get("users/current");
//       // authorization();
//       // return data;
//     } catch (error) {
//       clearToken();
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
