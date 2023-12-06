// API.js

const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = 'd403b6b07ce94c56ab5213347230412'; // Replace with your WeatherAPI.com API key

// Function to fetch 7-day weather forecast data
export const get7DayWeatherForecast = async (location) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=7` // Request data for 7 days
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching 7-day weather forecast data:', error);
    throw error;
  }
};
