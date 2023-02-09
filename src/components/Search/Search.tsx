import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import styles from "./Search.module.css";

export const Search = () => {
  const { setQuery, setOpenSearch } = useContext(WeatherContext);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      setQuery(event.target.value);
      setOpenSearch(false);
    }
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Das Wetter in ..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
