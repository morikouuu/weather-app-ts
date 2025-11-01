// src/types/weather.ts
export type WeatherData = {
	main: {
		temp: number;
		feels_like: number;
		humidity: number;
		pressure: number;
	};
	weather: {
		main: string;
		description: string;
		icon: string;
	}[];
	wind: {
		speed: number;
		deg: number;
	};
	coord: {
		lat: number;
		lon: number;
	};
};

export type WeatherError = {
	message: string;
	cod: string;
};

export type LocationData = {
	lat: number;
	lon: number;
	error?: string;
};
