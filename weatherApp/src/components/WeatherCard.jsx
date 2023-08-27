import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getWeather } from "../api/getWeather"
import 'material-symbols';
export const WeatherCard = ({ city, saveCity, deleteCity }) => {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const getSelectedCity = localStorage.getItem("city")

  useEffect(() => {

    if (city) {
      setLoading(true)
      getWeather(city)
        .then(weatherData => {
          setWeatherInfo(weatherData);
        })
        .catch(error => {
          console.error("An error occurred:", error);
        }).finally(() => {
          setLoading(false)
        });
    }
  }, [city])


  const DelPin = () => {
    return (
      <div className="flex relative group w-fit h-fit">
        <span className="material-symbols-outlined cursor-pointer px-2 py-2" onClick={() => deleteCity()}>
          delete
        </span>

        <div className="absolute left-full p-2 mx-3  bg-gray-200 text-black shadow-lg rounded-md border dark:bg-darker-green dark:text-dark-fg dark:border-none hidden group-hover:block">
          <p className="text-gray-500  text-sm">Delete</p>
        </div>
      </div>

    )

  }
  const Pin = () => {
    return (
      <div className="flex relative group w-fit">
        <span className="material-symbols-outlined cursor-pointer px-2 py-2" onClick={() => saveCity(weatherInfo.name)}>
          location_on
        </span>

        <div className="absolute left-full  p-2 mx-2 bg-gray-200 text-black shadow-lg rounded-md border dark:bg-darker-green dark:text-dark-fg dark:border-none  hidden group-hover:block">
          <p className="text-gray-500  text-sm">Pin</p>
        </div>

      </div>
    )
  }

  if (!weatherInfo) {
    return
  }
  if (!city) {
    return
  }
  if (weatherInfo.name === "Error") {
    return (
      <div className="flex flex-col my-6  justify-center border border-gray-100  h-fit mx-2 md:m-auto md:w-1/4 transition-all shadow-xl text-2xl dark:border-none dark:bg-darker-green dark:text-white dark:drop-shadow rounded">
        <div className="flex justify-center items-center text-red-700">
          <span className="material-symbols-outlined p-2">
            error
          </span>
          <p>NOT FOUND</p>
        </div>
      </div>
    )


  }

  if (loading) {
    return (
      <div role="status" className="flex justify-center my-10 h-32">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-400 fill-black animate-spin dark:text-gray-600 dark:fill-dark-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col my-6  justify-center border border-gray-100  h-fit mx-2 md:m-auto md:w-1/4 transition-all shadow-xl text-2xl dark:border-none dark:bg-darker-green dark:text-white dark:drop-shadow rounded">




      <div className=" flex items-center space-x-[90%] justify-center">
        <p className="absolute">
          {weatherInfo.name}
        </p>

        <p>
          {getSelectedCity === weatherInfo.name ? <DelPin /> : <Pin />}
        </p>

      </div>

      <div className=" flex justify-center">
        <span className="material-symbols-rounded text-8xl">{weatherInfo.emj}</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="font-bold ">{weatherInfo.temp}</p>
        </div>
        <div>
          <p className="text-base  text-gray-500  dark:text-dark-green"> {weatherInfo.desc} </p>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div>
          <div className="flex items-center justify-center">
            <span className="px-2 material-symbols-outlined">
              humidity_percentage
            </span>
          </div>

          <div className="flex flex-col  justify-center items-center text-center">
            <p>
              {weatherInfo.humidity}
            </p>
            <p className="text-base text-gray-500 dark:text-dark-green">
              humidity
            </p>

          </div>

        </div>
        <div>
          <div className="flex items-center justify-center">
            <span className="material-symbols-outlined">
              air
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <p>
              {weatherInfo.wind}
            </p>
            <p className="text-base  text-gray-500 dark:text-dark-green">
              Wind speed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



WeatherCard.propTypes = {
  city: PropTypes.string.isRequired,
  saveCity: PropTypes.func.isRequired,
  deleteCity: PropTypes.func.isRequired,
};
