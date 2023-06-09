import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../../hooks/useWallet';
import { addCode } from '../../hooks/contryCodes';
import toast from 'react-hot-toast';
const Withdraw = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const [walletNumber, setWalletNumber] = useState('');
	const [walletName, setWalletName] = useState('');
	const [amount, setAmount] = useState('');
	const [confirmPin, setConfirmPin] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [confirmPayment, setConfirmPayment] = useState(false);
	const [alert, setAlert] = useState(false);
	const [pin, setPin] = useState('');

	const balance = user.wallet?.balance;

	const { checkReceiverWallet, success, error } = useWallet();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (walletNumber === '' || walletNumber.length < 10) {
			setAlert('Invalid wallet number');
			toast('Invalid wallet number');
			return;
		}
		if (amount > balance) {
			toast('Not sufficient fund');
			setAlert('Not sufficient fund');
			return;
		}
		setConfirmPayment(true);
	};
	const handleWalletNumber = async (e) => {
		setWalletNumber(e.target.value);
		setIsLoading(false);
		setAlert(false);
		if (!walletNumber === '' || walletNumber.length >= 10) {
			const phone = addCode(walletNumber);
			const data = await checkReceiverWallet({ phone });
			if (data) {
				console.log(data, 'i am a data');
			}
			return;
		}
	};
	const handleAmount = (e) => {
		setAmount(e.target.value);
		setAlert(false);
	};
	const handlePayment = () => {
		setConfirmPin(true);
		setConfirmPayment(false);
	};
	const handlePin = () => {
		if (pin) {
			console.log(pin);
			setShowModal(true);
			setConfirmPin(false);
		}
		if (error) {
			setAlert('visible');
		}
	};
	return (
		<div className="p-1 mt-8 mx-2 py-10 min-h-screen relative">
			<h3 className="text-center text-2xl font-semibold m-4">Make Payment</h3>
			<form onSubmit={handleSubmit}>
				<h5 className="font-semibold text-lg">Enter Wallet Number</h5>
				<input
					type="tel"
					className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
					value={walletNumber}
					maxLength={14}
					onChange={handleWalletNumber}
				/>
				<input
					type="text"
					disabled
					className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					value={walletName}
				/>
				<h5 className="font-semibold text-lg mt-2">Amount</h5>
				<input
					type="tel"
					className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
					value={amount}
					onChange={handleAmount}
				/>
				{!alert ? (
					<p className="text-center text-green-500 text-lg">{balance}</p>
				) : (
					<p className={`text-lg text-center text-red-500`}>{alert}</p>
				)}
				<div className="mt-1">
					<button
						type="submit"
						className="bg-[#228e01] button w-full text-white py-3 my-6 rounded font-bold"
						disabled={isLoading}
					>
						Send
					</button>
				</div>
			</form>
			{confirmPayment ? (
				<div className="absolute w-full h-full top-0 flex place-items-center duration-500">
					<div className="text-center text-lg bg-green-50 w-10/12 p-4 mx-auto rounded-md shadow-md">
						<h5 className="font-semibold text-lg mt-2">Confirm payment</h5>
						<p className="my-1 p-0">
							You are about to send {amount}&#8358; to {walletName}
						</p>
						<button
							className="bg-red-500 px-8 text-white py-2 mt-2 mx-2 hover:bg-red-400 rounded-md"
							onClick={() => navigate('/withdraw')}
						>
							Cancel
						</button>
						<button
							className="bg-green-500 px-8 text-white py-2 mt-2 mx-2 hover:bg-green-400 rounded-md"
							onClick={handlePayment}
						>
							Confirm
						</button>
					</div>
				</div>
			) : (
				''
			)}
			{confirmPin ? (
				<div className="absolute w-full h-full top-0 flex place-items-center duration-500">
					<div className="text-center text-lg bg-green-50 w-72 p-4 mx-auto rounded-md shadow-md">
						<h5 className="font-semibold text-lg mt-2">Input Your Pin</h5>
						<input
							type="number"
							max="4"
							className="px-3 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							value={pin}
							onChange={(e) => setPin(e.target.value)}
						/>
						<p className={`text-lg text-red-500 ${alert}`}>
							Pin is not correct
						</p>
						<button
							className="bg-green-500 px-8 text-white py-2 mt-2 hover:bg-green-400 rounded-md"
							onClick={handlePin}
						>
							Ok
						</button>
					</div>
				</div>
			) : (
				''
			)}
			{showModal ? (
				<div className="absolute w-full h-full top-0 flex place-items-center duration-500">
					<div className="text-center text-lg bg-green-50 w-72 p-4 mx-auto rounded-md shadow-md">
						<div className="text-yellow-300">
							<ion-icon name="happy" size="large"></ion-icon>
						</div>
						<p className="p-2">Payment sucessfull</p>
						<button
							className="bg-green-500 px-8 text-white py-2 mt-2 hover:bg-green-400 rounded-md"
							onClick={() => navigate('/withdraw')}
						>
							Ok
						</button>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};
export default Withdraw;
