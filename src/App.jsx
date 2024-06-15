import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";

function App() {
  const person = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [state, setState] = useState(() => {
    const savedState = window.localStorage.getItem("state");
    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    return person;
  });

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const [searchValue, setSearchValue] = useState("");

  const handleDelete = (id) => {
    setState((prev) => prev.filter((state) => state.id !== id));
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleAdd = (newOne) => {
    setState((prev) => [...prev, newOne]);
  };

  const filteredContacts = state.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAdd} />
      <SearchBox value={searchValue} onSearchChange={handleSearchChange} />
      <ContactList items={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
