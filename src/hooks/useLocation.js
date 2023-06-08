import { useState } from 'react';
import axios from 'axios';
export const useLocations = () => {
	const Key = process.env.REACT_APP_GOOGLE;
	const [data, setData] = useState();

	const getLocation = (location) => {
		
	};

	return { data, getLocation };
};
