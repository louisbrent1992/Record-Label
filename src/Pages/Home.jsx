import React from "react";
import LatestVideos from "../Components/LatestVideos";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import ArtistsCollage from "../Components/ArtistsCollage";
import Footer from "../Components/Footer";
import styled from "styled-components";
import NewReleases from "../Components/NewReleases";
import SignUp from "../Components/SignUp";
import { labelArtists } from "../data/data";
import { social } from "../data/data";

const Container = styled.div`
	overflow: hidden;
`;

export default function Home() {
	return (
		<Container>
			<Navbar social={social} />
			<Slider />
			<LatestVideos />
			<ArtistsCollage labelArtists={labelArtists} />
			<NewReleases />
			<SignUp />
			<Footer social={social} />
		</Container>
	);
}
