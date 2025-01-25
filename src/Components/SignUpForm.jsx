import { CheckBox } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { countryList } from "../data/countries";

const Container = styled.div`
	height: 100%;
	width: 100%;
`;

const Label = styled.h3`
	margin-bottom: 5px;
`;

const Form = styled.form`
	width: 75%;

	@media only screen and (max-width: 55rem) {
		margin: 0 auto;
	}
`;

const InputContainer = styled.div`
	margin-bottom: 10px;
	margin-top: 10px;
`;
const Input = styled.input`
	width: 100%;
	border-top: none;
	border-right: none;
	border-left: none;
	border: none;
	border-bottom: 2px solid #333533;
	margin-bottom: 30px;
	background-color: #f5cb5c;
	font-size: 16px;
	color: #333533;
`;

const TextFieldContainer = styled.div`
	margin-bottom: 10px;
`;
const TextField = styled.select`
	border-top: none;
	border-right: none;
	border-left: none;

	border-bottom: 2px solid #333533;
	width: 100%;
	margin-bottom: 10px;
	background-color: #f5cb5c;
	font-size: 20px;
	color: #333533;
`;
const Option = styled.option`
	background-color: whitesmoke;
`;

const CheckboxLabel = styled.h3`
	font-size: 11px;
	margin-bottom: 15px;
`;
const CheckboxContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
	align-items: center;
`;

const CheckOption = styled.p`
	font-size: 11px;
	margin-right: 30px;
	display: flex;
	align-items: center;
`;

const Agreement = styled.p`
	margin: 25px 0px;
	font-size: 9px;
`;
const Link = styled.a`
	font-weight: 900;
	cursor: pointer;
`;

const SubscribeButtonContainer = styled.div``;
const SubscribeButton = styled.button`
	height: 50px;
	width: 190px;
	color: whitesmoke;
	font-size: 20px;
	font-weight: 900;
	border: none;
	background-color: #333533;
	cursor: pointer;
	box-shadow: 0px 8px 8px rgba(0, 0.2, 0, 0.2);
	border-radius: 5px;

	&:hover {
		transition: color 0.2s ease-in-out;
		color: #f5cb5c;
	}
`;

export default function SignUpForm() {
	return (
		<Container>
			<Form>
				<Label>EMAIL ADDRESS</Label>
				<InputContainer>
					<Input required placeholder="EMAIL ADDRESS (REQUIRED)" />
				</InputContainer>
				<TextFieldContainer>
					<Label>COUNTRY</Label>
					<TextField
						id="outlined-select-country"
						select
						label="Select"
						helperText="Please select your country"
					>
						{countryList.map((option, index) => (
							<Option key={index} value={option}>
								{option}
							</Option>
						))}
					</TextField>
				</TextFieldContainer>
				<CheckboxLabel>Subscribe to Email Updates From: </CheckboxLabel>
				<CheckboxContainer>
					<CheckBox
						type="checkbox"
						name="your-site-brand"
						id="your-site-brand"
						value="your-site-brand"
						checked="checked"
						style={{ fontSize: "medium", marginRight: "10px" }}
					/>
					<CheckOption>YOUR-SITE-BRAND</CheckOption>
					<CheckBox
						type="checkbox"
						name="ALL OF OUR AFFILIATES"
						id="ALL OF OUR AFFILIATES"
						value="ALL OF OUR AFFILIATES"
						checked="checked"
						style={{ fontSize: "medium", marginRight: "10px" }}
					/>
					<CheckOption>OUR BUSINESS AFFILIATES</CheckOption>
				</CheckboxContainer>
				<Agreement>
					Emails will be sent by or on behalf of your-site-brand, Los Angeles,
					CA 90043 (111) 111-1111. You may withdraw your consent at any time.{" "}
					<Link>Privacy Policy</Link> /{" "}
					<Link>Do Not Sell My Personal Information</Link>
				</Agreement>
				<SubscribeButtonContainer>
					<SubscribeButton>Subscribe</SubscribeButton>
				</SubscribeButtonContainer>
			</Form>
		</Container>
	);
}
