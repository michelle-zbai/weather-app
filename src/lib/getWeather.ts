import { getCityByName } from "@/data/cities";
import { WeatherData, getWeatherDescription } from "@/types/weather";

/**
 * Utility: Sleep for N milliseconds (for development/testing)
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch weather data for a city using Open-Meteo API
 * Returns WeatherData or null on error / not found
 * Includes artificial delay for development to show loading states
 */
export async function getWeatherData(
  cityName: string
): Promise<WeatherData | null> {
  // Add 2-second delay to simulate slower network and see loading states
  await delay(2000);

  const city = getCityByName(cityName);
  if (!city) return null;

  const { latitude, longitude } = city;

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(latitude));
  url.searchParams.set("longitude", String(longitude));
  url.searchParams.set("current_weather", "true");
  url.searchParams.set(
    "hourly",
    "temperature_2m,apparent_temperature,relativehumidity_2m,weathercode,windspeed_10m"
  );
  url.searchParams.set(
    "daily",
    "temperature_2m_max,temperature_2m_min,weathercode"
  );
  url.searchParams.set("temperature_unit", "fahrenheit");
  url.searchParams.set("windspeed_unit", "mph");
  url.searchParams.set("timezone", "auto");

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 600 } });
    if (!res.ok) return null;
    const json = await res.json();

    const cw = json.current_weather;

    const current = {
      temperature: Math.round(cw.temperature ?? 0),
      feelsLike: Math.round(
        json.hourly?.apparent_temperature?.[0] ?? cw.temperature ?? 0
      ),
      humidity: Math.round(json.hourly?.relativehumidity_2m?.[0] ?? 0),
      windSpeed: Math.round(cw.windspeed ?? 0),
      condition: {
        code: cw.weathercode ?? 0,
        description: getWeatherDescription(cw.weathercode ?? 0),
      },
    };

    const dates: string[] = json.daily?.time ?? [];
    const maxTemps: number[] = json.daily?.temperature_2m_max ?? [];
    const minTemps: number[] = json.daily?.temperature_2m_min ?? [];
    const weatherCodes: number[] = json.daily?.weathercode ?? [];

    const forecast = dates.map((date: string, i: number) => ({
      date,
      maxTemp: Math.round(maxTemps[i] ?? 0),
      minTemp: Math.round(minTemps[i] ?? 0),
      condition: {
        code: weatherCodes[i] ?? 0,
        description: getWeatherDescription(weatherCodes[i] ?? 0),
      },
    }));

    const weatherData: WeatherData = {
      city: city.name,
      latitude,
      longitude,
      current,
      forecast,
    };

    return weatherData;
  } catch (err) {
    console.error("getWeatherData error:", err);
    return null;
  }
}
