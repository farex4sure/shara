import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { locations } from '../Data';
import MapComponent from './MapComponent';
import Geocode from 'react-geocode';
import { useLocation } from '../hooks/useLocation';
import { HiXCircle } from 'react-icons/hi';
const Location = () => {
	const [address, setAddress] = useState('');
	const [coordinates, setCoordinates] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [enterLocation, setEnterLocation] = useState(true);
	const { user } = useContext(AuthContext);
	const title = user.user?.name;
	const phone = user.user?.phone;
	const { getlocationCoordinates } = useLocation();
	// 'No 2, Ahmadu Bello Way, Nassarawa, Kano Nigeria';
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
					setCoordinates({ lat, lng, address, phone, title });
					setEnterLocation(false);
					setIsLoading(false);
				},
				(error) => {
					setIsLoading(false);
					console.error(
						'Geocode was not successful for the following reason:',
						error
					);
				}
			);
		}
	};
	return (
		<div className="mt-8 py-10 h-screen relative w-full">
			<h3 className="text-center text-xl md:text-2xl font-semibold m-4 z-20 relative w-8/12 mx-auto text-green-500">
				Find Waste Collector
			</h3>
			<div className="w-full h-fit pt-6 fixed top-12 bottom-0">
				<MapComponent
					locations={locations}
					userCoordinates={coordinates}
					setEnterLocation={setEnterLocation}
				/>
			</div>

			{enterLocation ? (
				<form
					className="w-full flex flex-col py-4 fixed bottom-0 px-2 z-10 bg-white"
					onSubmit={handleSubmit}
				>
					<div className="mt-2">
						<div className="flex justify-between">
							<label htmlFor="location" className="text-lg font-semibold">
								Enter your Location:
							</label>
							<HiXCircle
								onClick={() => setEnterLocation(false)}
								className="h-6 w-6 text-red-400 hover:text-red-500"
							/>
						</div>
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
						{!isLoading ? 'Enter Your Location' : 'Checking location ...'}
					</button>
				</form>
			) : (
				''
			)}
		</div>
	);
};

export default Location;
