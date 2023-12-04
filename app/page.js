"use client"
import { useEffect, useState } from 'react';
import { getCurrentWeather } from "./components/API";
import WeatherCard from "./components/WeatherCard"; // make sure this is the correct path to your WeatherCard component
import Searchbar from "./components/search-bar";



export default function Home() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Fetch weather data when the component mounts
    const fetchData = async () => {
      try {
        const location = "Calgary"; // Replace with the desired location
        const data = await getCurrentWeather(location);
        setWeatherData(data.current); // Assuming the API response contains a 'current' property with weather data
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <main className="min-h-screen bg-blue-500 p-8">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-10">
        Weather App
      </h1>
      <Searchbar />
      <div className="flex overflow-x-auto py-4 space-x-4">
      {weatherData && (
          <WeatherCard
              day="Today"
              weather={weatherData.condition?.text || 'N/A'}
              temperature={weatherData.temp_c || 'N/A'}
          />
    )}

      </div>
    </main>
  );
}