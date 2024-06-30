import { createSlice } from "@reduxjs/toolkit";
import { fetchContactsThunk } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",

  initialState,

  selectors: {
    selectContacts: (state) => state.items,
  },

  extraReducers: builder => {
   builder.addCase(fetchContactsThunk.fulfilled, (state, action) => {
     state.items.push(action.payload);
    },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
  // },
});

export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;
