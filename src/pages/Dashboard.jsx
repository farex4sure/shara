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
	const videos = ['Qyu-fZ8BOnI', 'yukvSfTxrh8', '7fVUyVuyP6I', '7SCBdcXg2fs'];
	const videoId = videos[Math.floor(Math.random() * videos.length)];
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
		<div className="relative h-full overflow-y-auto">
			<div className=" md:mx-32 py-5">
				<div className="mt-1 mt-13 rounded-lg p-2 space-y-3 shadow-lg">
					<div className="text-lg mt-13 my-2 flex px-2">
						<div className="flex-1">
							<h1 className="text-2xl font-semibold">Welcome Salma!</h1>
							<p className="mt-1 text-sm">Let take action together. 👋</p>
						</div>
						<div className="">
							<p className="text-lg font-semibold">Today's</p>
							<p className="text-2xl font-semibold">
								25<sup>&deg;C</sup>
							</p>
						</div>
					</div>
					<h2 className="text-2xl font-extrabold p-2 text-green-500">
						Wallet:
						<span className="text-xl mx-3 font-semibold my-2">
							&#8358; {`18,420.81`}
						</span>
					</h2>
				</div>
				<div className="h-[300px]">
					<YouTubeVideo videoId={videoId} />
				</div>
				<div className="text-lg my-2 space-y-2 px-1">
					<h2 className="text-2xl font-extrabold my-2">Notifications</h2>
					<div className="rounded-lg px-4 py-3 bg-gray-50">
						<p className="font-semibold text-xl text-green-500">Credit</p>
						<p className="font-semibold text-green-500">
							You have reward for the 5kg waste you sold
						</p>
					</div>
					<div className=" rounded-lg px-4 py-3 bg-gray-50">
						<p className="font-semibold text-xl text-green-500">New message</p>
						<p className="font-semibold text-green-500">
							Share your progress with your friends to invite them on shara
						</p>
					</div>

					<div className="rounded-lg px-4 py-3 bg-gray-50">
						<p className="font-semibold text-xl text-green-500">Alert</p>
						<p className="font-semibold text-xl text-green-500">
							Check your progress on shara
						</p>
					</div>
					<div className="rounded-lg px-4 py-1 bg-gray-50 invisible">
						<p className="font-semibold text-xl text-green-500">
							Check your progress on shara
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between shadow fixed bottom-0 w-full p-2 bg-gray-50 z-10">
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
				<a href="./notifications">
					<div className="p-1">
						<FiBell className="w-8 h-8 md:w-14 md:h-14" color="#228e01" />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Dashboard;
