import axios from "axios";
import type { WeatherData } from "../types/weather";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fethcWeatherData = async (
	lat: number,
	lon: number
): Promise<WeatherData> => {
	try {
		const response = await axios.get(
			`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ja`
		);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error("データの取得に失敗しました");
		}
		throw new Error("予期せぬエラーが発生しました");
	}
};
