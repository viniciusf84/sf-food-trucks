import styles from "./SearchInput.module.css";

//svg
import SearchIcon from "../../assets/search.svg?react";

const SearchInput = ({
  onChange,
  onKeyPress,
  placeholder,
  value,
  onSearchClick,
}) => {
  return (
    <div className={styles["search-input"]}>
      <input
        type="text"
        onKeyUp={onKeyPress}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      <button onClick={onSearchClick} disabled={!value}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
