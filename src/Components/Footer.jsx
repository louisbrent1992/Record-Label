import {
	Copyright,
	Facebook,
	Instagram,
	Twitter,
	YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 80px;
	width: 100vw;
	display: flex;
	justify-content: center;
	background-color: black;
	color: white;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	gap: 3rem;
	overflow-x: auto;

	::-webkit-scrollbar {
		display: none;
	}

	${mobile({ gap: "0.5rem" })}
`;

const LogoContainer = styled.div`
	display: flex;

	${mobile({ display: "none" })}
`;
const Logo = styled.h3`
	font-weight: 900;
	font-size: 18px;
`;

const CopyrightContainer = styled.div`
	display: flex;
	font-size: 11px;
	margin-right: 1rem;
	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;
const CopyrightIcon = styled(Copyright)``;

const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
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
`;
const Info = styled.h5`
	font-size: 11px;
	margin-right: 1rem;
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
					<CopyrightContainer>
						<CopyrightIcon style={{ fontSize: "small" }} />
						<Link src="" style={{ fontSize: "11px" }}>
							2022 Strictly All Business Records
						</Link>
					</CopyrightContainer>

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
