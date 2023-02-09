import React from "react";
import { useContext, useState } from "react";
import { WeatherContext } from "../../../context/WeatherContext";
import { WeatherGlyph } from "../WeatherGlyph/WeatherGlyph";
import { Search } from "../../Search/Search";
import styles from "./MobileLayout.module.css";
import { WeatherInfoProps } from "../Types/WeatherTypes";

export const MobileLayout = ({
  temperature,
  description,
  name,
  icon,
  iconAlt,
}: WeatherInfoProps) => {
  const { openSearch, setOpenSearch } = useContext(WeatherContext);
  const [openMoreDetails, setOpenMoreDetails] = useState(false);

  const handleClick = () => {
    setOpenSearch(!openSearch);
  };

  const openDetails = () => {
    setOpenMoreDetails(!openMoreDetails);
  };
  return (
    <React.Fragment>
      <div className={styles.weatherInfo}>
        <WeatherGlyph icon={icon} iconAlt={iconAlt} />
        <span className={styles.temperature}>{temperature}°C</span>
        <span className={styles.expandMore} onClick={() => openDetails()}>
          {" "}
          {!openMoreDetails && (
            <span className="material-symbols-outlined">expand_more</span>
          )}
          {openMoreDetails && (
            <span className="material-symbols-outlined">expand_less</span>
          )}
        </span>
      </div>

      {openMoreDetails && (
        <div className={styles.additionalInfo}>
          <span className={styles.description}>{description}</span>

          <div className={styles.name}>
            <span>{name}</span>
            <span className={styles.search} onClick={() => handleClick()}>
              <span className="material-symbols-outlined">search</span>
            </span>
          </div>

          {openSearch && <Search />}
        </div>
      )}
    </React.Fragment>
  );
};
