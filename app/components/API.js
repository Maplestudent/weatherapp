// API.js

const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = 'd403b6b07ce94c56ab5213347230412'; // Replace with your WeatherAPI.com API key

// Function to fetch current weather data
export const getCurrentWeather = async (location) => {
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
