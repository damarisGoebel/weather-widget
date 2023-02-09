import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { WeatherContext } from "./context/WeatherContext";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const [query, setQuery] = useState<string>("");
  const [openSearch, setOpenSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (!darkMode) {
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  useEffect(() => {
    const checkMobile = /iPhone|Android/i.test(navigator.userAgent);
    if (checkMobile) {
      setIsMobile(true)
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{ query, setQuery, openSearch, setOpenSearch, isMobile, setIsMobile }}
    >
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </DarkModeContext.Provider>
    </WeatherContext.Provider>
  );
}

export default App;
