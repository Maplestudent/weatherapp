import conditionsData from './weather/conditions.json'; // Import conditions.json

export default function WeatherCard({ day, weather, temperature, conditionCode }) {
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18 ? 'day' : 'night';
  };

  const getIconPath = (code, timeOfDay) => {
    const conditions = conditionsData.find(condition => condition.code === code);

    if (conditions) {
      const iconFileName = timeOfDay === 'day' ? conditions.day : conditions.night;
      if (iconFileName) {
        return `./components/weather/${timeOfDay}/${iconFileName}.png`;
      }
    }

    // If no matching condition or icon is found, return a default path or handle it as needed
    return `./default/icon.svg`;
  };

  const timeOfDay = getTimeOfDay();

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mx-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
      <div className="text-xl font-semibold">{day}</div>
      <img src={getIconPath(conditionCode, timeOfDay)} alt={weather} className="w-16 h-16 mx-auto my-3" />
      <div className="text-lg">{temperature}°</div>
      <div>{weather}</div>
    </div>
  );
}
