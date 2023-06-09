import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import {
	WebChatContainer,
	setEnableDebug,
} from '@ibm-watson/assistant-web-chat-react';

const Chat = () => {
	const [language, setLanguage] = useState(false);
	const handleLanguage = () => {
		setLanguage(!language);
	};

	const { user } = useContext(AuthContext);
	const name = user.user?.name;
	const webChatOptions = {
		integrationID: process.env.REACT_APP_ID,
		region: process.env.REACT_APP_REGION,
		serviceInstanceID: process.env.REACT_APP_SID,
	};
	setEnableDebug(true);

	return (
		<div className="h-screen overflow-scroll relative">
			<div className="relative">
				<div className="flex justify-between px-5 py-4 text-xl items-center bg-green-500 text-white fixed top-0 w-full">
					<div className="space-x-5 flex items-center">
						<a href="./dashboard">
							<i className="fa-solid fa-arrow-left"></i>
						</a>
						<p>Chat Forum</p>
					</div>
					<div className="space-x-5">
						<i className="fa-solid fa-phone cursor-pointer"></i>
						<i className="fa-solid fa-video-camera cursor-pointer"></i>
						<i
							className="fa-solid fa-language language cursor-pointer"
							onClick={handleLanguage}
						></i>
					</div>
					<div
						className={`absolute bg-white px-5 rounded py-3 text-green-600 text-sm right-5 top-14 language-bar ${
							language ? `block` : `hidden`
						}`}
					>
						<ul className="space-y-3">
							<li className="hover:text-green-400 cursor-pointer">Hausa</li>
							<li className="hover:text-green-400  cursor-pointer">English</li>
						</ul>
					</div>
				</div>
				<div className="text-base md:text-xl space-y-5 pt-20 md:pb-32 pb-24">
					<div className="mb-1 flex justify-start mx-4">
						<div className="w-[90%] lg:w-1/2 bg-gray-100 mb-px rounded-t-lg rounded-br-lg p-2 text-gray-600">
							Hello there
						</div>
					</div>
					<div className="mb-1 flex justify-end mx-4">
						<div className="w-[90%] lg:w-1/2 bg-green-500 mb-px rounded-t-lg rounded-br-lg p-2 text-gray-200">
							Hi {name || 'Mike Monday'}
						</div>
					</div>
					<div className="mb-1 flex justify-start mx-4">
						<div className="w-[90%] lg:w-1/2 bg-gray-100 mb-px rounded-t-lg rounded-br-lg p-2 text-gray-600">
							What are the categories of waste that can be sold?
						</div>
					</div>
					<div className="mb-1 flex justify-end mx-4">
						<div className="w-[90%] lg:w-1/2 bg-green-500 mb-px rounded-t-lg rounded-br-lg p-2 text-gray-200">
							You can sell most recycleble waste such as Papers, plastic, metal
							etc
						</div>
					</div>
					<div className="mb-1 flex justify-start mx-4">
						<div className="w-[90%] lg:w-1/2 bg-gray-100 mb-px rounded-t-lg rounded-br-lg p-2 text-gray-600">
							What are the payment systems?
						</div>
					</div>
					<div className="mb-1 flex justify-end mx-4">
						<div className="w-[90%] lg:w-1/2 bg-green-500 mb-px rounded-t-lg rounded-br-lg p-2 text-gray-200">
							Transcations and payment can be made through your wallet and also
							in cash
						</div>
					</div>
					<div className="mb-1 flex justify-start mx-4">
						<div className="w-[90%] lg:w-1/2 bg-gray-100 mb-px rounded-t-lg rounded-br-lg p-2 text-gray-600">
							How soon will your Agent arrive to pick up my waste as soon as a
							place order
						</div>
					</div>
					<WebChatContainer config={webChatOptions} />
					<div className="mb-1 flex justify-end mx-4">
						<div className="w-[90%] lg:w-1/2 bg-green-500 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-200">
							As soon as possible, Our agent are located accross each local
							government so the nearest would be there as soon as possible"
						</div>
					</div>
				</div>
				{/* <div className="flex space-x-3 justify-around px-2 md:px-5 bg-white py-2 items-center fixed bottom-0 w-full border-y-green-500">
					<div className="md:w-[90%] flex-1">
						<textarea
							className=" w-full border border-green-500 rounded-xl px-5 py-1"
							cols="1"
							value={chat}
							onChange={(e) => setChat(e.target.value)}
						></textarea>
					</div>
					<div className="md:space-x-10 space-x-3 text-green-500 text-xl">
						<i
							onClick={() => setChat('')}
							className="fa-solid fa-paper-plane cursor-pointer"
						></i>
						<i className="fa-solid fa-microphone-lines cursor-pointer pr-2"></i>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Chat;
