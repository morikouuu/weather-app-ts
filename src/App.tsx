import { useState } from "react";
import "./App.css";

import WeatherCard from "./componets/WeatherCard";
import type { LocationData, WeatherData } from "./types/weather";
import { getCurrentLocation } from "./api/geolocationApi";
import { fethcWeatherData } from "./api/weatherApi";
function App() {
	const [location, setLocation] = useState<LocationData | null>(null);
	const [weather, setWeather] = useState<WeatherData | null>(null);

	const handleGetWeatherByLocation = async () => {
		setWeather(null);
		setLocation(null);
		try {
			const result = await getCurrentLocation();
			setLocation(result);
			if (!location) return;
			const weatherData = await fethcWeatherData(location.lat, location.lon);
			setWeather(weatherData);
			console.log(weather);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<h1>天気予報アプリ</h1>

			<button onClick={handleGetWeatherByLocation}>天気を取得</button>
			<WeatherCard />
			{weather && (
				<div>
					<div>場所: {weather.name}</div>
					<div>気温: {Math.round(weather.main.temp)}℃</div>
					<div>天気: {weather.weather[0].description}</div>
				</div>
			)}
		</>
	);
}

export default App;
