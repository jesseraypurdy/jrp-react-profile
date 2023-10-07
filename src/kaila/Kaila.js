import styled from "styled-components";
import {
	space,
	color,
	width,
	height,
	flex,
	order,
	alignSelf,
	flexWrap,
	flexDirection,
	alignItems,
	justifyContent,
	fontSize,
	fontFamily,
	fontWeight,
	textAlign,
	lineHeight,
	letterSpacing,
	borders,
	borderColor,
	borderRadius,
	buttonStyle,
	boxShadow,
	backgroundImage,
	backgroundSize,
	backgroundPosition,
	backgroundRepeat,
	opacity,
	variant
} from "styled-system";

const css = (props) => props.css;
const themed = (key) => (props) => props.theme[key];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Box ] ...>>>
///////////////////////////////////////////////////
 
export const Box = styled("div")(
	space,
	width,
	height,
	fontSize,
	color,
	flex,
	order,
	alignSelf,
	themed("Box"),
	css
);

Box.propTypes = {
	...space.propTypes,
	...width.propTypes,
	...height.propTypes,
	...fontSize.propTypes,
	...color.propTypes
};

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Flex ] ...>>>
///////////////////////////////////////////////////

export const Flex = styled(Box)(
	{
		display: "flex"
	},
	flexWrap,
	flexDirection,
	alignItems,
	justifyContent,
	themed("Flex")
);

Flex.propTypes = {
	...flexWrap.propTypes,
	...flexDirection.propTypes,
	...alignItems.propTypes,
	...justifyContent.propTypes
};

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Text ] ...>>>
///////////////////////////////////////////////////

export const Text = styled(Box)(
	fontFamily,
	fontWeight,
	textAlign,
	lineHeight,
	letterSpacing,
	themed("Text")
);

Text.propTypes = {
	...fontFamily.propTypes,
	...fontWeight.propTypes,
	...textAlign.propTypes,
	...lineHeight.propTypes,
	...letterSpacing.propTypes
};

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Headings ] ...>>>
///////////////////////////////////////////////////

export const Heading = styled(Text)(
	{
		fontWeight: "bold"
	},
	themed("Heading")
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Link ] ...>>>
///////////////////////////////////////////////////

export const Link = styled(Box)(themed("Link"));

Link.defaultProps = {
	as: "a",
	color: "blue"
};

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Button ] ...>>>
///////////////////////////////////////////////////

export const Button = styled(Box)(
	{
		appearance: "none",
		display: "inline-block",
		textAlign: "center",
		lineHeight: "inherit",
		textDecoration: "none"
	},
	fontWeight,
	borders,
	borderColor,
	borderRadius,
	buttonStyle,
	themed("Button")
);

Button.propTypes = {
	...fontWeight.propTypes,
	...borders.propTypes,
	...borderColor.propTypes,
	...borderRadius.propTypes,
	...buttonStyle.propTypes
};

Button.defaultProps = {
	as: "button",
	fontSize: "inherit",
	fontWeight: "bold",
	m: 0,
	px: 3,
	py: 2,
	color: "white",
	bg: "blue",
	border: 0,
	borderRadius: 4
};

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Image ] ...>>>
///////////////////////////////////////////////////

export const Image = styled(Box)(
	{
		maxWidth: "100%",
		height: "auto"
	},
	height,
	borderRadius,
	themed("Image")
);

Image.propTypes = {
	...height.propTypes,
	...borderRadius.propTypes
};

Image.defaultProps = {
	as: "img",
	m: 0
};

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Card ] ...>>>
///////////////////////////////////////////////////

const cards = variant({ key: "cards" });

export const Card = styled(Box)(
	borders,
	borderColor,
	borderRadius,
	boxShadow,
	backgroundImage,
	backgroundSize,
	backgroundPosition,
	backgroundRepeat,
	opacity,
	themed("Card"),
	cards
);

Card.propTypes = {
	...borders.propTypes,
	...borderColor.propTypes,
	...borderRadius.propTypes,
	...boxShadow.propTypes,
	...backgroundImage.propTypes,
	...backgroundSize.propTypes,
	...backgroundPosition.propTypes,
	...backgroundRepeat.propTypes,
	...opacity.propTypes,
	...cards.propTypes
};
