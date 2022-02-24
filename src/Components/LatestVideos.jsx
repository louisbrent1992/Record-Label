import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { latestVideos } from "../data/data";
import ReactPlayer from "react-player/youtube";
import { mobile } from "../responsive";

const Container = styled.div`
	background-color: black;
	height: 80vh;
	display: flex;
	position: relative;
	flex-wrap: wrap;
	justify-content: center;
`;
const Arrow = styled.div`
	width: 40px;
	height: 40px;
	background-color: darkgray;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;
const Wrapper = styled.div`
	display: flex;
	height: 60vh;
	width: 100vw;
	align-items: center;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	width: 88vw;

	${mobile({ justifyContent: "center" })}
`;

const Title = styled.h1`
	color: white;
	font-weight: 900;
	font-size: 48px;
	margin-top: 0.5rem;
`;

const Slide = styled.div`
	width: 100vw;
`;

// Preferred settings
const VideoContainer = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	flex: 1 1 33%;
`;
const Video = styled(ReactPlayer)`
	width: 400px;
	height: 540px;
`;

const ViewVideosContainer = styled.div`
	display: flex;
	width: 87vw;
	justify-content: flex-end;
	align-items: flex-end;
	position: relative;
	padding-right: 28px;

	${mobile({ width: "100vw", paddingRight: 0 })};
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
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowBackIos />
			</Arrow>
			<TitleContainer>
				<Title>Latest Videos</Title>
			</TitleContainer>
			<Wrapper slideIndex={slideIndex}>
				{latestVideos.map((item) => (
					<Slide key={item.id}>
						<VideoContainer>
							<Video url={item.video} alt="music video" />
						</VideoContainer>
					</Slide>
				))}
			</Wrapper>
			<ViewVideosContainer>
				<ViewVideos>View All Videos</ViewVideos>
			</ViewVideosContainer>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowForwardIos />
			</Arrow>
		</Container>
	);
}
