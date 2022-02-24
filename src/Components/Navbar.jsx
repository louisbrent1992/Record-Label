import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { desktop, mobile } from "../responsive";

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

	${desktop({ height: "80px" })};
`;

const LeftContainer = styled.div`
	display: flex;
	align-items: center;
`;

const RightContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
	margin-left: 2rem;
`;

const NavbarInnerContainer = styled.div`
	width: 87vw;
	height: 80px;
	display: flex;
	position: fixed;
	z-index: 9;
	gap: 3rem;
	justify-content: center;

	${mobile({ width: "100%" })}
`;

const NavbarLinkContainer = styled.div`
	display: flex;
	gap: 2rem;
`;

const NavbarLink = styled(Link)`
	color: white;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;

	a:visited {
		color: white;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		text-decoration: underline;
		text-decoration-thickness: 4px;
		text-decoration-style: solid;
		text-underline-offset: 0.5rem;
		color: #f5cb5c;
	}

	${mobile({ display: "none" })};
`;

const NavbarLinkExtended = styled(Link)`
	color: white;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;

	a:visited {
		color: white;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;

const Logo = styled.h1`
	color: white;
	font-size: 48px;
	font-weight: 900;

	${mobile({
		position: "absolute",
		top: "0",
		left: "0",
		marginLeft: "1rem",
		marginTop: "0.5rem",
	})}
`;

const OpenLinksButton = styled.button`
	width: 60px;
	height: 50px;
	padding-top: 0.5rem;
	background: none;
	border: none;
	color: white;
	font-size: 45px;
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #f5cb5c;
	}

	${desktop({ display: "none" })};
`;

const NavbarExtendedContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	height: 100vh;
	margin-top: 175px;

	${desktop({ display: "none" })};
`;

const ExtendedSocialIconsContainer = styled.div`
	color: white;
	display: flex;
	gap: 1rem;
`;

const SocialIconsContainer = styled.div`
	color: white;
	display: flex;
	gap: 1rem;

	${mobile({ display: "none" })};
`;
const SocialIcon = styled.div`
	a {
		color: white;
	}

	a:visited {
		color: white;
	}

	a:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
		cursor: pointer;
	}
`;

export default function Navbar({ social }) {
	const { YoutubeAcc, InstagramAcc, FacebookAcc, TwitterAcc } = social;

	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<Logo>SAB</Logo>
				</LeftContainer>
				<RightContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/"> Home</NavbarLink>
						<NavbarLink to="/music">Music</NavbarLink>
						<NavbarLink to="/videos"> Videos</NavbarLink>
						<NavbarLink to="/news"> News</NavbarLink>
						<NavbarLink to="/store"> Store</NavbarLink>
						<NavbarLink to="/demos"> Demo Submissions</NavbarLink>
						<OpenLinksButton
							onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}
						>
							{extendNavbar ? <>&#10005;</> : <> &#8801;</>}
						</OpenLinksButton>
					</NavbarLinkContainer>
					<SocialIconsContainer>
						<SocialIcon>
							<Link to={FacebookAcc.url}>
								<Facebook />
							</Link>
						</SocialIcon>
						<SocialIcon>
							<Link to={TwitterAcc.url}>
								<Twitter />
							</Link>
						</SocialIcon>
						<SocialIcon>
							<Link to={InstagramAcc.url}>
								<Instagram />
							</Link>
						</SocialIcon>
						<SocialIcon>
							<Link to={YoutubeAcc.url}>
								<YouTube />
							</Link>
						</SocialIcon>
					</SocialIconsContainer>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
					<NavbarLinkExtended to="/music">Music</NavbarLinkExtended>
					<NavbarLinkExtended to="/videos"> Videos</NavbarLinkExtended>
					<NavbarLinkExtended to="/news"> News</NavbarLinkExtended>
					<NavbarLinkExtended to="/store"> Store</NavbarLinkExtended>
					<NavbarLinkExtended to="/demos"> Demos</NavbarLinkExtended>
					<ExtendedSocialIconsContainer style={{ bottom: "0" }}>
						<SocialIcon>
							<Link to={FacebookAcc.url}>
								<Facebook />
							</Link>
						</SocialIcon>
						<SocialIcon>
							<Link to={TwitterAcc.url}>
								<Twitter />
							</Link>
						</SocialIcon>
						<SocialIcon>
							<Link to={InstagramAcc.url}>
								<Instagram />
							</Link>
						</SocialIcon>
						<SocialIcon>
							<Link to={YoutubeAcc.url}>
								<YouTube />
							</Link>
						</SocialIcon>
					</ExtendedSocialIconsContainer>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}
