import {
	Facebook,
	Instagram,
	Menu,
	Twitter,
	YouTube,
} from "@material-ui/icons";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
	height: 80px;
	width: 100vw;
	display: flex;
	justify-content: center;
	background-color: black;
	color: white;
	overflow: hidden;
	position: fixed; /* Make it stick/fixed */
	z-index: 5;
`;

const Wrapper = styled.div`
	width: 87vw;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

// Left side of navbar
const Left = styled.div`
	display: flex;
	align-items: center;
`;
const Logo = styled.h1`
	font-weight: 900;
	font-size: 48px;
`;

const MenuContainer = styled.div`
	${tablet({ display: "none" })}
`;

// Center of navbar
const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const NavLink = styled.div`
	font-size: 18px;
	font-weight: 900;
	cursor: pointer;
	margin-left: 50px;

	a {
		text-decoration: none;
	}

	a:visited {
		color: white;
	}

	a:hover {
		transition: all 0.2s ease-in-out;
		text-decoration: underline;
		text-decoration-thickness: 4px;
		text-decoration-style: solid;
		text-underline-offset: 0.5rem;
		color: #f5cb5c;
	}
`;

// Right side of navbar
const Right = styled.div`
	display: flex;
	align-items: center;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;

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
	return (
		<Container>
			<Wrapper>
				<Left>
					<MenuContainer>
						<SocialIcon>
							<Menu />
						</SocialIcon>
					</MenuContainer>
					<Logo>SAB</Logo>
				</Left>
				<Center>
					<NavLink>
						<Link to="/">Home</Link>
					</NavLink>
					<NavLink>
						<Link to="/artists">Artists</Link>
					</NavLink>
					<NavLink>
						<Link to="/music">Music</Link>
					</NavLink>
					<NavLink>
						<Link to="/videos">Videos</Link>
					</NavLink>
					<NavLink>
						<Link to="/news">News</Link>
					</NavLink>
					<NavLink>
						<Link to="/store">Store</Link>
					</NavLink>
					<NavLink>
						<Link to="/demos">Demo Submissions</Link>
					</NavLink>
				</Center>
				<Right>
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
				</Right>
			</Wrapper>
		</Container>
	);
}
