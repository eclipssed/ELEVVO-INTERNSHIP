"use client";
import React, { useEffect, useState } from "react";
import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/SearchBar";
import useGeolocation from "@/hook/useGeoLocation";
import { getWeather } from "@/actions/actions";

type WeatherSummary = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  temp: number;
  description: string;
  icon: string;
  daily: Array<{
    dt: number;
    min: number;
    max: number;
    description: string;
    icon: string;
  }>;
};

// Mapping Open-Meteo weather codes → readable text/icons
const weatherCodeMap: Record<number, { description: string; icon: string }> = {
  0: { description: "Clear sky", icon: "☀️" },
  1: { description: "Mainly clear", icon: "🌤️" },
  2: { description: "Partly cloudy", icon: "⛅" },
  3: { description: "Overcast", icon: "☁️" },
  45: { description: "Fog", icon: "🌫️" },
  48: { description: "Depositing rime fog", icon: "🌫️" },
  51: { description: "Light drizzle", icon: "🌦️" },
  53: { description: "Moderate drizzle", icon: "🌦️" },
  55: { description: "Dense drizzle", icon: "🌧️" },
  61: { description: "Slight rain", icon: "🌧️" },
  63: { description: "Moderate rain", icon: "🌧️" },
  65: { description: "Heavy rain", icon: "🌧️" },
  71: { description: "Slight snow", icon: "❄️" },
  73: { description: "Moderate snow", icon: "❄️" },
  75: { description: "Heavy snow", icon: "❄️" },
  95: { description: "Thunderstorm", icon: "⛈️" },
  99: { description: "Severe thunderstorm", icon: "⛈️" },
};

function transformPayload(id: string, payload: any) {
  // payload is already normalized by server action/api route for Open-Meteo
  const name = payload.location?.name || payload.name || "Unknown";
  const lat = payload.location?.lat || payload.lat || 0;
  const lon = payload.location?.lon || payload.lon || 0;

  // Open-Meteo current
  const current = payload.current || payload.current_weather || {};
  const temp = current.temp ?? current.temperature ?? 0;

  const code = current.weathercode ?? current.code ?? 0;
  const currentMeta = weatherCodeMap[code] || {
    description: "Clear",
    icon: "☀️",
  };

  // Daily (Open-Meteo returns arrays of dates + temps + codes)
  let daily: any[] = [];
  if (payload.daily) {
    const { time, temperature_2m_min, temperature_2m_max, weathercode } =
      payload.daily;
    daily = time.slice(0, 3).map((t: string, idx: number) => {
      const dCode = weathercode[idx];
      const dMeta = weatherCodeMap[dCode] || {
        description: "Clear",
        icon: "☀️",
      };
      return {
        dt: new Date(t).getTime() / 1000,
        min: Math.round(temperature_2m_min[idx]),
        max: Math.round(temperature_2m_max[idx]),
        description: dMeta.description,
        icon: dMeta.icon,
      };
    });
  }

  return {
    id,
    name,
    lat,
    lon,
    temp: Math.round(temp),
    description: currentMeta.description,
    icon: currentMeta.icon,
    daily,
  };
}

export default function WeatherDashboardPage() {
  const [cities, setCities] = useState<WeatherSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { coords, loading: geoLoading, error: geoError } = useGeolocation();

  useEffect(() => {
    if (coords) {
      fetchByCoords(coords.latitude, coords.longitude);
    }
  }, [coords]);

  const fetchByCoords = async (lat: number, lon: number) => {
    setError(null);
    setLoading(true);
    try {
      const payload = await getWeather({ lat, lon });

      if ((payload as any).error) throw new Error((payload as any).error);

      const id = `loc-${lat}-${lon}`;
      const summary: WeatherSummary = transformPayload(id, payload);
      setCities((s) => [summary, ...s.filter((c) => c.id !== id)]);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const fetchByCity = async (q: string) => {
    if (!q) return;
    setError(null);
    setLoading(true);
    try {
      const payload = await getWeather({ city: q });
      console.log("city payload: ", payload);
      if ((payload as any).error) throw new Error((payload as any).error);

      const id = `city-${payload.location?.name || q}`;
      const summary: WeatherSummary = transformPayload(id, payload);
      setCities((s) => [summary, ...s.filter((c) => c.id !== id)]);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const removeCity = (id: string) =>
    setCities((s) => s.filter((c) => c.id !== id));

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#071423] text-slate-800 dark:text-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">WeatherHub</h1>
          <div className="text-sm text-slate-500 hidden sm:block">
            Minimal • Fast • Uses your location (with permission)
          </div>
        </header>

        <SearchBar
          onSearch={fetchByCity}
          onUseLocation={() =>
            coords && fetchByCoords(coords.latitude, coords.longitude)
          }
          geoLoading={geoLoading}
        />

        {error && <div className="mt-4 text-red-500">Error: {error}</div>}

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading && cities.length === 0 ? (
            <div className="col-span-full p-6 rounded-lg bg-white dark:bg-[#08232f] shadow">
              Loading…
            </div>
          ) : (
            cities.map((c) => (
              <WeatherCard
                key={c.id}
                data={c}
                onRemove={() => removeCity(c.id)}
              />
            ))
          )}
        </div>

        <footer className="mt-8 text-xs text-slate-400">
          Data provided by Open-Meteo via server proxy. Respect the weather.
        </footer>
      </div>
    </main>
  );
}
