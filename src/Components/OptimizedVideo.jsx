import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const OptimizedVideo = ({ url, thumbnail, alt, ...props }) => {
	return (
		<ReactPlayer
			url={url}
			controls
			light={thumbnail}
			playing={false}
			loop={false}
			muted={false}
			style={{ objectFit: "contain", width: "100%", height: "100%" }}
			preload="metadata"
			{...props}
		/>
	);
};

OptimizedVideo.propTypes = {
	url: PropTypes.string.isRequired,
	thumbnail: PropTypes.string,
	alt: PropTypes.string,
};

export default OptimizedVideo;
