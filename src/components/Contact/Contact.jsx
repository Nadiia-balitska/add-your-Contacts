import s from "./Contact.module.css";

export const Contact = ({ item, handleDelete }) => {
  return (
    <li className={s.item} key={item.id}>
      <div className={s.wrapper}>
        <p className={s.text}>{item.name}</p>
        <p className={s.text}>{item.number}</p>
      </div>
      <button className={s.btn} onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};
