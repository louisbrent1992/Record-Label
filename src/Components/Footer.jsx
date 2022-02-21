import {
	Copyright,
	Facebook,
	Instagram,
	Twitter,
	YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 50px;
	width: 100vw;
	display: flex;
	justify-content: center;
	background-color: black;
	color: white;
`;

const Wrapper = styled.div`
	display: flex;
	width: 85vw;
	align-items: center;
	justify-content: center;
`;

const LogoContainer = styled.div`
	display: flex;
	width: 100px;
	justify-content: center;
`;
const Logo = styled.h3`
	font-weight: 900;
	font-size: 18px;
`;

const SocialContainer = styled.div`
	display: flex;
	margin-left: 100px;
	margin-right: 0;
	padding-right: 0;
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

const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	height: 15px;
`;
const Info = styled.h5`
	margin-right: 20px;
	font-size: 11px;
`;
const Link = styled.a`
	font-weight: 900;
	cursor: pointer;

	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;

export default function Footer({ social }) {
	const { YoutubeAcc, InstagramAcc, FacebookAcc, TwitterAcc } = social;
	return (
		<Container>
			<Wrapper>
				<SocialContainer>
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
				</SocialContainer>
				<LogoContainer>
					<Logo>SAB</Logo>
				</LogoContainer>
				<InfoContainer>
					<Copyright style={{ fontSize: "small" }} />

					<Info>
						<Link src="">2022 All Strictly Business Records</Link>
					</Info>
					<Info>
						<Link>Privacy Policy</Link>
					</Info>
					<Info>
						<Link>Terms & Conditions</Link>
					</Info>
					<Info>
						<Link>Cookie Consent</Link>
					</Info>
					<Info>
						<Link src="">Do Not Sell My Personal Information</Link>
					</Info>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
}
