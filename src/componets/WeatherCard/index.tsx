import type { WeatherData } from "../../types/weather";
import "./style.css";
type WeatherCardProps = {
	weather: WeatherData | null;
	loading?: boolean;
	error?: string | null;
};

export const WeatherCard = ({
	weather,
	loading,
	error = null,
}: WeatherCardProps) => {
	if (loading) {
		return <div className="weather-card">天気を取得中です...</div>;
	}

	if (error) {
		return (
			<div className="weather-card error">
				<p>エラー: {error}</p>
			</div>
		);
	}

	if (!weather) {
		return (
			<div className="weather-card">
				<p>まだ天気データがありません</p>
			</div>
		);
	}

	const { main, wind, weather: weatherArray } = weather;
	const primary = weatherArray[0];

	return (
		<div className="weather-card">
			<header className="weather-header">
				<div className="weather-icon">
					<img
						src={`https://openweathermap.org/img/wn/${primary.icon}@2x.png`}
						alt={primary.description}
					/>
					<span>{primary.main}</span>
				</div>
			</header>

			<section className="weather-main">
				<div className="temperature">
					<span>{Math.round(main.temp)}</span>
					<span>°C</span>
				</div>
				<div className="condition">
					<p className="feels-like">
						体感温度: {Math.round(main.feels_like)}°C
					</p>
				</div>
			</section>

			<section className="weather-details">
				<div className="detail">
					<span className="label">湿度</span>
					<span className="value">{main.humidity}%</span>
				</div>
				<div className="detail">
					<span className="label">気圧</span>
					<span className="value">{main.pressure} hPa</span>
				</div>
				<div className="detail">
					<span className="label">風速</span>
					<span className="value">{wind.speed} m/s</span>
				</div>
				<div className="detail">
					<span className="label">風向</span>
					<span className="value">{wind.deg}°</span>
				</div>
			</section>
		</div>
	);
};
