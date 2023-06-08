import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, onClick }) => (
	<div onClick={onClick}>
		<img
			src={'https://img.icons8.com/nolan/2x/marker.png'}
			alt="Location Icon"
			style={{ width: '30px', height: '30px' }}
		/>
		{text}
	</div>
);
const MapContainer = ({ userCoordinates, locations }) => {
	const apiKey = process.env.REACT_APP_GOOGLE_MAP_API;
	const handleMarkerClick = (location) => {
		console.log('Marker clicked:', location);
		// Perform any desired action when a marker is clicked
	};

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: apiKey }}
				center={userCoordinates}
				defaultZoom={11}
			>
				<AnyReactComponent
					lat={11.9630456}
					lng={8.55034210353827}
					text="My Marker"
				/>
				{locations.map((location) => (
					<AnyReactComponent
						key={location.id}
						lat={location.latitude}
						lng={location.longitude}
						text={location.title}
						onClick={() => handleMarkerClick(location)}
					/>
				))}
			</GoogleMapReact>
		</div>
	);
};

export default MapContainer;
// ({
// 	 // Replace with your Google Maps API key
// })(MapContainer);
