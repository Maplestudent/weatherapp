// components/WeatherCard.js
export default function WeatherCard({ day, weather, temperature }) {
    // Using responsive width classes such as w-full sm:w-1/2 md:w-1/3 lg:w-1/4
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg mx-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
        <div className="text-xl font-semibold">{day}</div>
        <img src={`/path/to/weather/icons/${weather}.svg`} alt={weather} className="w-16 h-16 mx-auto my-3" />
        <div className="text-lg">{temperature}°</div>
        {/* Add additional weather details */}
      </div>
    );
  }