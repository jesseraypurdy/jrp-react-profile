import { createGlobalStyle } from "styled-components";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

export const Breakpoints = [481, 769, 1601, 2001];
export const CenterWidth = ["90vw", "90vw", "90vw", "55vw"];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ GlobalStyle ] ...>>>
///////////////////////////////////////////////////

export const GlobalStyle = createGlobalStyle`
	body {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		font-size: 18px;
	}
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Theme ] ...>>>
///////////////////////////////////////////////////

export const Theme = {
	breakpoints: [
		Breakpoints[0] + "px",
		Breakpoints[1] + "px",
		Breakpoints[2] + "px",
		Breakpoints[3] + "px"
	],
	colors: {
		lightShade1: "#FAFAFB",
		lightShade2: "#f2f1f2",

		darkShade1: "#345",
		darkShade2: "#678",

		highlight1: "#789",
		highlight2: "#bcd",

		main: "#FF9F1C",
		accent1: "#4B9EC1",
		accent2: "#7FA232",

		text1: "#262B4A",
		text2: "#676b80",

		title: "#547D8A"
	},
	fonts: {
		heading: "Roboto, Sans-Serif",
		label: "Roboto, Sans-Serif",
		title: "Roboto, Sans-Serif",

		body: "Lora, Serif",
		quote: "Lora, Serif",

		input: "IBM Plex Mono, monospace",
		navBar: "Roboto, Sans-Serif"
	},
	fontSizes: [12, 14, 16, 20, 24, 34, 48, 60, 96, 124, 192],
	shadows: {
		text: "0.05em 0.05em 0.02em rgba(0, 0, 0, .2)",
		display: "0.08em 0.08em 0.022em rgba(0, 0, 0, 0.2)"
	}
};
