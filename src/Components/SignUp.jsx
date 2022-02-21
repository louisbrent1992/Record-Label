import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import SignUpForm from "./SignUpForm";

const Container = styled.div`
	display: flex;
	height: 70vh;
	background-color: #f5cb5c;
	${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 151px;
	margin-right: 20px;
`;

const Announcement = styled.h1`
	font-size: 50px;
	color: #333533;
`;

const Right = styled.div`
	flex: 2;
	padding: 54px 20px;
	${mobile({ backgroundColor: "#fff8f8" })}
`;

export default function SignUp() {
	return (
		<Container>
			<Left>
				<Announcement>
					Sign-up for updates from All Strictly Business Records.
				</Announcement>
			</Left>
			<Right>
				<SignUpForm />
			</Right>
		</Container>
	);
}
