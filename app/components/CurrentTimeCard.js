"use client";
import { useState, useEffect } from 'react';

const CurrentWeatherCard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Fetch weather data from an API (replace 'API_ENDPOINT' with the actual API endpoint)
    const fetchWeatherData = async () => {
      try {
        // Make a fetch request to get the weather data
        const response = await fetch('API_ENDPOINT');
        const data = await response.json();
        
        // Update the currentWeather state with the fetched data
        setCurrentWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    // Call the function to fetch weather data
    fetchWeatherData();

    // Get current time
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }));
    }, 1000); // Update time every second

    // Clean up interval to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mx-auto my-4 max-w-md">
      <div className="text-3xl font-semibold mb-4">Current Weather</div>
      {currentWeather ? (
        <>
          <div className="text-xl">{currentWeather.city}</div>
          <div className="text-lg">{currentWeather.temperature}°</div>
          <div className="text-md">{currentWeather.description}</div>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
      <div className="text-lg mt-4">Current Time: {currentTime}</div>
    </div>
  );
};

export default CurrentWeatherCard;
