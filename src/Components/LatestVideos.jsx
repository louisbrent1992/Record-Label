import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import OptimizedVideo from "./OptimizedVideo";
import { latestVideos } from "../data/data";

const Container = styled.div`
	width: 100%;
	height: auto;
	background-color: #000;

	margin-top: 2rem;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	color: white;
	font-weight: 900;
	font-size: 48px;
	margin-top: 2rem;

	@media only screen and (max-width: 55rem) {
		font-size: 36px;
	}
`;

const VideosWrapper = styled.div`
	display: flex;
	transition: transform 0.5s ease-in-out;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
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

const VideoContainer = styled.div`
	width: 100vw;
	height: 540px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;

	@media only screen and (max-width: 32rem) {
		height: 360px;
	}
`;
const ViewVideosContainer = styled.div`
	display: flex;
	width: 87vw;
	justify-content: flex-end;
	align-items: flex-end;
	position: relative;
	padding-right: 28px;
`;
const ViewVideos = styled.button`
	height: 55px;
	width: 243px;
	background-color: #f5cb5c;
	color: #333533;
	position: absolute;
	font-size: 20px;
	font-weight: 900;
	border: none;
	cursor: pointer;
`;

export default function LatestVideos() {
	const [slideIndex, setSlideIndex] = useState(0);
	const totalSlides = latestVideos.length;

	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalSlides - 1);
		} else {
			setSlideIndex(slideIndex < totalSlides - 1 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Title>Latest Videos</Title>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowBackIos style={{ color: "white" }} />
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
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowForwardIos style={{ color: "white" }} />
			</Arrow>
		</Container>
	);
}
