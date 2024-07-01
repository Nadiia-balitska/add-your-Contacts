import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredName,
  selectContacts,
  selectLoading,
  selectError,
} from "./redux/contactsSlice";
import { fetchContactsThunk } from "./redux/contactsOps";
// import { selectNameFilter } from "./redux/filtersSlice";
import { Loader } from "./components/Loader/Loader";

// const dispatch = useDispatch();
// const contacts = useSelector(selectContacts);
// const filter = useSelector(selectNameFilter);

// const person = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
// const [state] = useState(() => {
//   const savedState = window.localStorage.getItem("state");
//   if (savedState !== null) {
//     return JSON.parse(savedState);
//   }
//   return person;
// });

// useEffect(() => {
//   window.localStorage.setItem("state", JSON.stringify(state));
// }, [state]);

// // const [searchValue] = useState("");

// const handleDelete = () => {
//   dispatch(deleteContact());
//   // setState((prev) => prev.filter((state) => state.id !== id));
// };

// const handleSearchChange = () => {
//   // setSearchValue(value);
//   dispatch(changeFilter());
// };

// const handleAdd = () => {
//   dispatch(addContact());

//   // setState((prev) => [...prev, newOne]);
// };

// const filteredContacts = state.filter((contact) =>
//   contact.name.toLowerCase().includes(searchValue.toLowerCase())
// );
function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredName);
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
      {contacts.length > 0 && !error ? (
        <ContactList filteredContacts={filter} />
      ) : (
        <span> OOps, No searched contact/s :( </span>
      )}
      {error && <p> Something went wrong, type of error: {error}</p>}
    </div>
  );
}

export default App;
