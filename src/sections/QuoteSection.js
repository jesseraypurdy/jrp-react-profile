import Section from "components/Section";
import { Body } from "components/Text";
import { Flex } from "kaila/Kaila";
import { PureComponent } from "react";
import styled from "styled-components";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const sectionHeight = ["100vh", "400px"];
const quoteCardWidth = ["90%", "400px"];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const Quote = styled.blockquote`
	background-color: ${(props) => props.theme.colors.lightShade1};

	margin: 0;
	padding: 30px;
	border-radius: 5px;
	box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.4);
`;

const QuoteBody = styled(Body)`
	font-family: ${(props) => props.theme.fonts.quote};
	color: ${(props) => props.theme.colors.text2};

	position: relative;
	margin: 0;

	font-style: italic;
	line-height: 40px;
	text-indent: 100px;

	:before {
		color: ${(props) => props.theme.colors.main};

		content: "“";
		position: absolute;
		top: 0px;
		font-family: serif;
		font-style: normal;
		font-weight: 700;
		font-size: 175px;
		left: -105px;
		text-shadow: 7px 14px 10px rgba(0, 0, 0, 0.3);
	}
`;

const Author = styled.p`
	font-family: ${(props) => props.theme.fonts.quote};
	color: ${(props) => props.theme.colors.main};

	font-size: 18px;
	text-align: right;
	text-transform: uppercase;
	padding-top: 10px;
	font-weight: bold;

	text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.4);

	:before {
		content: "― ";
	}
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class QuoteSection extends PureComponent {
	render() {
		return (
			<Section
				noGutter
				flexDirection="row"
				height={sectionHeight}
				alignItems="center"
				justifyContent="center"
				bg="darkShade2"
			>
				<Flex flexDirection="column" width={quoteCardWidth}>
					<Quote>
						<QuoteBody big>{this.props.children}</QuoteBody>
					</Quote>
					<Author>{this.props.author}</Author>
				</Flex>
			</Section>
		);
	}
}

export default QuoteSection;
