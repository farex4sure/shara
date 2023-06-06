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
		<div className="mt-16">
			<Map locations={locations} userCoordinates={userCoordinates} />
		</div>
	);
};

export default Location;
