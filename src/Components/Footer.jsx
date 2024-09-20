import React from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import InfoLinks from "./InfoLinks";

const FooterContainer = styled.footer`
	width: 100%;
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
	position: relative;
	bottom: 0;
	z-index: 9;

	@media only screen and (max-width: 55rem) {
		padding: 2rem 0;
	}
`;

const FooterInnerContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;

	@media only screen and (max-width: 55rem) {
		flex-direction: column;
		gap: 1rem;
	}
`;

const Logo = styled.h3`
	font-weight: 900;
	font-size: 18px;

	@media only screen and (max-width: 55rem) {
		font-size: 16px;
	}
`;

export default function Footer({ social }) {
	return (
		<FooterContainer>
			<FooterInnerContainer>
				<Logo>LOGO</Logo>
				<SocialIcons social={social} />
				<InfoLinks />
			</FooterInnerContainer>
		</FooterContainer>
	);
}
