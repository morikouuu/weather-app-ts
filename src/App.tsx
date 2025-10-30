import { useState } from "react";
import "./App.css";

import WeatherCard from "./componets/WeatherCard";
import type { LocationData, WeatherData } from "./types/weather";
import { getCurrentLocation } from "./api/geolocationApi";
import { fethcWeatherData } from "./api/weatherApi";
function App() {
	const [location, setLocation] = useState<LocationData | null>(null);
	const [weather, setWeather] = useState<WeatherData | null>(null);

	const handleGetLocation = async () => {
		try {
			const result = await getCurrentLocation();
			setLocation(result);
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};
	const handleGetWeather = async () => {
		if (!location) return;
		try {
			const result = await fethcWeatherData(location?.lat, location?.lon);
			setWeather(result);
			console.log(weather);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<h1>天気予報アプリ</h1>

			<WeatherCard />
		</>
	);
}

export default App;
