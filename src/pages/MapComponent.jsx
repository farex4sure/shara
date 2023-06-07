// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// const accessToken =
// 	'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';
// const id = 'mapbox/streets-v11';
// // {
// // 	locations, userCoordinates;
// // }
// const Map = () => {
// 	// const hosIcon = L.icon({
// 	// 	iconUrl: 'https://img.icons8.com/nolan/2x/marker.png',
// 	// 	iconSize: [38, 56],
// 	// 	iconAnchor: [25, 16],
// 	// });
// 	const userIcon = L.icon({
// 		iconUrl: 'https://img.icons8.com/nolan/2x/marker.png',
// 		iconSize: [38, 56],
// 		iconAnchor: [25, 16],
// 	});
// 	return (
// 		<MapContainer
// 			center={[11.8948389, 8.5364136]}
// 			zoom={13}
// 			scrollWheelZoom={false}
// 			zoomOffset={-1}
// 			maxZoom={18}
// 			tileSize={512}
// 			style={{ height: '700px', width: '500px' }}
// 		>
// 			<TileLayer
// 				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// 				url={`https://api.mapbox.com/styles/v1/${id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
// 			/>
// 			{/* Render the user marker */}
// 			<Marker position={[11.8948389, 8.5364136]} icon={userIcon}>
// 				<Popup>User</Popup>
// 			</Marker>

// 			{/* {locations.map((location) => (
// 				<Marker
// 					key={location.id}
// 					position={[location.latitude, location.longitude]}
// 					icon={hosIcon}
// 				>
// 					<Popup>{location.tittle}</Popup>
// 				</Marker>
// 			))} */}
// 		</MapContainer>
// 	);
// };

// export default Map;

import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapComponent = ({ userCoordinates }) => {
	const mapboxToken =
		'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA'; // Replace with your Mapbox access token

	const [viewport, setViewport] = useState({
		width: '100%',
		height: '400px',
		latitude: userCoordinates[0],
		longitude: userCoordinates[1],
		zoom: 12,
	});

	return (
		<ReactMapGL
			{...viewport}
			mapboxApiAccessToken={mapboxToken}
			mapStyle="mapbox://styles/mapbox/streets-v11"
			onViewportChange={(viewport) => setViewport(viewport)}
		>
			<Marker latitude={userCoordinates[0]} longitude={userCoordinates[1]}>
				<div className="marker"></div>
			</Marker>
		</ReactMapGL>
	);
};

export default MapComponent;
