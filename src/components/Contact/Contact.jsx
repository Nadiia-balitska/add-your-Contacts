import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";
import s from "./Contact.module.css";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div className={s.item}>
      <div className={s.wrapper}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{number}</p>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
