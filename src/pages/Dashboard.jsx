import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useWallet } from '../hooks/useWallet';
import { useWeather } from '../hooks/useWeather';
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
	const { getWeather, weather } = useWeather();
	const { wallet, loading, error } = useWallet();
	const phone = user.user?.phone;
	const name = user.user?.name;
	const location = user.user?.address || 'kano';
	useEffect(() => {
		wallet({ phone });
	}, [phone, wallet]);
	useEffect(() => {
		getWeather(location);
	}, [location, getWeather]);

	if (loading) {
		return <p className="text-5xl text-center">Loading</p>;
	}
	if (error) {
		console.log(error);
		// return <p className="text-5xl text-center text-red-600 mt-20">Error</p>;
	}
	return (
		<div className="relative h-full overflow-y-auto">
			<div className="md:mx-32 py-5 mt-10">
				<div className="mt-1 md:mt-5 mb-2 devide-y rounded-lg p-2 space-y-3 shadow-inset shadow-outset shadow-xl">
					<div className="my-2 flex px-2">
						<div className="flex-1">
							<h1 className="text-lg font-semibold">
								Welcome{' '}
								<span className="capitalize">
									{name?.substring(0, 15) || 'abdulsalam'}!
								</span>
							</h1>
							<p className="text-sm mt-1 font-semibold">
								Let take action together. 👋
							</p>
						</div>
						<div className="">
							<img
								src={weather?.condition?.icon}
								alt={weather?.condition?.text}
								className="h-6 w-6"
							/>
							<p className="text-lg font-semibold">
								{weather?.temp_c}
								<sup>&deg;C</sup>
							</p>
						</div>
					</div>
					<h2 className="text-xl font-extrabold p-2 text-green-500">
						Points:
						<span className="mx-1 font-semibold my-2">
							{user.wallet?.balance}
						</span>
					</h2>
				</div>
				<div className="h-[300px]">
					<YouTubeVideo videoId={videoId} />
				</div>
				<div className="text-sm my-2 space-y-2 px-1">
					<h2 className="text-lg font-semibold my-2 mx-2">Notifications</h2>
					<div className="rounded-lg px-4 py-3 bg-gray-50">
						<p className="font-semibold text-green-500">Credit</p>
						<p className="font-semibold text-xs text-green-500">
							You have reward for the 5kg waste you sold
						</p>
					</div>
					<div className=" rounded-lg px-4 py-3 bg-gray-50">
						<p className="font-semibold text-green-500">New message</p>
						<p className="font-semibold text-xs text-green-500">
							Share your progress with your friends to invite them on shara
						</p>
					</div>

					<div className="rounded-lg px-4 py-3 bg-gray-50">
						<p className="font-semibold text-green-500">Alert</p>
						<p className="font-semibold text-xs text-green-500">
							Check your progress on shara
						</p>
					</div>
					<div className="rounded-lg px-4 py-3 bg-gray-50">
						<p className="font-semibold text-green-500">Credit</p>
						<p className="font-semibold text-xs text-green-500">
							You have reward for the 5kg waste you sold
						</p>
					</div>

					<div className="rounded-lg px-4 py-1 bg-gray-50 invisible">
						<p className="font-semibold text-sm text-green-500">
							Check your progress on shara
						</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 shadow fixed bottom-0 w-full p-2 bg-gray-50 z-10">
				<a
					href="./location"
					className="text-center p-1 flex flex-col justify-center group cursor-pointer"
				>
					<FaMapMarked className="w-6 h-6 md:w-10 md:h-10 mx-auto text-[#228e01] group-hover:text-green-500" />
					<p className="text-[#228e01] group-hover:text-green-500 text-xs font-semibold">
						sell waste
					</p>
				</a>
				<a
					href="./wallet"
					className="text-center p-1 flex flex-col justify-center group cursor-pointer"
				>
					<FaWallet className="w-6 h-6 md:w-10 md:h-10 mx-auto text-[#228e01] group-hover:text-green-500" />
					<p className="text-[#228e01] group-hover:text-green-500 text-xs font-semibold">
						Reward
					</p>
				</a>
				<a
					href="./chat"
					className="text-center p-1 flex flex-col justify-center group cursor-pointer"
				>
					<BsChatTextFill className="w-6 h-6 md:w-10 md:h-10 mx-auto text-[#228e01] group-hover:text-green-500" />
					<p className="text-[#228e01] group-hover:text-green-500 text-xs font-semibold">
						Chats
					</p>
				</a>
				<a
					href="./notifications"
					className="text-center p-1 flex flex-col justify-center group cursor-pointer"
				>
					<FiBell className="w-6 h-6 md:w-10 md:h-10 mx-auto text-[#228e01] group-hover:text-green-500" />
					<p className="text-[#228e01] group-hover:text-green-500 text-xs font-semibold">
						Notifications
					</p>
				</a>
			</div>
		</div>
	);
};

export default Dashboard;
