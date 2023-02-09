import { useContext, useEffect, useState } from "react";
import {
  getWeatherData,
  getCoordinatesByCityName,
} from "../../services/WeatherService";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { WeatherGlyph } from "../Weather/WeatherGlyph/WeatherGlyph";
import { Weather } from "../Weather/Types/WeatherTypes";
import { WeatherInfo } from "../Weather/WeatherInfo/WeatherInfo";
import { WeatherContext } from "../../context/WeatherContext";
import { DarkModeContext } from "../../context/DarkModeContext";

export const Header = () => {
  const [weather, setWeather] = useState<Weather | undefined>(undefined);
  const [latitude, setLatitude] = useState(undefined);
  const [longitude, setLongitude] = useState(undefined);
  const { query } = useContext(WeatherContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { isMobile } = useContext(WeatherContext);

  function success(pos: any) {
    const crd = pos.coords;
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (window.navigator.geolocation && query === "") {
      window.navigator.geolocation.getCurrentPosition(success, error);
    }

    // Task 1: Display Weather for Hamburg
    // getCoordinatesByCityName("Hamburg").then((res) => {
    //   setLatitude(res[0].lat);
    //   setLongitude(res[0].lon);
    // });

    // Task 2: Display Weather according to current location
    if (longitude && latitude) {
      getWeatherData(longitude, latitude).then((res: Weather) => {
        setWeather(res);
      });
    }
  }, [longitude, latitude, query]);

  useEffect(() => {
    getCoordinatesByCityName(query).then((res) => {
      setLatitude(res[0].lat);
      setLongitude(res[0].lon);
    });
  }, [query]);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <div>
        <div className={styles.navigation}>
          <div className={styles.navigationMenu}>
            <span className="material-symbols-outlined">menu</span>
            <span className={styles.navigationMenuText}>Menu</span>
          </div>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.navigationAccount}>
            <span className={styles.navigationSubscriptionLink}>
              Abo testen
            </span>
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className={styles.darkMode} onClick={() => handleClick()}>
            {!darkMode && (
              <span className="material-symbols-outlined">dark_mode</span>
            )}
            {darkMode && (
              <span
                style={{
                  fontVariationSettings:
                    "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
                }}
              >
                <span className="material-symbols-outlined">dark_mode</span>
              </span>
            )}
          </div>
        </div>
        {weather && (
          <div className={styles.navigationLiveBlogTopics}>
            {!isMobile && (
              <div className={styles.weatherGlyph}>
                <WeatherGlyph
                  icon={`${weather.weather[0].icon}`}
                  iconAlt={`${weather.weather[0].main}`}
                />
              </div>
            )}
            <div className={styles.navigationBlogLinks}>
              <a
                href="https://www.zeit.de/thema/krieg-in-ukraine"
                className={styles.navigationTopicsLink}
              >
                <span>Krieg in der Ukraine</span>
              </a>
              <a
                href="https://www.zeit.de/thema/erdbeben-in-der-tuerkei-und-in-syrien"
                className={styles.navigationTopicsLink}
              >
                <span>Türkei und Syrien</span>
              </a>
              <a
                href="https://www.zeit.de/thema/eu-gipfel"
                className={styles.navigationTopicsLink}
              >
                <span>EU-Gipfel</span>
              </a>
            </div>

            <div className={styles.weather}>
              <WeatherInfo
                temperature={weather.main.temp}
                description={weather.weather[0].description}
                name={weather.name}
                icon={`${weather.weather[0].icon}`}
                iconAlt={`${weather.weather[0].main}`}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
