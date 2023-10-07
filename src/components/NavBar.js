import { CenterWidth } from "GlobalStyles.js";
import { Button, Flex } from "kaila/Kaila";
import { Component } from "react";
import styled from "styled-components";
import { display } from "styled-system";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const StickyWrapper = styled.div`
	height: 0;
	position: sticky;
	top: 0;
	z-index: 1;
`;

const Background = styled(Flex)`
	${display};
	background-color: ${(props) => props.theme.colors.darkShade1};
	height: ${(props) => props.height};
	width: 100%;
`;

// Until I design a mobile navbar:
// Only display navbar when viewport is wide enough.
Background.defaultProps = {
	display: ["none", null, "flex"],
};

const NavButtonStyle = styled(Button)`
	font-family: ${(props) => props.theme.fonts.navBar};
	color: ${(props) => (props.current ? props.theme.colors.highlight2 : props.theme.colors.highlight1)};

	font-size: 1.25em;
	outline: none;
	text-transform: capitalize;
	background-color: transparent;

	cursor: pointer;

	:hover {
		color: ${(props) => props.theme.colors.highlight2};
	}
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Subcomponents ] ...>>>
///////////////////////////////////////////////////

const NavButton = (props) => (
	<NavButtonStyle current={props.current === props.id ? true : false} onClick={() => props.scrollTo(props.id)}>
		{props.id}
	</NavButtonStyle>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class NavBar extends Component {
	render() {
		return (
			<StickyWrapper>
				<Background alignItems="center" justifyContent="center">
					<Flex alignItems="center" justifyContent="space-between" width={CenterWidth}>
						<NavButton id="home" {...this.props} />
						<NavButton id="skills" {...this.props} />
						<NavButton id="work" {...this.props} />
						<NavButton id="projects" {...this.props} />
						<NavButton id="education" {...this.props} />
						<NavButton id="contact" {...this.props} />
					</Flex>
				</Background>
			</StickyWrapper>
		);
	}
}

export default NavBar;
