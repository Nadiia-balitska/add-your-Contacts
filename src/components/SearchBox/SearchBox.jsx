import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={s.label}>
        Find contacts by name
        <input
          // value={value}
          type="text"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
      </label>
    </div>
  );
};
