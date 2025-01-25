import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import OptimizedVideo from "./OptimizedVideo";
import { latestVideos } from "../data/data";

const Container = styled.div`
	width: 100%;
	height: auto;
	background-color: #000;
	padding-top: 2rem;
	position: relative;
`;

const Title = styled.h1`
	color: whitesmoke;
	font-weight: 900;
	font-size: 48px;
	margin-top: 2rem;
	text-align: center;

	@media only screen and (max-width: 55rem) {
		font-size: 36px;
	}
`;

const Arrow = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: ${(props) => props.direction === "left" && "20px"};
	right: ${(props) => props.direction === "right" && "20px"};
	width: 40px;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 2;
	transition: background-color 0.3s;

	&:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

	@media only screen and (max-width: 55rem) {
		width: 30px;
		height: 30px;
	}
`;

const VideosWrapper = styled.div`
	display: flex;
	transition: transform 1s ease;
	transform: translate(${(props) => props.slideIndex * -100}vw);
`;

const VideoContainer = styled.div`
	height: 540px;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
	border-radius: 5px;
	@media only screen and (max-width: 32rem) {
		height: 360px;
	}
`;
const ViewVideosContainer = styled.div`
	display: flex;
	height: 55px;
	width: 100vw;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 9px;
	padding-right: 7rem;

	@media only screen and (max-width: 55rem) {
		width: 100vw;
		padding-right: 0;
	}
`;
const ViewVideos = styled.button`
	height: 53px;
	width: 243px;
	border: none;
	font-size: 20px;
	font-weight: 900;
	background-color: #f5cb5c;
	color: #333533;
	cursor: pointer;

	&:hover {
		transition: color 0.2s ease-in-out;
		color: whitesmoke;
	}
`;

export default function LatestVideos() {
	const [slideIndex, setSlideIndex] = useState(0);
	const totalSlides = latestVideos.length;

	const handleVideoSlideChange = (slideDirection) => {
		const newSlideIndex =
			slideDirection === "left"
				? (slideIndex - 1 + totalSlides) % totalSlides
				: (slideIndex + 1) % totalSlides;

		setSlideIndex(newSlideIndex);
	};

	return (
		<Container>
			<Title>Latest Videos</Title>
			<Arrow direction="left" onClick={() => handleVideoSlideChange("left")}>
				<ArrowBackIos style={{ color: "whitesmoke" }} />
			</Arrow>
			<VideosWrapper slideIndex={slideIndex}>
				{latestVideos.map((video) => (
					<VideoContainer key={video.id}>
						<OptimizedVideo
							url={video.video}
							thumbnail={video.thumbnail}
							alt={video.title}
						/>
					</VideoContainer>
				))}
			</VideosWrapper>
			<ViewVideosContainer>
				<ViewVideos>View All Videos</ViewVideos>
			</ViewVideosContainer>
			<Arrow direction="right" onClick={() => handleVideoSlideChange("right")}>
				<ArrowForwardIos style={{ color: "whitesmoke" }} />
			</Arrow>
		</Container>
	);
}
