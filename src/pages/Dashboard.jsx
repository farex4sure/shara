import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import UserImg from "../assets/pngwing.com (59).png";
import { useWallet } from '../hooks/useWallet';
// import RecycleBin from '../assets/pngwing.com (76).png';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import Bot from '../components/Bot';
// FiCalendar, FiCloud;
import { FiBell } from 'react-icons/fi';
import { BsChatTextFill } from 'react-icons/bs';
import { FaWallet, FaMapMarked } from 'react-icons/fa';
import YouTubeVideo from './YouTubeVideo';

const Dashboard = () => {
	const videoId = 'Qyu-fZ8BOnI';
	const { user } = useContext(AuthContext);
	const { wallet, loading, error } = useWallet();
	const phone = user.user?.phone;
	useEffect(() => {
		wallet({ phone });
	}, [phone, wallet]);
	if (loading) {
		return <p className="text-5xl text-center">Loading</p>;
	}
	if (error) {
		console.log(error);
		return <p className="text-5xl text-center text-red-600">Error</p>;
	}
	return (
		<div className="relative h-full">
			<div className=" md:mx-32 mx-5 py-5 ">
				<div className="text-lg mt-12 my-2 flex">
					<div className="flex-1">
						<h1 className="text-2xl font-semibold">Welcome Salma!</h1>
						<p className="mt-1 text-sm">Let take action together. 👋</p>
					</div>
					<div className="">
						<p className="text-2xl font-semibold">Today's</p>
						<p>37</p>
					</div>
				</div>
				<div>
					<YouTubeVideo videoId={videoId} />
				</div>
				<div className="rounded-lg text-white p-2 space-y-3 shadow-lg">
					<h2 className="text-2xl font-extrabold p-2 text-green-500">
						Wallet:
						<span className="text-xl mx-3 font-semibold my-2">
							&#8358; {`18,420.81`}
						</span>
					</h2>
				</div>
				<div className="text-lg my-2">
					<h2 className="text-2xl font-extrabold">Notifications</h2>
					<div className="marquee-container bg-gray-200 overflow-hidden">
						<div className="marquee inline-block whitespace-nowrap animation-marquee">
							<span className="text-green-500 text-xl font-semibold">
								A Clean, Healthy and Wealthy City for All, Remember to recycle,
								reuse and reduce waste in your community.
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between shadow absolute bottom-0 w-full p-2">
				<a href="./location">
					<div className="p-1">
						<FaMapMarked className="w-8 h-8 md:w-14 md:h-14" color="#228e01" />
					</div>
				</a>
				<a href="./wallet">
					<div className="p-1">
						<FaWallet className="w-8 h-8 md:w-14 md:h-14" color="#228e01" />
					</div>
				</a>
				<a href="./chat">
					<div className="p-1">
						<BsChatTextFill
							className="w-8 h-8 md:w-14 md:h-14"
							color="#228e01"
						/>
					</div>
				</a>
				<a href="./wallet">
					<div className="p-1">
						<FiBell className="w-8 h-8 md:w-14 md:h-14" color="#228e01" />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Dashboard;
