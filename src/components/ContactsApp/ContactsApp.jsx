import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchBox } from "../SearchBox/SearchBox.jsx";
import { ContactList } from "../ContactList/ContactList.jsx";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/contactsSlice.js";
import { fetchContactsThunk } from "../../redux/contacts/contactsOps.js";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Loader } from "../Loader/Loader.jsx";

export const ContactsApp = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilteredName);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}

      {contacts?.length > 0 && !error ? (
        <ContactList />
      ) : (
        <span> OOps, No searched contact/s :( </span>
      )}
      {error && <p> Something went wrong, type of error: {error}</p>}
    </div>
  );
};
