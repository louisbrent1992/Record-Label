import React from "react";
import styled from "styled-components";
import Artist from "./Artist";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: white;
	color: #333533;
`;

const Wrapper = styled.div`
	height: 60vh;
	width: 100vw;
	display: flex;
	flex-wrap: wrap;
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
			<Wrapper>
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
			</Wrapper>
		</Container>
	);
}
