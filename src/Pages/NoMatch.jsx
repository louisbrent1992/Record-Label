import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: url("../../images/background.jpg") no-repeat center center/cover;
	position: relative;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const Content = styled.div`
	position: relative;
	z-index: 2;
	text-align: center;
	color: whitesmoke;
`;

const Message = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;

	@media only screen and (max-width: 32rem) {
		font-size: 2rem;
	}
`;

const SubMessage = styled.p`
	font-size: 1.5rem;
	margin-bottom: 2rem;

	@media only screen and (max-width: 32rem) {
		font-size: 1rem;
	}
`;

const Button = styled.button`
	background-color: #f5cb5c;
	color: #333533;
	border: none;
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	cursor: pointer;
	border-radius: 5px;
	box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #e5bb4c;
	}
`;

export default function NoMatch() {
	const handleClick = () => {
		window.location.href = "/";
	};

	return (
		<Container>
			<Overlay />
			<Content>
				<Message>503 - Page Under Construction</Message>
				<SubMessage>
					We're working hard to bring this page to you soon. Stay tuned!
				</SubMessage>
				<Button onClick={handleClick}>Return to Home</Button>
			</Content>
		</Container>
	);
}
