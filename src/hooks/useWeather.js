import { useState } from 'react';
import axios from 'axios';
export const useWeather = () => {
	const [weather, setWeather] = useState(null);
	const Key = process.env.REACT_APP_WEATHER_API;

	const getWeather = async (location) => {
		axios
			.get(
				`https://api.weatherapi.com/v1/current.json?key=${Key}&q=${location}&aqi=no`
			)
			.then((data) => {
                setWeather(data.data?.current?.temp_c);
			})
			.catch((err) => console.log(err));
	};

	return { getWeather, weather };
};
