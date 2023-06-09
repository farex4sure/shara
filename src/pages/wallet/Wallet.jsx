import React, { useContext } from 'react';
import { HiDownload, HiPaperAirplane } from 'react-icons/hi';
import { AuthContext } from '../../context/AuthContext';
const Wallet = () => {
	const { user } = useContext(AuthContext);
	const wallet = user?.wallet;
	const transactions = user?.transactions;

	return (
		<div className="bg-green-200 w-full relative h-full">
			<div className="mx-5 pt-20">
				<div className="py-2 mt-1 text-green-900 shadow-md rounded-md border text-center">
					<p className="mx-3 font-bold">Available Points</p>
					<p className="text-4xl mx-3 font-extrabold my-2">
						{wallet?.balance || `18,420.81`}
					</p>
					<div className="mx-auto flex gap-5 space-x-2 w-10/12 md:w-full">
						<button className="button flex-1">
							<a
								href="./withdraw"
								className="flex justify-center p-2 rounded-md bg-green-500 hover:bg-green-400 text-white"
							>
								<p className="font-semibold pr-2">SEND</p>
								<HiPaperAirplane className="h-6 w-6 text-[]" />
							</a>
						</button>
						<button className="button uppercase flex-1">
							<a
								href="./receive"
								className="flex justify-center p-2 rounded-md bg-green-500 hover:bg-green-400 text-white"
							>
								<p className="font-semibold pr-2">Receive </p>
								<HiDownload className="h-6 w-6 rotate" />
							</a>
						</button>
					</div>
				</div>
				<div className="space-y-5 text-sm md:text-lg">
					<p className="font-semibold pt-5 text-xl">Transaction History</p>
					{transactions ? (
						transactions?.map((transction, index) => {
							const { amount, date } = transction;
							return (
								<div
									key={index}
									className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4"
								>
									<div className="flex justify-between items-center">
										<p className="font-semibold  text-green-500 p-1">
											{amount}
										</p>
										<p className="font-semibold text-green-500">Successful</p>
									</div>
									<div className="flex justify-between items-center">
										<p className="font-semibold ">Receive from Musa Mik...</p>
										<p className="font-semibold">{date}</p>
									</div>
								</div>
							);
						})
					) : (
						<>
							<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
								<div className="flex justify-between items-center">
									<p className="font-semibold  text-red-500">-1,000.00</p>
									<p className="font-semibold text-green-500">Successful</p>
								</div>
								<div className="flex justify-between items-center">
									<p className="font-semibold ">Send to Musa Mik...</p>
									<p className="font-semibold">08:06, Jan 03</p>
								</div>
							</div>
							<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
								<div className="flex justify-between items-center">
									<p className="font-semibold  text-green-500 p-1">+1,200.00</p>
									<p className="font-semibold text-green-500">Successful</p>
								</div>
								<div className="flex justify-between items-center">
									<p className="font-semibold ">Receive from John Abr...</p>
									<p className="font-semibold">08:06, Dec 17</p>
								</div>
							</div>
							<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
								<div className="flex justify-between items-center">
									<p className="font-semibold  text-green-500 p-1">+2,000.00</p>
									<p className="font-semibold text-green-500">Successful</p>
								</div>
								<div className="flex justify-between items-center">
									<p className="font-semibold ">Receive from Musa Mik...</p>
									<p className="font-semibold">08:06, Nov 21</p>
								</div>
							</div>
							<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
								<div className="flex justify-between items-center">
									<p className="font-semibold  text-green-500 p-1">+2,000.00</p>
									<p className="font-semibold text-green-500">Successful</p>
								</div>
								<div className="flex justify-between items-center">
									<p className="font-semibold ">Receive from Musa Mik...</p>
									<p className="font-semibold">08:06, Nov 21</p>
								</div>
							</div>
							<div className="bg-white rounded-lg px-2 md:px-4 py-2 md:py-4">
								<div className="flex justify-between items-center">
									<p className="font-semibold  text-red-500">-3,000.00</p>
									<p className="font-semibold text-green-500">Successful</p>
								</div>
								<div className="flex justify-between items-center">
									<p className="font-semibold ">Send to Musa Mik...</p>
									<p className="font-semibold">08:06, Nov 02</p>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Wallet;
