import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className="input  mt-10 input-bordered max-w-96 flex items-center gap-2">
        <input
          type="text"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.input}
          placeholder="Find contacts by name"
        />
      </label>
    </div>
  );
};
