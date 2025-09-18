"use client";
import { useEffect, useState } from "react";

type ForecastDay = { date: string; min: number; max: number; code: number };
type WeatherData = {
  city: string;
  currentTemp: number;
  code: number;
  forecast: ForecastDay[];
};

export default function App() {
  const [city, setCity] = useState("");
  const [weatherList, setWeatherList] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(false);

  // auto-fetch user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      fetchWeatherByCoords(latitude, longitude, "Your Location");
    });
  }, []);

  async function fetchCoordsByCity(name: string) {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        name
      )}&count=1`
    );
    const data = await res.json();
    if (!data.results || data.results.length === 0)
      throw new Error("City not found");
    const { latitude, longitude, name: cityName, country } = data.results[0];
    return { latitude, longitude, city: `${cityName}, ${country}` };
  }

  async function fetchWeatherByCoords(
    lat: number,
    lon: number,
    label?: string
  ) {
    try {
      setLoading(true);
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
      const res = await fetch(url);
      const data = await res.json();

      const forecast = data.daily.time
        .slice(0, 3)
        .map((date: string, i: number) => ({
          date,
          min: Math.round(data.daily.temperature_2m_min[i]),
          max: Math.round(data.daily.temperature_2m_max[i]),
          code: data.daily.weathercode[i],
        }));

      const weather: WeatherData = {
        city: label || data.timezone, // fallback if label not given
        currentTemp: Math.round(data.current_weather.temperature),
        code: data.current_weather.weathercode,
        forecast,
      };

      setWeatherList((prev) => {
        if (prev.find((w) => w.city === weather.city)) return prev;
        return [...prev, weather];
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function fetchWeatherByCity(name: string) {
    try {
      setLoading(true);
      const { latitude, longitude, city } = await fetchCoordsByCity(name);
      await fetchWeatherByCoords(latitude, longitude, city);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function getWeatherIcon(code: number) {
    // crude mapping, can expand with Open-Meteo weather code table
    if ([0].includes(code)) return "☀️"; // Clear
    if ([1, 2, 3].includes(code)) return "⛅"; // Cloudy
    if ([45, 48].includes(code)) return "🌫️"; // Fog
    if ([51, 61, 80].includes(code)) return "🌦️"; // Rain
    if ([71, 73, 75].includes(code)) return "❄️"; // Snow
    return "🌍"; // default
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center">Weather Dashboard</h1>

      <div className="flex justify-center mb-6">
        <input
          className="border p-2 rounded-l-md w-64"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-md"
          onClick={() => {
            if (city.trim()) {
              fetchWeatherByCity(city.trim());
              setCity("");
            }
          }}
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weatherList.map((w) => (
          <div
            key={w.city}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold">{w.city}</h2>
            <div className="text-6xl">{getWeatherIcon(w.code)}</div>
            <p className="text-2xl font-bold">{w.currentTemp}°C</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {w.forecast.map((f) => (
                <div
                  key={f.date}
                  className="flex flex-col items-center text-sm"
                >
                  <p>{f.date.split("-").slice(1).join("/")}</p>
                  <span className="text-2xl">{getWeatherIcon(f.code)}</span>
                  <p>
                    {f.min}°/{f.max}°
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
