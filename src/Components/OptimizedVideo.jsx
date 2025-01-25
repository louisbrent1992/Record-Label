import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { PlayArrow } from "@material-ui/icons";

const PlayButton = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: "#333533",
			backgroundColor: "#f5cb5c",
			borderRadius: "50%",
			width: "80px",
			height: "80px",
			cursor: "pointer",
			transition: "transform 0.3s ease",
		}}
	>
		<PlayArrow style={{ fontSize: 50 }} />
	</div>
);

const OptimizedVideo = ({ video, thumbnail, alt, ...props }) => {
	return (
		<ReactPlayer
			url={video}
			controls={true}
			playIcon={<PlayButton />}
			playing={false}
			loop={true}
			muted={false}
			style={{ objectFit: "contain" }}
			preload="metadata"
			light={thumbnail}
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
