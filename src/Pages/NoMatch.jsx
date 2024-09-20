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
	font-size: 2rem;

	@media only screen and (max-width: 32rem) {
		font-size: 1.5rem;
	}
`;

export default function NoMatch() {
	return (
		<Container>
			<Message>Currently Under Construction</Message>
		</Container>
	);
}
