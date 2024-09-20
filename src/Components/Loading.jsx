import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f5f5f5;
`;

const Spinner = styled.div`
	border: 4px solid #f3f3f3;
	border-top: 4px solid #3498db;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
	margin-left: 20px;
	font-size: 18px;
	color: #333;
	font-family: Arial, sans-serif;

	@media only screen and (max-width: 55rem) {
		font-size: 14px;
	}

	@media only screen and (max-width: 32rem) {
		font-size: 14px;
	}
`;

const Loading = () => (
	<LoadingContainer>
		<Spinner />
		<LoadingText>Loading...</LoadingText>
	</LoadingContainer>
);

export default Loading;
