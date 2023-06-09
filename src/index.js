import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingContextProvider from './context/LoadingContext';
import { AuthContextProvider } from './context/AuthContext';
import { WalletContextProvider } from './context/WalletContext';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<WalletContextProvider>
			<AuthContextProvider>
				<LoadingContextProvider>
					<Toaster />
					<App />
				</LoadingContextProvider>
			</AuthContextProvider>
		</WalletContextProvider>
	</React.StrictMode>
);
