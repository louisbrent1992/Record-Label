import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarLinkContainer = styled.div`
	display: flex;

	@media only screen and (max-width: 55rem) {
		display: none;
	}
`;

const NavbarLink = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;

	@media only screen and (max-width: 64rem) {
		// Adjusted breakpoint to 1024px
		font-size: large;
		margin: 5px;
	}

	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;

const NavbarAnchor = styled.a`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;

	@media only screen and (max-width: 64rem) {
		// Adjusted breakpoint to 1024px
		font-size: large;
		margin: 5px;
	}

	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;

const NavbarLinks = () => (
	<NavbarLinkContainer>
		<NavbarLink to="/"> Home</NavbarLink>
		<NavbarAnchor href="#artists">Artists</NavbarAnchor>
		<NavbarLink to="/releases">Releases</NavbarLink>
		<NavbarLink to="/videos"> Videos</NavbarLink>
		<NavbarLink to="/news"> News</NavbarLink>
		<NavbarLink to="/store"> Store</NavbarLink>
		<NavbarLink to="/demos"> Demo Submissions</NavbarLink>
	</NavbarLinkContainer>
);

export default NavbarLinks;
