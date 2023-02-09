import React from "react";
import { useContext } from "react";
import { WeatherContext } from "../../../context/WeatherContext";
import { Search } from "../../Search/Search";
import styles from "./DesktopLayout.module.css";
import { WeatherInfoProps } from "../Types/WeatherTypes";

export const DesktopLayout = ({
  temperature,
  description,
  name
}: WeatherInfoProps) => {
  const { openSearch, setOpenSearch } = useContext(WeatherContext);

  const handleClick = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <React.Fragment>
      <div className={styles.weatherInfo}>
        <span className={styles.temperature}>{temperature}°C</span>
      </div>
      <span className={styles.description}>{description}</span>

      <div className={styles.name}>
        <span>{name}</span>
        <span className={styles.search} onClick={() => handleClick()}>
          <span className="material-symbols-outlined">search</span>
        </span>
      </div>

      {openSearch && <Search />}
    </React.Fragment>
  );
};
