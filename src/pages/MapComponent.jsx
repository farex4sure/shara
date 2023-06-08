import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import { BsChatTextFill, BsPhone } from 'react-icons/bs';
import { HiXCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import userImage from '../../src/assets/hoslogo.png';

const AnyReactComponent = ({ text, onClick }) => (
	<div onClick={onClick}>
		<img
			src={'https://img.icons8.com/nolan/2x/marker.png'}
			alt="Location Icon"
			style={{ width: '30px', height: '30px' }}
		/>
		<p>{text}</p>
	</div>
);
const UserComponent = ({ text, onClick }) => (
	<div onClick={onClick}>
		<img
			src={userImage}
			alt="Location Icon"
			style={{ width: '30px', height: '30px' }}
		/>
		<p>{text}</p>
	</div>
);

const MapContainer = ({ userCoordinates, locations }) => {
	const apiKey = process.env.REACT_APP_GOOGLE_MAP_API;
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [userLocation, setUserLocation] = useState(null);
	const navigate = useNavigate();
	const handleMarkerClick = (location) => {
		setSelectedLocation(location);
	};
	const handleUserMarkerClick = (location) => {
		setUserLocation(location);
	};

	const handleCloseModal = () => {
		setSelectedLocation(null);
		setUserLocation(null);
	};

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: apiKey }}
				defaultCenter={[12.0035373, 8.5611104]}
				defaultZoom={11}
				yesIWantToUseGoogleMapApiInternals
			>
				<UserComponent
					lat={userCoordinates.lat}
					lng={userCoordinates.lng}
					text={userCoordinates.title}
					onClick={() => handleUserMarkerClick(userCoordinates)}
				/>
				{locations.map((location, index) => (
					<AnyReactComponent
						key={index}
						lat={location.latitude}
						lng={location.longitude}
						text={location.title}
						onClick={() => handleMarkerClick(location)}
					/>
				))}
			</GoogleMapReact>
			<Modal
				isOpen={selectedLocation !== null}
				ariaHideApp={false}
				onRequestClose={handleCloseModal}
				contentLabel="Location Modal"
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-md z-10 w-10/12 md:max-w-md"
				overlayClassName="fixed inset-0 bg-black bg-opacity-50"
			>
				<h2 className="text-green-500 text-lg font-semibold text-center">
					Agent information
				</h2>
				{selectedLocation && (
					<div className="w-fit pt-2">
						<h2 className="capitalize">
							<span className="font-semibold">Name: </span>
							{selectedLocation.title}
						</h2>
						<p>
							<span className="font-semibold">Address:</span>{' '}
							{selectedLocation.address}
						</p>
						<p>
							<span className="font-semibold">Phone:</span>{' '}
							{selectedLocation.phone}
						</p>
						<div className="mt-2 flex space-x-2 p-1 mb-1">
							<BsChatTextFill
								onClick={() => navigate('/chat')}
								className="h-6 w-6 text-green-500 hover:text-[#228e01] cursor-pointer"
							/>
							<BsPhone
								onClick={() => navigate('/chat')}
								className="h-6 w-6 text-green-500 hover:text-[#228e01] cursor-pointer"
							/>
						</div>
					</div>
				)}
				<HiXCircle
					className="absolute top-2 h-6 w-6 right-2 text-gray-500 hover:text-red-500 cursor-pointer"
					onClick={handleCloseModal}
				/>
			</Modal>
			<Modal
				isOpen={userLocation !== null}
				ariaHideApp={false}
				onRequestClose={handleCloseModal}
				contentLabel="Location Modal"
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-md z-10 w-10/12 md:max-w-md"
				overlayClassName="fixed inset-0 bg-black bg-opacity-50"
			>
				<h2 className="text-green-500 text-lg font-semibold text-center">
					User information
				</h2>
				{userLocation && (
					<div className="w-fit pt-2">
						<h2 className="capitalize">
							<span className="font-semibold">Name: </span>
							{selectedLocation.title}
						</h2>
						<p>
							<span className="font-semibold">Address:</span>{' '}
							{selectedLocation.address}
						</p>
						<p>
							<span className="font-semibold">Phone:</span>{' '}
							{selectedLocation.phone}
						</p>
					</div>
				)}
				<HiXCircle
					className="absolute top-2 h-6 w-6 right-2 text-gray-500 hover:text-red-500 cursor-pointer"
					onClick={handleCloseModal}
				/>
			</Modal>
		</div>
	);
};

export default MapContainer;
// ({
// 	 // Replace with your Google Maps API key
// })(MapContainer);
