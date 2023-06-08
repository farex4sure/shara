import React, { useState, useEffect } from 'react';
import { locations } from '../Data';
import MapComponent from './MapComponent';
import Geocode from 'react-geocode';
import { useLocation } from '../hooks/useLocation';

const Location = () => {
	const [address, setAddress] = useState('');
	const [coordinates, setCoordinates] = useState([12.0035373, 8.5611104]);
	const [isLoading, setIsLoading] = useState(false);
	const [enterLocation, setEnterLocation] = useState(true);
	// 'No 2, Ahmadu Bello Way, Nassarawa, Kano Nigeria';
	const { getlocationCoordinates } = useLocation();
	useEffect(() => {
		const savedLocation = localStorage.getItem('address');
		if (savedLocation) {
			setEnterLocation(false);
			const data = getlocationCoordinates(savedLocation);
			if (data.result) {
				setCoordinates(data.result);
			}
		}
	}, [getlocationCoordinates]);

	Geocode.setLocationType('ROOFTOP');
	Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API);
	Geocode.setLanguage('en');
	Geocode.setRegion('es');
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (address !== '') {
			setIsLoading(true);
			Geocode.fromAddress(address).then(
				(response) => {
					const { lat, lng } = response.results[0].geometry.location;
					console.log(lat, lng);
					setCoordinates(lat, lng);
					setEnterLocation(true);
				},
				(error) => {
					console.error(
						'Geocode was not successful for the following reason:',
						error
					);
				}
			);
			setIsLoading(false);
		}
	};
	return (
		<div className="mt-8 py-10 h-screen relative w-full">
			<h3 className="text-center text-2xl font-semibold m-4 z-20 relative">
				Find Waste Collector
			</h3>
			<div className="w-full h-full fixed top-12 bottom-0">
				<MapComponent locations={locations} userCoordinates={coordinates} />
			</div>

			{enterLocation ? (
				<form
					className="w-full flex flex-col py-4 fixed bottom-0 px-2 z-10 bg-white"
					onSubmit={handleSubmit}
				>
					<div className="mt-2">
						<label htmlFor="location" className="text-lg font-semibold">
							Location:
						</label>
						<input
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
							type="text"
							placeholder="Nasarawa, Kano State, Nigeria"
							id="location"
							autoComplete="location"
						/>
					</div>
					<button
						type="submit"
						className="bg-[#228e01] w-full text-white py-3 my-2 rounded font-bold"
						disabled={isLoading}
					>
						Enter Your Location
					</button>
				</form>
			) : (
				''
			)}
		</div>
	);
};

export default Location;
