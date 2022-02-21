import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { latestVideos } from "../data/data";
import ReactPlayer from "react-player/youtube";

const Container = styled.div`
	background-color: black;
	height: 100vh;
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
	margin-right: 15px;
`;
const Wrapper = styled.div`
	display: flex;
	height: 75vh;
	width: 100vw;
	align-items: center;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

// Preferred settings
const TitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	height: 15vh;
	width: 88vw;
`;

const Title = styled.h1`
	color: white;
	font-weight: 900;
	font-size: 48px;
	margin: 0px, 0px, 14px;
`;

const Slide = styled.div`
	width: 100vw;
`;

// Preferred settings
const VideoContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	height: 500px;
	width: 100vw;
`;

const ViewVideosContainer = styled.div`
	display: flex;
	height: 55px;
	width: 87vw;
	justify-content: flex-end;
	align-items: flex-end;
	position: relative;
	margin-top: 16px;
	padding-right: 28px;
`;
const ViewVideos = styled.button`
	height: 53px;
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
							<ReactPlayer
								width={"720px"}
								height={"480px"}
								style={{
									position: "absolute",
									margin: "10px 0px 80px 0px",
								}}
								url={item.video}
								alt="music video"
							/>
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
