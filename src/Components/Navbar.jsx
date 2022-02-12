import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Container = styled.div`
	height: 120px;
	background-color: black;
	color: white;
`;

const Wrapper = styled.div`
	padding: 50px 60px;
	margin: 0px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

// Left side of navbar
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
const Logo = styled.h1`
	font-weight: bold;
`;

// Center of navbar
const Center = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Link = styled.div`
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;
	margin-left: 25px;

	&:hover {
		transition: all 1.8s ease-in-out 1s;
		text-decoration: underline;
		text-decoration-thickness: 4px;
		text-decoration-style: solid;
		text-underline-offset: 0.5rem;
	}
`;

// Right side of navbar
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function Navbar() {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>SAB</Logo>
				</Left>
				<Center>
					<Link>Home</Link>
					<Link>Artists</Link>
					<Link>News</Link>
					<Link>Music</Link>
					<Link>Store</Link>
				</Center>
				<Right>
					<SocialIcon>
						<YouTube />
					</SocialIcon>
					<SocialIcon>
						<Facebook />
					</SocialIcon>
					<SocialIcon>
						<Instagram />
					</SocialIcon>
					<SocialIcon>
						<Twitter />
					</SocialIcon>
					<SocialIcon>
						<Icon icon="mdi:spotify" width="25" height="25" />
					</SocialIcon>
				</Right>
			</Wrapper>
		</Container>
	);
}
