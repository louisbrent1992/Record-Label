import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 100%;
`;
const Image = styled.img`
	height: 403px;
	width: 403px;
	margin-right: 43px;
`;

const TitleContainer = styled.div`
	font-size: 20px;
	font-weight: 900;
	margin-top: 5px;
`;
const Title = styled.h3`
	color: #333533;
`;

const SourceContainer = styled.div`
	margin-top: 27px;
`;

const Source = styled.button`
	height: 47px;
	width: 196px;
	font-weight: 900;
	font-size: 20px;
	border: 2px solid black;
	background-color: #f5cb5c;
	color: #333533;
	margin-top: 23px;
	cursor: pointer;

	&:hover {
		background-color: white;
		transition: all 0.3s ease-in-out;
	}
`;
const handleSource = (type) => {
	if (type === "music") {
		return "Listen Now";
	} else {
		return "Buy Now";
	}
};
const Link = styled.a``;

export default function Release({ release }) {
	const { img, title, type, source, desc } = release;
	return (
		<Container>
			<Image src={img} title={desc} />
			<TitleContainer>
				<Title>{title ? title : "Title"}</Title>
			</TitleContainer>
			<SourceContainer>
				<Source>
					{handleSource(type)}
					<Link src={source ? source : "Source"}></Link>
				</Source>
			</SourceContainer>
		</Container>
	);
}
