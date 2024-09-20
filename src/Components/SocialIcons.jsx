import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";

const SocialContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const SocialIcon = styled.div`
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

const Link = styled.a`
	// ... (keep the existing Link styles)
`;

const SocialIcons = ({ social }) => {
	const {
		Youtube,
		Instagram: instagram,
		Facebook: facebook,
		Twitter: twitter,
	} = social;

	return (
		<SocialContainer>
			{Facebook && (
				<SocialIcon>
					<Link href={facebook.url}>
						<Facebook />
					</Link>
				</SocialIcon>
			)}
			{Twitter && (
				<SocialIcon>
					<Link href={twitter.url}>
						<Twitter />
					</Link>
				</SocialIcon>
			)}
			{instagram && (
				<SocialIcon>
					<Link href={instagram.url}>
						<Instagram />
					</Link>
				</SocialIcon>
			)}
			{Youtube && (
				<SocialIcon>
					<Link href={Youtube.url}>
						<YouTube />
					</Link>
				</SocialIcon>
			)}
		</SocialContainer>
	);
};

export default SocialIcons;
