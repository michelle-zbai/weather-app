import React from "react";
import { DailyForecast } from "@/types/weather";

interface ForecastTableProps {
  forecast: DailyForecast[];
}

/**
 * ForecastTable
 *
 * Small reusable table component that renders a list of daily forecasts
 * with Date | High | Low columns. Matches the table used on the All Cities page.
 */
export function ForecastTable({ forecast }: ForecastTableProps) {
  return (
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
          {forecast.map((f) => (
            <tr key={f.date}>
              <td className="px-3 py-2 border-b align-top">{f.date}</td>
              <td className="px-3 py-2 border-b">{f.maxTemp}</td>
              <td className="px-3 py-2 border-b">{f.minTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ForecastTable;
