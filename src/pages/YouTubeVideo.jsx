import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
	// Options for the YouTube player
	const opts = {
		height: '400px',
		width: '100%',
	};
	const onReady = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};
	return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default YouTubeVideo;
