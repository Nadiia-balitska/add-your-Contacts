import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectFilteredName,
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/contactsSlice";
import { fetchContactsThunk } from "../../redux/contacts/contactsOps.js";
import { Loader } from "./components/Loader/Loader";

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
