"use client"
import { useEffect, useState } from 'react';
import { get7DayWeatherForecast } from "./components/API";
import WeatherCard from "./components/WeatherCard";
import Searchbar from "./components/search-bar";

export default function Home() {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedLocation, setSearchedLocation] = useState(null);

  const fetchData = async (location) => {
    try {
      const weatherForecast = await get7DayWeatherForecast(location);
      const forecastDays = weatherForecast.forecast.forecastday;
      setForecastData(forecastDays);
      setLoading(false);
      setSearchedLocation(location);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      setLoading(true);
      fetchData(searchQuery);
    }
  };

  useEffect(() => {
    // Fetch data for the default location when the component mounts
    fetchData("Calgary"); // Replace with your desired default location
  }, []);

  return (
    <main className="min-h-screen bg-blue-500 p-8">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-10">
        Weather App
      </h1>
      <Searchbar
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="flex overflow-x-auto py-4 space-x-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>Weather Forecast for {searchedLocation || ""}</h2>
            {forecastData.map((forecastDay, index) => (
              <WeatherCard
                key={index}
                day={forecastDay.date}
                weather={forecastDay.day.condition.text || 'N/A'}
                temperature={forecastDay.day.avgtemp_c || 'N/A'}
                conditionCode={forecastDay.day.condition.code || 'N/A'}
              />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
