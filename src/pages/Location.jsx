import React, { useState } from 'react';
import MapComponent from './MapComponent';

const Location = () => {
	const [location, setLocation] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const userCoordinates = [11.8948389, 8.5364136];
	const locations = [
		{
			id: 0,
			tittle: 'kano',
			latitude: 11.9630456,
			longitude: 8.55034210353827,
		},
		{
			id: 1,
			tittle: 'NSR',
			latitude: 12.0001383,
			longitude: 8.5226245,
		},
		{
			id: 2,
			tittle: 'MIJ',
			latitude: 12.17485215,
			longitude: 8.65940249296704,
		},
		{
			id: 3,
			tittle: 'UGG',
			latitude: 12.08420585,
			longitude: 8.631911307617772,
		},
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(location);
		setIsLoading(false);
	};
	return (
		<div className="p-1 mt-8 mx-2 py-10 h-screen relative">
			<h3 className="text-center text-2xl font-semibold m-4">
				Find waste collector
			</h3>
			<div className="debug relative w-full max-h-[700px] z-10">
				<MapComponent locations={locations} userCoordinates={userCoordinates} />
			</div>
			<form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
				<div className="mt-2">
					<label htmlFor="location" className="text-lg font-semibold">
						Location:
					</label>
					<input
						onChange={(e) => setLocation(e.target.value)}
						className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
						type="text"
						value={location}
						placeholder="Nasarawa, Kano State, Nigeria"
						id="location"
						autoComplete="location"
					/>
				</div>
				<button
					type="submit"
					className="bg-[#228e01] w-full text-white py-3 my-6 rounded font-bold"
					disabled={isLoading}
				>
					Enter Location
				</button>
			</form>
		</div>
	);
};

export default Location;
