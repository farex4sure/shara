import { useState, useContext } from 'react';
// import {useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { LoadingContext } from '../context/LoadingContext';
import axios from 'axios';
const BASE_API_URL = 'https://shara-api-vzrf.onrender.com';

export const useWallet = () => {
	// const navigate = useNavigate()
	// const location = useLocation()
	let { user } = useContext(AuthContext);
	const { loading, setLoading } = useContext(LoadingContext);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [pin, setPin] = useState(null);
	// const { dispatch } = WalletContext()
	// const redirectPath = location.state?.path || "/dashboard"

	const wallet = async (phone) => {
		setLoading(false);
		setError(null);
		if (phone === '') {
			setError('invalid wallet number.');
			setLoading(false);
		}
		axios
			.post(`${BASE_API_URL}/wallet`, phone)
			.then((res) => res.data)
			.then((data) => {
				setSuccess(data?.user?.name);
				const compareObjects = (obj1, obj2) => {
					// Get the keys of both objects
					const keys1 = Object.keys(obj1);
					const keys2 = Object.keys(obj2);

					// Check if the number of properties is the same
					if (keys1.length !== keys2.length) {
						return false;
					}

					// Iterate over the keys
					for (let key of keys1) {
						// Compare the values of the properties
						if (obj1[key] !== obj2[key]) {
							return false;
						}
					}

					// If all properties have the same values, the objects are the same
					return true;
				};
				const areEqual = compareObjects(user, data);
				if (!areEqual) {
					console.log(user);
					console.log({ ...data, token: user.token });
					localStorage.setItem(
						'sharauser',
						JSON.stringify({ ...data, token: user.token })
					);
				}
				// update loading state
				setLoading(false);
			})
			.catch((error) => {
				setError(error ? error.response?.data.error || error.message : error);
				setLoading(false);
			});
	};
	// // check receivers wallet
	const checkReceiverWallet = async (phone) => {
		setLoading(false);
		setError(null);
		if (phone === '') {
			setError('invalid wallet number.');
			setLoading(false);
		}
		const data = await axios
			.post(`${BASE_API_URL}/wallet/check-wallet`, phone)
			.then((res) => res.data)
			.then((data) => {
				setSuccess(true);
				return data;
			})
			.catch((error) => {
				setError(error ? error.response?.data.error || error.message : error);
				setLoading(false);
			});
		return data;
	};
	// // send money
	// data = { id: userId, phone, amount, pin, token, narration }
	const sendMoney = (data) => {
		setLoading(true);
		setError(false);
		const res = axios
			.post(`${BASE_API_URL}/wallet/send`, data)
			.then((res) => res.data)
			.then((data) => {
				console.log(data);
				setSuccess(data.message);
				return data;
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(error ? error.response?.data.error || error.message : error);
			});
		return res;
	};

	// // receive money
	const receiveMoney = (data) => {
		// let data = {amount : 103000, pin, phone : "7997r65656345", id, token}
		console.log(data);
		axios
			.post(`${BASE_API_URL}/wallet/send`, data)
			.then((res) => res.data)
			.then((data) => {
				console.log(data);
				console.log(data.message);
				setLoading(false);
				setSuccess(data.message);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(error ? error.response?.data.error || error.message : error);
			});
	};
	// //
	const createPin = (data) => {
		setLoading(true);
		setError(false);
		axios
			.post(`${BASE_API_URL}/wallet/create-pin`, data)
			.then((res) => res.data)
			.then((data) => {
				console.log(data);
				// Update the user's otp status in the wallet object
				if (user.wallet.otp === '' || null) {
					user.wallet.otp = 'active';
				}
				//save user to local strorage
				localStorage.setItem('sharauser', JSON.stringify(user));
				console.log(data.message);
				setLoading(false);
				setSuccess(data.message);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(error ? error.response?.data.error || error.message : error);
			});
	};
	const sendotp = (data) => {
		if (user?.wallet.otp === 'active') {
			setError('otp is still active');
			return console.log('otp is still active');
		}
		setError(false);
		setLoading(true);
		axios
			.post(`${BASE_API_URL}/wallet/send-otp`, data)
			.then((res) => res.data)
			.then((data) => {
				console.log(data);
				// Update the user's otp status in the wallet object
				// if (user.wallet.otp === '' || null) {
				//     user.wallet.otp = "active";
				//   }
				// //save user to local strorage
				// localStorage.setItem("sharauser", JSON.stringify(user));
				setLoading(false);
				console.log(data.message);
				setSuccess(data.message);
			})
			.catch((error) => {
				console.log(error);
				console.log(error.data.error);
				setLoading(false);
				setError(
					error ? error.data.error.message || error.message : error.data.error
				);
			});
	};
	// //
	const changePin = (data) => {
		// let data = {token, pin : transferPin, id}
		setLoading(true);
		setError(false);
		axios
			.post(`${BASE_API_URL}/wallet/change-pin`, data)
			.then((res) => res.data)
			.then((data) => {
				console.log(data);
				setPin(data.wallet.pin);
				console.log(data.message);
				setLoading(false);
				setSuccess(data.message);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(error ? error.response?.data.error || error.message : error);
			});
	};
	// // verify opt
	const verifyopt = (data) => {
		setLoading(true);
		setError(false);
		// let data = {token, pin : transferPin, id}
		console.log(data);
		axios
			.post(`${BASE_API_URL}/wallet/verify-otp`, data)
			.then((res) => res.data)
			.then((data) => {
				console.log(data);
				console.log(data.message);
				setLoading(false);
				setSuccess(data.message);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(error ? error.response?.data.error || error.message : error);
			});
	};

	return {
		wallet,
		checkReceiverWallet,
		sendMoney,
		receiveMoney,
		changePin,
		sendotp,
		verifyopt,
		createPin,
		loading,
		success,
		error,
		pin,
	};
};

// export default useWallet
