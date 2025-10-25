import { useState } from "react";
import "./App.css";
import SearchForm from "./componets/SearchForm";
import WeatherCard from "./componets/WeatherCard";
function App() {
	return (
		<>
			<h1>天気予報アプリ</h1>
			<SearchForm />
			<WeatherCard />
		</>
	);
}

export default App;
