import React from 'react';
import Map from './Map';

const Location = () => {
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
	return (
		<div className="p-1 mt-8 mx-2 py-10 h-screen relative">
			<h3 className="text-center text-2xl font-semibold m-4">Locations</h3>
			<div className="">
				<Map locations={locations} userCoordinates={userCoordinates} />
			</div>
		</div>
	);
};

export default Location;
