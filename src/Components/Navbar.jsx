import React, { useState } from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
	width: 100%;
	height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
	background-color: ${(props) =>
		props.extendNavbar ? "hsl(0 0% 100% / 0.1)" : "black"};
	backdrop-filter: ${(props) => props.extendNavbar && "blur(1rem)"};
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	z-index: 9;
`;

const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
	position: fixed;
	z-index: 9;

	@media only screen and (max-width: 64rem) {
		// Adjusted breakpoint to 1024px
		gap: 1rem; // Adjust gap for smaller screens
	}

	@media only screen and (max-width: 32rem) {
		justify-content: space-evenly;
	}
`;

const Logo = styled.h1`
	color: whitesmoke;
	font-size: 48px;
	font-weight: 900;

	@media only screen and (max-width: 64rem) {
		// Adjusted breakpoint to 1024px
		font-size: 36px;
	}
`;

const OpenLinksButton = styled.button`
	background: none;
	border: none;
	color: whitesmoke;
	font-size: 50px;
	cursor: pointer;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #f5cb5c;
	}

	@media only screen and (min-width: 64rem) {
		display: none;
	}
`;

const NavbarExtendedContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	height: 100vh;
	margin-top: 175px;

	@media only screen and (min-width: 64rem) {
		// Adjusted breakpoint to 1024px
		display: none;
	}
`;

const NavbarLinkExtended = styled(Link)`
	color: whitesmoke;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;

	a:visited {
		color: whitesmoke;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;

const NavbarAnchor = styled.a`
	color: whitesmoke;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	cursor: pointer;

	a:visited {
		color: whitesmoke;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #f5cb5c;
	}

	@media only screen and (max-width: 64rem) {
		// Adjusted breakpoint to 1024px
		display: none;
	}
`;

export default function Navbar({ social }) {
	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<Logo>LOGO</Logo>
				<NavbarLinks />

				{!extendNavbar && <SocialIcons social={social} />}
				<OpenLinksButton
					onClick={() => {
						setExtendNavbar((curr) => !curr);
					}}
				>
					{extendNavbar ? <>&#10005;</> : <> &#8801;</>}
				</OpenLinksButton>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="/">Home</NavbarLinkExtended>
					<NavbarAnchor href="#artists">Artists</NavbarAnchor>
					<NavbarLinkExtended to="/releases">Releases</NavbarLinkExtended>
					<NavbarLinkExtended to="/videos">Videos</NavbarLinkExtended>
					<NavbarLinkExtended to="/news">News</NavbarLinkExtended>
					<NavbarLinkExtended to="/store">Store</NavbarLinkExtended>
					<NavbarLinkExtended to="/demos">Demos</NavbarLinkExtended>
					<SocialIcons social={social} />
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}
