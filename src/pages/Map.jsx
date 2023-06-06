import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Map = ({ locations, userCoordinates }) => {
	const hosIcon = L.icon({
		iconUrl: 'https://img.icons8.com/nolan/2x/marker.png',
		iconSize: [38, 56],
		iconAnchor: [25, 16],
    });
	const userIcon = L.icon({
		iconUrl: 'https://img.icons8.com/nolan/2x/marker.png',
		iconSize: [38, 56],
		iconAnchor: [25, 16],
    });
	return (
		<MapContainer
			center={userCoordinates}
			zoom={13}
			scrollWheelZoom={false}
			zoomOffset={-1}
			style={{ height: '400px', width: '100%' }}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{/* Render the user marker */}
			<Marker position={userCoordinates} icon={userIcon}>
				<Popup>User</Popup>
			</Marker>

			{locations.map((location) => (
				<Marker
					key={location.id}
					position={[location.latitude, location.longitude]}
					icon={hosIcon}
				>
					<Popup>{location.tittle}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default Map;
