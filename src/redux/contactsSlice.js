import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",

  initialState,

  selectors: {
    selectContacts: (state) => state.contacts.items,
  },

  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.contacts.items.findIndex(
        (task) => task.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    //   selectContacts: (state, action) => {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;

export const contactsReducer = contactsSlice.reducer;
