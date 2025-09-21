"use server";

export async function getWeather({
  lat,
  lon,
  city,
}: {
  lat?: number;
  lon?: number;
  city?: string;
}) {
  try {
    let latitude = lat;
    let longitude = lon;

    // 1. If city is provided, resolve city → lat/lon using Open-Meteo’s geocoding API
    if (city && (!lat || !lon)) {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1&language=en&format=json`;

      const geoResp = await fetch(geoUrl);
      // console.log("geoResp: ", geoResp);
      if (!geoResp.ok) throw new Error("Failed to resolve city name");
      const geoData = await geoResp.json();
      // console.log("geoData: ", geoData);

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      latitude = geoData.results[0].latitude;
      longitude = geoData.results[0].longitude;
      city = geoData.results[0].name;
    }

    if (!latitude || !longitude) {
      throw new Error("Missing coordinates");
    }

    // 2. Fetch current weather + 7-day forecast
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

    const resp = await fetch(url, { next: { revalidate: 3600 } });
    // console.log("resp: ", resp);
    if (!resp.ok) throw new Error("Weather fetch failed");

    const data = await resp.json();
    // console.log("data: ", data);

    // Normalize into what your component expects
    return {
      location: {
        name: city || `${latitude}, ${longitude}`,
        lat: latitude,
        lon: longitude,
      },
      current: {
        temperature: data.current_weather.temperature,
        weathercode: data.current_weather.weathercode,
        windspeed: data.current_weather.windspeed,
        winddirection: data.current_weather.winddirection,
        time: data.current_weather.time,
      },
      daily: {
        time: data.daily.time,
        temperature_2m_min: data.daily.temperature_2m_min,
        temperature_2m_max: data.daily.temperature_2m_max,
        weathercode: data.daily.weathercode,
      },
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { err: "Unknown Error" };
  }
}
