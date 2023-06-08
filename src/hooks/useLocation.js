import { useState } from 'react';
import Geocode from 'react-geocode';
export const useLocation = () => {
	Geocode.setLocationType('ROOFTOP');
	Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API);
	Geocode.setLanguage('en');
	Geocode.setRegion('es');
	const [data, setData] = useState();

	const getlocationCoordinates = (address) => {
		Geocode.fromAddress(address).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log(lat, lng);
				setData({ result: [lat, lng] });
				return data;
			},
			(error) => {
				console.error(
					'Geocode was not successful for the following reason:',
					error
				);
			}
		);
	};

	

	return { data, getlocationCoordinates };
};
