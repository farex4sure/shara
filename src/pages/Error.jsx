import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="min-h-screen flex items-center justify-center">
				<div className="mt-10 pt-10 flex flex-col place-items-center">
					<h2 className="text-red-700 text-3xl font-semibold">OOOPS</h2>
					<h2 className="mb-3 text-3xl md:text-4xl my-4 font-bold">
						PAGE NOT FOUND
					</h2>
					<p className="text-2xl my-2">
						Back To{' '}
						<button
							onClick={() => navigate('/')}
							className="btn btn-primary text-green-500"
						>
							Home Page
						</button>
					</p>
				</div>
			</div>
		</>
	);
};

export default Error;
