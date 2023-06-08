import React from 'react';

const Notifications = () => {
	return (
		<div className="mx-2 pt-10 h-screen relative bg-green-50">
			<h3 className="text-center text-xl md:text-2xl font-semibold m-4 mt-10 z-20 relative w-8/12 mx-auto text-green-500">
				Notifications
			</h3>
			<div className="space-y-2 px-px md:px-2 text-sm">
				<div className="bg-white rounded-lg px-2 md:px-4 py-5">
					<div className="flex justify-between items-center">
						<p className="font-semibold text-red-500">-1,000.00</p>
						<p className="font-semibold text-green-500">Successful</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-semibold">Send to Musa Mik...</p>
						<p className="font-semibold">08:06, Jan 03</p>
					</div>
				</div>
				<div className="bg-white rounded-lg px-4 py-4">
					<div className="flex justify-between items-center">
						<p className="font-semibold text-green-500 p-1">+1,200.00</p>
						<p className="font-semibold text-green-500">Successful</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-semibold">Receive from John Abr...</p>
						<p className="font-semibold">08:06, Dec 17</p>
					</div>
				</div>
				<div className="bg-white rounded-lg px-4 py-4">
					<div className="flex justify-between items-center">
						<p className="font-semibold text-green-500 p-1">+1,200.00</p>
						<p className="font-semibold text-green-500">Successful</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-semibold">Receive from John Abr...</p>
						<p className="font-semibold">08:06, Dec 17</p>
					</div>
				</div>
				<div className="bg-white rounded-lg px-4 py-4">
					<div className="flex justify-between items-center">
						<p className="font-semibold text-green-500 p-1">+1,200.00</p>
						<p className="font-semibold text-green-500">Successful</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-semibold">Receive from John Abr...</p>
						<p className="font-semibold">08:06, Dec 17</p>
					</div>
				</div>
				<div className="bg-white rounded-lg px-4 py-4">
					<div className="flex justify-between items-center">
						<p className="font-semibold text-green-500 p-1">+1,200.00</p>
						<p className="font-semibold text-green-500">Successful</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-semibold">Receive from John Abr...</p>
						<p className="font-semibold">08:06, Dec 17</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notifications;
