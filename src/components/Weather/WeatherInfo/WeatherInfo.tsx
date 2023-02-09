import { MobileLayout } from "../MobileLayout/MobileLayout";
import { DesktopLayout } from "../DesktopLayout/DesktopLayout";
import { WeatherInfoProps } from "../Types/WeatherTypes";
import { useContext } from "react";
import { WeatherContext } from "../../../context/WeatherContext";

export const WeatherInfo = ({
  temperature,
  description,
  name,
  icon,
  iconAlt,
}: WeatherInfoProps) => {
  const { isMobile } = useContext(WeatherContext);

  return isMobile ? (
    <MobileLayout
      temperature={temperature}
      description={description}
      name={name}
      icon={icon}
      iconAlt={iconAlt}
    />
  ) : (
    <DesktopLayout
      temperature={temperature}
      description={description}
      name={name}
      icon={icon}
      iconAlt={iconAlt}
    />
  );
};
