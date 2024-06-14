import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";

export const ContactList = ({ items, handleDelete }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => {
        <li className={s.item} key={item.id}>
          <Contact handleDelete={handleDelete} item={item} />;
        </li>;
      })}
    </ul>
  );
};
