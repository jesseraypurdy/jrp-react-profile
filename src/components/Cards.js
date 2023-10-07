import { CenterWidth } from "GlobalStyles";
import { Body, Heading } from "components/Text";
import { Box, Card, Flex, Image, Link } from "kaila/Kaila";
import styled from "styled-components";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const CardLink = styled(Link)`
	text-decoration: none;
	text-decoration-color: ${(props) => props.theme.colors.accent1};
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Horizontal Card ] ...>>>
///////////////////////////////////////////////////

// <<<... [ Constants] ...>>> //
const horizCardAlign = ["center", null, "flex-start"];
const horizCardJustify = ["center", null, "space-between"];
const horizCardImageWidth = [4 / 5, null, 1 / 3];
const horizCardTextWidth = [1, null, 3 / 5];
const horizCardTextPt = [4, 5, 0];
const titleColor = "accent1";
const subtitleColor = "accent2";

// <<<... [ Styles] ...>>> //
const HorizCardImage = styled(Image)`
	border-radius: 10px;
`;

// <<<... [ Component ] ...>>> //
export const HorizontalCard = (props) => (
	<Card width={CenterWidth}>
		<Flex alignItems={horizCardAlign} justifyContent={horizCardJustify} flexWrap="wrap">
			<HorizCardImage src={props.img} width={horizCardImageWidth} />

			<Box width={horizCardTextWidth} pt={horizCardTextPt}>
				<Heading as={CardLink} href={props.link} target="_blank" variant="h3" color={titleColor} gutter>
					{props.title}
				</Heading>
				<Heading variant="h4" color={subtitleColor} gutter>
					{props.subtitle}
				</Heading>
				<br />
				<Body color="text2">{props.children}</Body>
			</Box>
		</Flex>
	</Card>
);
