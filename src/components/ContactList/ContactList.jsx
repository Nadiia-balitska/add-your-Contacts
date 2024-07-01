import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";
// import { selectContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
// import { useSelector } from "react-redux";
// import { selectFilteredName } from "../../redux/contactsSlice.js";
export const ContactList = ({ filteredContacts }) => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);

  // const searchFilteredContacts = () => {
  //   return contacts.filter((contact) =>
  //     contact?.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const filteredContacts = searchFilteredContacts();

  return (
    <ul className={s.list}>
      {filteredContacts.map((item) => (
        <li key={item.id} className={s.item}>
          <Contact id={item?.id} {...item} />
        </li>
      ))}
    </ul>
  );
};
