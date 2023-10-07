import Section from "components/Section";
import { Heading } from "components/Text";
import { Flex } from "kaila/Kaila";
import ParticleConfig from "particles.json";
import { PureComponent } from "react";
import Particles from "react-particles-js";
import styled, { keyframes } from "styled-components";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const bgCol1 = "#2193b0";
const bgCol2 = "#6aa5ed";
const chevronCol = "rgba(25, 50, 75, 0.5)";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Animations ] ...>>>
///////////////////////////////////////////////////

const ChevronAnim = keyframes`
	0% {
		bottom: 0px;
	}
	50% {
		bottom: 15px;
	}
	100% {
		bottom: 0px;
	}
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const Background = styled(Flex)`
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: linear-gradient(-45deg, ${bgCol1}, ${bgCol2});
	z-index: 0;
`;

const HeadingShadow = styled(Heading)`
	text-shadow: ${(props) => props.theme.shadows.display};
`;

const ButtonStyle = styled.button`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	outline: none;
	border: none;
	background: transparent;
	cursor: pointer;

	animation: ${ChevronAnim} 1s linear infinite;
`;

const ChevronStyle = styled.svg`
	fill: ${chevronCol};
`;

const BannerParticles = styled(Particles)`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Subcomponents ] ...>>>
///////////////////////////////////////////////////

const ChevronButton = (props) => (
	<ButtonStyle onClick={() => props.scrollTo("home")}>
		<ChevronStyle width="64" height="64" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24">
			<path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
		</ChevronStyle>
	</ButtonStyle>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

// TODO: If we stick to a basic enough banner, add
// mouse-light-following-shadows (Not a technical term)

class BannerSection extends PureComponent {
	render() {
		return (
			<Section noPadding height={this.props.height}>
				<Background>
					<BannerParticles params={ParticleConfig} />
					<HeadingShadow variant="display3" color="white" gutter>
						Hi! I'm Jesse.
					</HeadingShadow>
					<Heading variant="h2" color="white" gutter>
						Welcome to my digital resume. Thanks for stopping by.
					</Heading>
				</Background>
				<ChevronButton scrollTo={this.props.scrollTo} />
			</Section>
		);
	}
}

export default BannerSection;
