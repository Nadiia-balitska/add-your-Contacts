import s from "./SearchBox.module.css";
export const SearchBox = ({ value, onSearchChange }) => {
  return (
    <div>
      <label className={s.label}>
        Find contacts by name
        <input
          value={value}
          type="text"
          onChange={(e) => onSearchChange(e.target.value)}
          className={s.input}
        />
      </label>
    </div>
  );
};
