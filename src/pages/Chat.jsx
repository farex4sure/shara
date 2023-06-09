import React, { useState } from 'react';
// import { AuthContext } from '../context/AuthContext';

import {
	WebChatContainer,
	setEnableDebug,
} from '@ibm-watson/assistant-web-chat-react';

const Chat = () => {
	const [language, setLanguage] = useState(false);
	const handleLanguage = () => {
		setLanguage(!language);
	};

	// const { user } = useContext(AuthContext);
	// const name = user.user?.name;
	const webChatOptions = {
		integrationID: process.env.REACT_APP_ID,
		region: process.env.REACT_APP_REGION,
		serviceInstanceID: process.env.REACT_APP_SID,
	};
	setEnableDebug(true);

	return (
		<div className="h-screen overflow-scroll relative bg-gray-100 pt-2.5">
			<div className="flex justify-between px-5 py-3 md:py-4 mt-16 text-xl items-center bg-green-500 text-white  w-full">
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
					className={`absolute bg-white px-5 rounded py-3 text-green-600 text-sm right-2 top-12 mt-14 language-bar ${
						language ? `block` : `hidden`
					}`}
				>
					<ul className="space-y-3">
						<li
							className="hover:text-green-400 cursor-pointer"
							onClick={handleLanguage}
						>
							Hausa
						</li>
						<li
							className="hover:text-green-400  cursor-pointer"
							onClick={handleLanguage}
						>
							English
						</li>
					</ul>
				</div>
			</div>
			<WebChatContainer config={webChatOptions} />
		</div>
	);
};

export default Chat;
