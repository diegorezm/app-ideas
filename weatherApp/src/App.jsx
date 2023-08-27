import './App.css'

import 'material-symbols';
import 'material-symbols';
import { WeatherCard } from './components/WeatherCard'
import { ColorModeButton } from './components/colorModeButton'
import { useEffect, useState } from 'react';
import { Search } from './components/Search';

const App = () => {

  const [storedDarkMode, setStoredDarkMode] = useState(false);
  const [city, setCity] = useState(null)
  const getSelectedCity = localStorage.getItem("city")

  const saveCity = (savedCity) => {
    localStorage.setItem("city", savedCity)
  }

  const deleteCity = () => {
    localStorage.removeItem("city")
    setCity(null)
  }

  useEffect(() => {
    const stDk = localStorage.getItem("darkMode");
    const parsedDarkMode = stDk ? JSON.parse(stDk) : false;
    setStoredDarkMode(parsedDarkMode);
    if (getSelectedCity) {
      setCity(getSelectedCity)
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedDarkMode = !storedDarkMode;
    setStoredDarkMode(updatedDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(updatedDarkMode));
  };

  return (
    <div className={` h-screen py-1 w-full bg-white dark:bg-dark-bg ${storedDarkMode ? "dark" : ""}`}>
      <ColorModeButton
        darkMode={storedDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Search setCity={setCity} />
      {city != null && <WeatherCard city={city} saveCity={saveCity}  deleteCity={deleteCity}/>}
    </div>
  )
}

export default App
