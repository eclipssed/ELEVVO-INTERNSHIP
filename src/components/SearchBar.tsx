"use client";
import { LocationEdit, Search } from "lucide-react";
import React, { useState } from "react";

export default function SearchBar({
  onSearch,
  onUseLocation,
  geoLoading,
}: {
  onSearch: (q: string) => void;
  onUseLocation: () => void;
  geoLoading: boolean;
}) {
  const [q, setQ] = useState("");
  return (
    <div className="flex gap-3">
      <div className="flex-1 w-full">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(q);
              setQ("");
            }
          }}
          placeholder="Search city — e.g. Karachi, London, Tokyo"
          className="w-full p-3 rounded-md shadow-sm border border-slate-200 dark:border-[#0b2a37] bg-white dark:bg-[#06202a]"
        />
      </div>
      <button
        onClick={() => {
          onSearch(q);
          setQ("");
        }}
        className="px-4 py-2 rounded-md bg-slate-800 text-white"
      >
        <Search className="block sm:hidden" />
        <span className="hidden sm:block">Search</span>
      </button>
      <button
        onClick={onUseLocation}
        disabled={geoLoading}
        className="px-4 py-2 rounded-md border"
      >
        {geoLoading ? (
          "Locating…"
        ) : (
          <>
            <LocationEdit className="block sm:hidden" />
            <span className="hidden sm:block">Use my location</span>
          </>
        )}
      </button>
    </div>
  );
}
