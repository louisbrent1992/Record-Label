import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import SignUpForm from "./SignUpForm";

const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	height: auto;
	background-color: #f5cb5c;
	${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
	flex: 33%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 151px;
	margin-right: 20px;

	${mobile({ padding: "30px 0px", textAlign: "center" })}
`;

const Announcement = styled.h1`
	font-size: 50px;
	color: #333533;

	${mobile({ margin: "0 auto" })}
`;

const Right = styled.div`
	flex: 66%;
	margin: 54px 20px;
`;

export default function SignUp() {
	return (
		<Container>
			<Left>
				<Announcement>
					Sign-up for updates from Strictly All Business Records.
				</Announcement>
			</Left>
			<Right>
				<SignUpForm />
			</Right>
		</Container>
	);
}
