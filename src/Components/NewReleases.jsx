import React from "react";
import styled from "styled-components";
import { newReleases } from "../data/data";
import Release from "./Release";

const Container = styled.div`
	height: auto;
	width: 100vw;
	display: flex;
	overflow-y: hidden;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0;
	color: #333533;

	@media only screen and (max-width: 55rem) {
		height: auto;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	height: 15vh;
	width: 88vw;
	justify-content: flex-start;
	align-items: center;
	margin-block: 2rem;

	@media only screen and (max-width: 55rem) {
		justify-content: center;
	}
`;
const Title = styled.h1`
	font-size: 48px;
	font-weight: 900;
	margin: 0px, 0px, 14px;
	color: #333533;

	@media only screen and (max-width: 55rem) {
		font-size: 36px;
	}
`;
const ReleasesContainer = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	overflow-y: hidden;
	margin-left: 4rem;

	::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (max-width: 55rem) {
		margin-left: 0.75rem;
	}
`;
const ViewReleasesContainer = styled.div`
	display: flex;
	height: 55px;
	width: 87vw;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 9px;
	padding-right: 28px;

	@media only screen and (max-width: 55rem) {
		width: 100vw;
		padding-right: 0;
	}
`;
const ViewReleases = styled.button`
	height: 53px;
	width: 243px;
	border: none;
	font-size: 20px;
	font-weight: 900;
	background-color: #f5cb5c;
	color: #333533;
	cursor: pointer;
`;

export default function NewReleases() {
	return (
		<Container>
			<TitleContainer>
				<Title>New Releases</Title>
			</TitleContainer>
			<ReleasesContainer>
				{newReleases.map((release) => (
					<Release release={release} key={release.id} />
				))}
			</ReleasesContainer>
			<ViewReleasesContainer>
				<ViewReleases>View All Releases</ViewReleases>
			</ViewReleasesContainer>
		</Container>
	);
}
