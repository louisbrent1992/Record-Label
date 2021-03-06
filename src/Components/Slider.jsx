import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data/data";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	position: relative;
	overflow: hidden;
	background-color: black;
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
	height: 100vh;
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
`;
const ImgContainer = styled.div`
	height: 80vh;
`;
const Image = styled.img`
	height: 80vh;
	width: 100vw;
	object-fit: cover;

	${mobile({ ojectFit: "contain" })}
`;

export default function Slider() {
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
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id}>
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
