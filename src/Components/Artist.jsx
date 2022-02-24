import { Icon } from "@iconify/react";
import {
	Facebook,
	Instagram,
	LocalGroceryStore,
	Twitter,
	YouTube,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Info = styled.div`
	height: 100%;
	width: 100%;
	color: white;
	position: absolute;
	z-index: 2;
	opacity: 0;
	transition: all 0.5s ease;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ArtistContainer = styled.div`
	display: flex;
	flex: 1 1 33%;
	width: 100%;
	position: relative;
	&:hover ${Info} {
		opacity: 1;
	}

	${mobile({ flex: "1 1 100%" })}
	${tablet({ flex: "1 1 33%" })}
`;

const Image = styled.img`
	z-index: 1;
	position: relative;
	object-fit: cover;
	width: 100%;
	height: 205px;
	transition: all 0.5s ease;
`;

const TopRow = styled.div`
	display: flex;
	height: 50%;
	justify-content: space-between;
`;
const StoreIconContainer = styled.div`
	margin: 10px;

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
const Website = styled.div`
	margin: 10px;
	font-weight: 900;

	a {
		text-decoration: none;
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

const BottomRow = styled.div`
	display: flex;
	height: 50%;
	justify-content: space-between;
	align-items: flex-end;
`;
const Name = styled.div`
	margin: 10px;
	font-weight: 900;
	color: white;

	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
		cursor: pointer;
	}
`;
const SocialContainer = styled.div``;
const SocialMediaIcons = styled.div`
	margin: 10px 10px 5px 10px;
	display: flex;
	justify-content: space-between;
	text-decoration: none;

	a {
		color: white;
		margin-left: 5px;
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

export default function Artist({ name, website, img, store, social }) {
	return (
		<ArtistContainer>
			<Image src={img} />

			<Info>
				<TopRow>
					<StoreIconContainer>
						<Link to={store}>{store && <LocalGroceryStore />}</Link>
					</StoreIconContainer>
					<Website>
						<Link to={website}>Website</Link>
					</Website>
				</TopRow>
				<BottomRow>
					<Name>{name && name}</Name>
					<SocialContainer>
						<SocialMediaIcons>
							{social.Youtube.url && (
								<Link to={social.Youtube.url}>
									<YouTube />
								</Link>
							)}
							{social.Instagram.url && (
								<Link to={social.Instagram.url}>
									<Instagram />
								</Link>
							)}
							{social.Facebook.url && (
								<Link to={social.Facebook.url}>
									<Facebook />
								</Link>
							)}
							{social.Twitter.url && (
								<Link to={social.Twitter.url}>
									<Twitter />
								</Link>
							)}

							{social.Spotify.url && (
								<Link to={social.Spotify.url}>
									<Icon icon="mdi:spotify" width="25" height="25" />
								</Link>
							)}
						</SocialMediaIcons>
					</SocialContainer>
				</BottomRow>
			</Info>
		</ArtistContainer>
	);
}
