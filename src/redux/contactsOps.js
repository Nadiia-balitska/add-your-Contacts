import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContactsThunk = createAsyncThunk("", async (_, thunkApi) => {
  try {
    const { data } = await axios.get("contacts");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkApi) => {
    try {
      await axios.post("contacts", body);
      thunkApi.dispatch(addContactThunk());
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const editBlogThunk = createAsyncThunk(
  "editBlog",
  async (body, thunkApi) => {
    try {
      await axios.put(`contacts/${body.id}`, body);
      thunkApi.dispatch(addContactThunk());
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
