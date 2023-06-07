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
	const name = user.user?.name;
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
			<div className="md:mx-32 py-5 mt-10">
				<div className="mt-1 mt-5 mb-2 devide-y rounded-lg p-2 space-y-3 shadow-inset shadow-outset shadow-xl">
					<div className="text-lg my-2 flex px-2">
						<div className="flex-1">
							<h1 className="text-2xl font-semibold">
								Welcome{' '}
								<span className="capitalize">
									{name?.substring(0, 15) || 'abdulsalam'}!
								</span>
							</h1>
							<p className="text-lg mt-1 text-sm">
								Let take action together. 👋
							</p>
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
							&#8358;{user.wallet?.balance}
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
			<div className="grid grid-cols-4 shadow fixed bottom-0 w-full p-2 bg-gray-50 z-10">
				<a
					href="./location"
					className="text-center p-1 flex flex-col justify-center group cursor-pointer"
				>
					<FaMapMarked className="w-8 h-8 md:w-14 md:h-14 mx-auto text-[#228e01] group-hover:text-green-500" />
					<p className="text-[#228e01] group-hover:text-green-500 text-lg font-semibold">
						sell waste
					</p>
				</a>
				<a
					href="./wallet"
					className="text-center p-1 flex flex-col justify-center group cursor-pointer"
				>
					<FaWallet className="w-8 h-8 md:w-14 md:h-14 mx-auto text-[#228e01] group-hover:text-green-500" />
					<p className="text-[#228e01] group-hover:text-green-500 text-lg font-semibold">
						Reward
					</p>
				</a>
				<a
					href="./chat"
					className="text-center p-1 flex flex-col justify-center group cursor-pointer"
				>
					<BsChatTextFill className="w-8 h-8 md:w-14 md:h-14 mx-auto text-[#228e01] group-hover:text-green-500" />
					<p className="text-[#228e01] group-hover:text-green-500 text-lg font-semibold">
						Chats
					</p>
				</a>
				<a
					href="./notifications"
					className="text-center p-1 flex flex-col justify-center group cursor-pointer"
				>
					<FiBell className="w-8 h-8 md:w-14 md:h-14 mx-auto text-[#228e01] group-hover:text-green-500" />
					<p className="text-[#228e01] group-hover:text-green-500 text-lg font-semibold">
						Notifications
					</p>
				</a>
			</div>
		</div>
	);
};

export default Dashboard;
