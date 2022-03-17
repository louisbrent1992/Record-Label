import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	width: 100%;
	overflow: hidden;
	background: url("../../images/background.jpg");
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Message = styled.h1`
	position: absolute;
	color: black;
`;

export default function NoMatch() {
	return (
		<Container>
			<Message>Currently Under Construction</Message>
		</Container>
	);
}
