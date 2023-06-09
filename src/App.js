import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
// import Welcome from "./pages/Welcome";
import Error from './pages/Error';
// //NO USER ROUTES
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

// //Protected Routes
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Wallet from './pages/wallet/Wallet';
import Receive from './pages/wallet/Receive';
import Withdraw from './pages/wallet/Withdraw';
import Profile from './pages/profile/Profile';
import Calculate from './pages/Calculate';
// import WasteInfo from './pages/WasteInfo';
import Calendar from './pages/Calendar';
import Location from './pages/Location';
import Layout from './Layout';
import About from './pages/About';
import Pay from './pages/wallet/Pay';
import Notifications from './pages/Notifications';

function App() {
	const { user } = useContext(AuthContext);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route element={<ProtectedRoutes />}>
						<Route path="/calculate" element={<Calculate />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/wallet" element={<Wallet />} />
						<Route path="/receive" element={<Receive />} />
						<Route path="/sendpoint" element={<Withdraw />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/calendar" element={<Calendar />} />
						<Route path="/pay/:amount" element={<Pay />} />
						<Route path="/location" element={<Location />} />
						<Route path="/notifications" element={<Notifications />} />
					</Route>
					<Route
						path="/"
						element={!user ? <Login /> : <Navigate to="/dashboard" />}
					/>
					<Route
						path="/signup"
						element={!user ? <Signup /> : <Navigate to="/dashboard" />}
					/>
					<Route path="/about" element={<About />} />
					<Route
						path="/forgetPassword"
						element={!user ? <ForgetPassword /> : <Navigate to="/dashboard" />}
					/>
					<Route path="/resetPassword" element={<ResetPassword />} />
					<Route path="/resetPassword/:id/:token" element={<ResetPassword />} />
					{/* <Route path="/" element={<Welcome />} /> */}
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
