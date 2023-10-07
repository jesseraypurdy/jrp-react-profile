import { Button as ButtonBase } from "kaila/Kaila";
import styled from "styled-components";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Transparent Button ] ...>>>
///////////////////////////////////////////////////

export const ButtonTrans = styled(ButtonBase)`
	text-shadow: ${(props) => props.theme.shadows.text};

	color: white;
	background-color: transparent;
	border-radius: 30px;
	width: 225px;
	height: 60px;
	border-style: solid;
	border-width: 2px;
	outline: none;

	transition: 0.25s;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 24px white;
		background-color: rgba(0, 0, 0, 0.1);
	}
`;
