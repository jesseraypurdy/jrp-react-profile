import React from "react";
import styled from "styled-components";
import { Flex } from "kaila/Kaila";
import { Heading } from "components/Text";
import { CenterWidth } from "GlobalStyles";
import LightSpeed from "react-reveal/LightSpeed";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const gutterTop = [4, 6];
const gutterBottom = [4, 5];
const sectionXPadding = [3, 4];
const titleBPadding = [3, 5, 5];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const TitleStyle = styled(Heading)`
	overflow: hidden;
	text-align: center;

	:before,
	:after {
		background-color: ${(props) => props.theme.colors.title};
		display: inline-block;
		height: 4px;
		position: relative;
		vertical-align: middle;
		width: 50%;
		content: "";
	}

	:before {
		right: 0.5em;
		margin-left: -50%;
	}

	:after {
		left: 0.5em;
		margin-right: -50%;
	}
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Title ] ...>>>
///////////////////////////////////////////////////

export const Title = (props) => (
	<LightSpeed left>
		<TitleStyle
			fontFamily="title"
			variant="display1"
			color="title"
			pb={titleBPadding}
			width={CenterWidth}
			// uppercase
		>
			{props.title}
		</TitleStyle>
	</LightSpeed>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Section Component ] ...>>>
///////////////////////////////////////////////////

const Section = (props) => {
	let title;

	if (props.title)
		title = (
			<div>
				<Title title={props.title} /> <br />
			</div>
		);

	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			px={props.noPadding ? null : sectionXPadding}
			pt={props.gutterTop ? gutterTop : null}
			pb={props.gutterBottom ? gutterBottom : null}
			bg="lightShade1"
			{...props}
		>
			{title}
			{props.children}
		</Flex>
	);
};

export default Section;
