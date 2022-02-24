import React from "react";
import styled from "styled-components";
import Artist from "./Artist";

const Container = styled.div`
	height: 100%;
	width: 100%;
	background-color: white;
	color: #333533;
`;

const ArtistsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	height: auto;
	width: 100%;
`;

const TitleContainer = styled.div`
	height: 15vh;
	width: 100vw;
	display: flex;
	justify-content: center;
`;
const Title = styled.h1`
	color: #333533;
	font-weight: 900;
	font-size: 48px;
	margin: 20px 0px 40px 0px;
`;

export default function ArtistsCollage({ labelArtists }) {
	return (
		<Container>
			<TitleContainer>
				<Title>Artists</Title>
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
