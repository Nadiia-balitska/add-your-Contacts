import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
// import s from "./Contact.module.css";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div className="card bg-base-100 w-56 shadow-xl">
      <div className="card-body">
        <p className="card-title">{name}</p>
        <p>{number}</p>
      </div>
      <button className="btn btn-outline btn-accent " onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
