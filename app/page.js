import Searchbar from "./components/search-bar";
import WeatherCard from "./components/WeatherCard"; // make sure this is the correct path to your WeatherCard component

export default function Home() {
  // You would typically fetch the weather data here and pass it to the WeatherCard components

  // Placeholder data for demonstration purposes
  const weatherData = [
    { day: "Sun", weather: "sunny", temperature: 3 },
    { day: "Mon", weather: "partly-cloudy", temperature: 6 },
    { day: "Tue", weather: "sunny", temperature: 5 },
    { day: "Wed", weather: "sunny", temperature: 3 },
    { day: "Thur", weather: "partly-cloudy", temperature: 6 },
    { day: "Fri", weather: "sunny", temperature: 5 },
    { day: "Sat", weather: "sunny", temperature: 3 },
    // ... other days
  ];

  return (
    <main className="min-h-screen bg-blue-500 p-8">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-10">Weather App</h1>
      <Searchbar />
      <div className="flex overflow-x-auto py-4 space-x-4">
        {weatherData.map((data, index) => (
          <WeatherCard
            key={index}
            day={data.day}
            weather={data.weather}
            temperature={data.temperature}
          />
        ))}
      </div>
    </main>
  );
}