import axios from 'axios'

const API_KEY = '060a6bcfa19809c2cd4d97a212b19273'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

async function getWeatherData(place) {
  if (!place) {
    throw new Error('A place must be provided to search.')
  }

  try {
    const response = await axios.get(`${BASE_URL}?q=${place}&units=metric&appid=${API_KEY}`)
    const data = response.data

    const weatherDetails = {
      name: data.name,
      country: data.sys.country,
      weather: data.weather[0].description,
      temperature: `${data.main.temp}°C`,
      minTemperature: `${data.main.temp_min}°C`,
      maxTemperature: `${data.main.temp_max}°C`,
      humidity: `${data.main.humidity}%`,
      windSpeed: `${data.wind.speed} km/h`,
    }

    return (
      `PLACE: ${weatherDetails.name}\n` +
      `COUNTRY: ${weatherDetails.country}\n` +
      `VIEW: ${weatherDetails.weather}\n` +
      `TEMPERATURE: ${weatherDetails.temperature}\n` +
      `MINIMUM TEMPERATURE: ${weatherDetails.minTemperature}\n` +
      `MAXIMUM TEMPERATURE: ${weatherDetails.maxTemperature}\n` +
      `HUMIDITY: ${weatherDetails.humidity}\n` +
      `WINDSPEED: ${weatherDetails.windSpeed}`
    )
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw new Error('Failed to fetch weather data.')
  }
}

export { getWeatherData }
