import { css } from "styled-components";

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 55rem) {
			${props}
		}
	`;
};

export const tablet = (props) => {
	return css`
		@media only screen and (min-width: 32rem) and (max-width: 55rem) {
			${props}
		}
	`;
};

export const desktop = (props) => {
	return css`
		@media only screen and (min-width: 55rem) {
			${props}
		}
	`;
};
