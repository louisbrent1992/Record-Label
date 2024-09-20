import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data/data";
import OptimizedImage from "./OptimizedImage";

const Container = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	background-color: black;

	@media only screen and (max-width: 55rem) {
		height: 50vh;
	}
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
	transition: all 1.5s ease;
	transform: translate(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
	width: 100vw;
	height: 80vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};

	@media only screen and (max-width: 55rem) {
		height: 50vh;
	}
`;
const ImgContainer = styled.div`
	height: 100%;
`;
const Image = styled(OptimizedImage)`
	height: 100%;
	width: 100vw;
	object-fit: cover;
`;

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
		} else {
			setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowBackIos />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id} bg={item.bg}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowForwardIos />
			</Arrow>
		</Container>
	);
}
