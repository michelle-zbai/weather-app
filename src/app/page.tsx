"use client";

import { useEffect, useState } from "react";
import { LocationSearch } from "@/components/LocationSearch";
import { LoadingState } from "@/components/LoadingState";
import { ErrorMessage } from "@/components/ErrorMessage";
import { WeatherDisplay } from "@/components/WeatherDisplay";
import { PageHeader } from "@/components/PageHeader";
import { getWeatherData } from "@/lib/getWeather";
import { WeatherData } from "@/types/weather";

// Default city to display on load
const DEFAULT_CITY = "Durham";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [citySelected, setCitySelected] = useState(false);

  useEffect(() => {
    // Don't load default city - wait for user selection
  }, []);

  const loadCityWeather = async (cityName: string) => {
    setCitySelected(true);
    setLoading(true);
    setError("");

    try {
      const data = await getWeatherData(cityName);
      if (data) {
        setWeather(data);
      } else {
        setError(`Failed to load weather data for ${cityName}`);
      }
    } catch (err) {
      setError(`Failed to load weather data for ${cityName}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-12">
      <main className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <PageHeader
          title="Weather Forecast"
          subtitle="Check your city!"
        />

        {/* Search at the top */}
        <div className="flex flex-col items-center">
          <LocationSearch onCitySelect={loadCityWeather} />
        </div>

        {/* Weather display with states */}
        <div className="min-h-96">
          {citySelected && loading && <LoadingState />}
          {citySelected && error && !loading && <ErrorMessage message={error} />}
          {citySelected && weather && !loading && !error && <WeatherDisplay weather={weather} />}
          {!citySelected && <div className="text-center text-zinc-400 dark:text-zinc-600 text-lg py-20">Select a city to view weather forecast</div>}
        </div>
      </main>
    </div>
  );
}
