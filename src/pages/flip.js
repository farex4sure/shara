import React from 'react';

const flip = () => {
	return (
		<div className="w-40 h-40 bg-blue-500 rounded-lg cursor-pointer group">
			<div className="w-full h-full bg-red-500 rounded-lg transform rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
				<div className="front-content">
					<p className="text-white">Front content</p>
				</div>
				<div className="back-content">
					<p className="text-white">Back content</p>
				</div>
			</div>
		</div>
	);
};

export default flip;
