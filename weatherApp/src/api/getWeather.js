export const getWeather = async (city) => {
  try {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`, {
      method: "GET"
    })
    if (!request.ok) {
      throw new Error(`Weather API request failed with status: ${request.status}`);
    }
    let weatherInfo = {
      temp: "",
      desc: "",
      humidity: "",
      wind: "",
      emj: "",
      name: ""
    };
    const json = await request.json()
    let emj;
    switch (json.weather[0].main) {
      case 'Clear':
        emj = "clear_day";
        break;

      case 'Rain':
        emj = "Rainy";
        break;

      case 'Snow':
        emj = "Ac Unit";
        break;

      case 'Clouds':
        emj = "Cloud";
        break;

      case 'Haze':
        emj = "Mist";
        break;

      case 'Mist':
        emj = "Mist";
        break;

      case 'Drizzle':
        emj = "Rainy"
        break
      default:
        emj = "sunny"
        break

    }
    const temp = `${parseInt(json.main.temp)}°C`;
    const desc = `${json.weather[0].description}`;
    const humidity = `${json.main.humidity}%`;
    const wind = `${parseInt(json.wind.speed)} Km/h`;
    const name = `${json.name}`
    weatherInfo = {
      temp: temp,
      desc: desc,
      humidity: humidity,
      wind: wind,
      emj: emj,
      name:name
    };

    return weatherInfo
  } catch (error) {
    return error
  }

}
