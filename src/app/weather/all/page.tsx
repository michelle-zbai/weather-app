import React from "react";
import { CITIES } from "@/data/cities";
import { getDummyWeatherData } from "@/data/weather-data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { WeatherIcon } from "@/components/WeatherIcon";

export default function AllForecastPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-4 py-12">
      <main className="max-w-6xl mx-auto space-y-8">
        {/* Header with back button and centered title */}
        <div className="grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <Button href="/" variant="ghost">
              ← Back to Home
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-center justify-self-center">
            All Cities Forecast
          </h1>
          <div>{/* Empty div to maintain grid balance */}</div>
        </div>

        <div className="space-y-8">
          {[...CITIES]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((city) => {
              const data = getDummyWeatherData(city.name);
              return (
                <div key={city.name} className="flex items-center gap-10">
                  {/* Icon outside the bordered table; vertically centered to the city's section */}
                  <div className="w-20 flex-shrink-0 flex items-center justify-center">
                    {data ? (
                      <Link
                        href={`/weather/${encodeURIComponent(city.name)}`}
                        title="Click to See Details"
                        aria-label={`View details for ${city.name}`}
                        className="inline-flex items-center justify-center cursor-pointer"
                      >
                        <WeatherIcon code={data.current.condition.code} size="xl" />
                      </Link>
                    ) : (
                      <div className="w-12 h-12" />
                    )}
                  </div>

                  <section className="flex-1 border rounded-lg p-4 bg-white dark:bg-zinc-900">
                    <h2 className="text-xl font-semibold mb-3">{city.name}</h2>

                    {data ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr>
                              <th className="px-3 py-2 border-b">Date</th>
                              <th className="px-3 py-2 border-b">High (°F)</th>
                              <th className="px-3 py-2 border-b">Low (°F)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.forecast.map((f) => (
                              <tr key={f.date}>
                                <td className="px-3 py-2 border-b align-top">{f.date}</td>
                                <td className="px-3 py-2 border-b">{f.maxTemp}</td>
                                <td className="px-3 py-2 border-b">{f.minTemp}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">No forecast data available.</p>
                    )}
                  </section>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
