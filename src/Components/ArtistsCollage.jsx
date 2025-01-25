import React from "react";
import styled from "styled-components";
import Artist from "./Artist";

const Container = styled.div`
	height: 100%;
	width: 100%;
	background-color: white;
	color: #333533;
	padding-inline: 1rem;
`;

const ArtistsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	justify-items: center;
	gap: 20px;
	position: relative;
	height: auto;
	width: 100%;
`;

const TitleContainer = styled.div`
	height: 15vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	margin-block: 2rem;
`;
const Title = styled.h1`
	color: #333533;
	font-weight: 900;
	font-size: 48px;

	@media only screen and (max-width: 55rem) {
		font-size: 36px;
	}
`;

export default function ArtistsCollage({ labelArtists }) {
	return (
		<Container>
			<TitleContainer>
				<Title id="artists">Artists</Title>
			</TitleContainer>
			<ArtistsContainer>
				{labelArtists.map((artist) => (
					<Artist
						key={artist.id}
						name={artist.name}
						website={artist.website}
						img={artist.img}
						store={artist.store}
						social={artist.social}
					/>
				))}
			</ArtistsContainer>
		</Container>
	);
}
