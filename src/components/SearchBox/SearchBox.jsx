import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchWrapper}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}
