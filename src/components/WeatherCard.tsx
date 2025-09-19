"use client";
import React from "react";

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

export default function WeatherCard({
  data,
  onRemove,
}: {
  data: WeatherSummary;
  onRemove: () => void;
}) {
  return (
    <article className="p-4 rounded-2xl bg-white dark:bg-[#042a34] shadow flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{data.name}</h3>
          <div className="text-sm text-slate-500 dark:text-slate-300">
            {data.description}
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold">{data.temp}°</div>
          <div className="w-12 h-12 inline-block">{data.icon}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-2">
        {data.daily && data.daily.length ? (
          data.daily.map((d: any) => (
            <div
              key={d.dt}
              className="p-2 rounded-lg bg-slate-50 dark:bg-[#07333b] text-center text-xs"
            >
              <div>{new Date(d.dt * 1000).toLocaleDateString()}</div>
              <div className="mt-1">
                {Math.round(d.min)}° / {Math.round(d.max)}°
              </div>
              <div className="mt-1">{d.description}</div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-sm text-slate-400">
            No forecast available
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onRemove}
          className="text-xs underline cursor-pointer text-red-500"
        >
          Remove
        </button>
      </div>
    </article>
  );
}
