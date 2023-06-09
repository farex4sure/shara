import { useState } from 'react';
import axios from 'axios';
export const useWeather = () => {
	const [weather, setWeather] = useState(null);
	// const API_KEY = process.env.REACT_APP_IBM_WEATHER_API;
	const Key = process.env.REACT_APP_WEATHER_API;

	const getWeather = async (location) => {
		axios
			.get(
				`https://api.weatherapi.com/v1/current.json?key=${Key}&q=${location}&aqi=no`
				// `https://api.weather.com/v3/wx/conditions/current?apiKey=${API_KEY}&language=en-US&format=json&units=m&location=${location}`
			)
			.then((data) => {
				setWeather(data.data?.current);
			})
			.catch((err) => console.log(err));
	};

	return { getWeather, weather };
};
