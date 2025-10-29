import { CurrentWeather } from "@/types/weather";
import { WeatherIcon } from "./WeatherIcon";

/**
 * Weather card showing a large weather icon
 * Reveals detailed weather information on hover
 */

interface WeatherCardProps {
  city: string;
  weather: CurrentWeather;
}

export function WeatherCard({ city, weather }: WeatherCardProps) {
  return (
    <div className="relative group">
      {/* Icon container */}
      <div className="flex items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-20">
        <WeatherIcon code={weather.condition.code} size="2xl" />
      </div>

      {/* Hover content - starts invisible */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-2xl font-bold mb-4">{city}</h2>
        <p className="text-xl mb-2">{weather.temperature}°F</p>
        <p className="text-lg mb-2">{weather.condition.description}</p>
        <div className="text-sm space-y-1 text-zinc-600 dark:text-zinc-300">
          <p>Feels like: {weather.feelsLike}°F</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.windSpeed} mph</p>
        </div>
      </div>
    </div>
  );
}
