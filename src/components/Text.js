import { Heading as HeadingBase, Text } from "kaila/Kaila";
import { Component } from "react";
import styled from "styled-components";
import { fontFamily, fontSize, textAlign } from "styled-system";

// TODO: This is not how I want to do things. I am trying to come up with
// a better/cleaner method of handling text, that works well with styled system,
// but have not yet decided on anything. This is functional, but should be changed
// in the future.

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Heading ] ...>>>
///////////////////////////////////////////////////

const headingMap = {
	display3: {
		fontSize: ["2em", "5em", "5em", "6em"],
		// lineHeight: ["1.25em", null, "1.125em", "1.05em"],
		fontWeight: "bold",
	},
	display2: {
		fontSize: ["2em", "4em", "4em", "5em"],
		// lineHeight: ["1.25em", null, "1.125em", "1.05em"],
		fontWeight: "bold",
	},
	display1: {
		fontSize: ["2em", "3em", "3em", "4em"],
		// lineHeight: ["1.25em", null, "1.125em", "1.05em"],
		fontWeight: "bold",
	},
	h1: {
		fontSize: ["2em", null, "2.5em", "3em"],
		lineHeight: ["1.25em", null, "1.125em", "1.05em"],
		weight: "bold",
	},
	h2: {
		fontSize: ["1.625em", null, "2em", "2.25em"],
		lineHeight: ["1.13636364em", null, "1.25em"],
		fontWeight: "bold",
	},
	h3: {
		fontSize: ["1.375em", null, "1.5em", "1.75em"],
		lineHeight: ["1.15384615em", null, "1.25em"],
		fontWeight: "bold",
	},
	h4: {
		fontSize: ["1.125em"],
		lineHeight: ["1.11111111em", null, "1.22222222em"],
		fontWeight: "bold",
	},
};

export class Heading extends Component {
	constructor(props) {
		super(props);

		if (props.uppercase) {
			this.transform = "uppercase";
			this.letterSpacing = ".06em";
		} else if (props.lowercase) {
			this.transform = "lowercase";
		} else if (props.capitalize) {
			this.transform = "capitalize";
		}

		// Arbitrary
		if (props.gutter) this.gutter = "calc(.2 * 1em)";
	}

	render() {
		return (
			<HeadingBase
				fontFamily="heading"
				letterSpacing={this.letterSpacing}
				color="text1"
				pb={this.gutter}
				{...headingMap[this.props.variant ? this.props.variant : "h3"]}
				{...this.props}
				css={{
					textTransform: this.transform,
				}}
			>
				{this.props.children}
			</HeadingBase>
		);
	}
}

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Body ] ...>>>
///////////////////////////////////////////////////

export class Body extends Component {
	constructor(props) {
		super(props);

		this.lineHeight = ["1.25em", null, "1.375em"];

		if (props.big) {
			this.size = ["1.1em", "1.25em"];
		} else if (props.small) {
			this.size = [0, 1, null, 2, 3];
		} else {
			// DEFAULT
			this.size = "1em";
		}
	}

	render() {
		return (
			<Text fontFamily="body" fontSize={this.size} lineHeight={this.lineHeight} color="text1" {...this.props}>
				{this.props.children}
			</Text>
		);
	}
}

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Label ] ...>>>
///////////////////////////////////////////////////

const LabelStyle = styled("label")`
	${fontSize};
	${fontFamily};
	${textAlign};
	display: block;
	line-height: 1.5em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export class Label extends Component {
	constructor(props) {
		super(props);

		if (props.big) {
			this.size = [5, 6, null, 7, 8];
		} else if (props.small) {
			this.size = [1, 2, null, 3, 4];
		} else {
			// DEFAULT
			this.size = ["1.15em", "1.25em"]; //[2, 3, null, 4, 6];
		}
	}

	render() {
		return (
			<LabelStyle fontFamily="label" fontSize={this.size} {...this.props}>
				{this.props.children}
			</LabelStyle>
		);
	}
}
