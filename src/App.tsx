import { useState } from "react";
import "./App.css";

import { WeatherCard } from "./componets/WeatherCard";
import type { LocationData, WeatherData } from "./types/weather";
import { getCurrentLocation } from "./api/geolocationApi";
import { fethcWeatherData } from "./api/weatherApi";
function App() {
	const [location, setLocation] = useState<LocationData | null>(null);
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(false);

	const handleGetWeatherByLocation = async () => {
		setWeather(null);
		setLocation(null);
		setLoading(true);
		try {
			const result = await getCurrentLocation();
			setLocation(result);
			if (!location) return;
			const weatherData = await fethcWeatherData(location.lat, location.lon);
			setWeather(weatherData);
			console.log(weather);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<h1>天気アプリ</h1>

			<button onClick={handleGetWeatherByLocation}>天気を取得</button>
			<WeatherCard weather={weather} loading={loading} />
		</>
	);
}

export default App;
