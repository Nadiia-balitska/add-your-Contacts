import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";

export const ContactList = ({ items, handleDelete }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <Contact handleDelete={handleDelete} key={item.id} item={item} />
      ))}
    </ul>
  );
};
