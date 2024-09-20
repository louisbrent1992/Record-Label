import React from "react";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	height: auto;
	background-color: #f5cb5c;

	@media only screen and (max-width: 55rem) {
		flex-direction: column;
	}
`;

const Left = styled.div`
	flex: 33%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 151px;
	margin-right: 20px;

	@media only screen and (max-width: 55rem) {
		padding: 30px 0px;
		text-align: center;
	}
`;

const Announcement = styled.h1`
	font-size: 50px;
	color: #333533;

	@media only screen and (max-width: 55rem) {
		margin: 0 auto;
		padding-inline: 20px;
	}
`;

const Right = styled.div`
	flex: 66%;
	margin: 54px 20px;
`;

export default function SignUp() {
	return (
		<Container>
			<Left>
				<Announcement>Sign-up for updates from your-site-brand.</Announcement>
			</Left>
			<Right>
				<SignUpForm />
			</Right>
		</Container>
	);
}
