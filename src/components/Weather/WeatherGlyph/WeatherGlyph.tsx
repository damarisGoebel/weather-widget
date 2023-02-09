import styles from "./WeatherGlyph.module.css";

type WeatherGlyphProps = {
  icon: string;
  iconAlt: string;
};
export const WeatherGlyph = ({ icon, iconAlt }: WeatherGlyphProps) => {
  let iconName;
  switch (iconAlt) {
    case "Shower Rain":
      iconName = "rainy";
      break;
    case "Few Clouds":
      iconName = "partly_cloudy_day";
      break;
    case "Clear":
      iconName = "clear_day";
      break;
    case "Scattered Clouds":
      iconName = "cloudy";
      break;
    case "Clouds":
      iconName = "cloudy";
      break;
    case "Broken Clouds":
      iconName = "partly_cloudy_day";
      break;
    case "Rain":
      iconName = "rainy";
      break;
    case "Thunderstorm":
      iconName = "thunderstorm";
      break;
    case "Snow":
      iconName = "weather_snowy";
      break;
    case "Mist":
      iconName = "foggy";
      break;
    default:
      console.log(`Sorry, we are out of ${iconAlt}.`);
  }

  return (
    <div className={styles.weatherGlyph}>
      <span className="material-symbols-outlined">{iconName}</span>
    </div>
  );
};
