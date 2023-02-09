import { createContext } from "react";

export const WeatherContext = createContext({
  query: "",
  setQuery: (query: string) => {},
  openSearch: false,
  setOpenSearch: (openSearch: boolean) => {},
  isMobile: false,
  setIsMobile: (isMobile: boolean) => {},
});
