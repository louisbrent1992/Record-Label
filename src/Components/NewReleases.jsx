import React from "react";
import styled from "styled-components";
import { newReleases } from "../data/data";
import Release from "./Release";

const Container = styled.div`
	height: 110vh;
	width: 100vw;
	display: flex;
	background-color: white;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0;
	color: #333533;
`;

const TitleContainer = styled.div`
	display: flex;
	height: 15vh;
	width: 88vw;
	margin-top: 0;
	justify-content: flex-start;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 48px;
	font-weight: 900;
	margin: 0px, 0px, 14px;
	color: #333533;
`;
const ReleasesContainer = styled.div`
	width: 88vw;
	height: 86vh;
	display: flex;
	align-items: center;
	margin-bottom: 1px;
`;
const ViewReleasesContainer = styled.div`
	display: flex;
	height: 55px;
	width: 87vw;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 9px;
	padding-right: 28px;
`;
const ViewReleases = styled.button`
	height: 53px;
	width: 243px;
	font-size: 20px;
	font-weight: 900;
	border: none;
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
