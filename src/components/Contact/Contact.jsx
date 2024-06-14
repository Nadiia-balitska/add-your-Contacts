import s from "./Contact.module.css";

export const Contact = ({ item, handleDelete }) => {
  return (
    <div className={s.contact}>
      <p className={s.text}>{item.name}</p>
      <p className={s.text}>{item.number}</p>
      <button className={s.btn} onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};
