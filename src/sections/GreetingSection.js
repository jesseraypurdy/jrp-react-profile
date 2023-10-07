import pic from "assets/profile_pic.jpg";
import Section from "components/Section";
import { Body } from "components/Text";
import { Box, Flex, Image } from "kaila/Kaila";
import { PureComponent } from "react";
import Slide from "react-reveal/Slide";
import styled from "styled-components";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const textBlockWidth = [ 1, 4 / 5, 1 / 3.2 ];
const imageWidth = [ 4 / 5, 3 / 5, 1 / 5 ];
const yMargins = [ 4, 5, 0 ];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const DropCapsBody = styled( Body )`
	::first-letter {
		color: ${( props ) => props.theme.colors.main};
		text-shadow: ${( props ) => props.theme.shadows.text};

		float: left;
		margin: 0.205em 0.153em 0 0;
		font-size: 3.26em;
		line-height: 0.5em;

		@-moz-document url-prefix() {
			margin: 11px 0 -5px 0;
			padding: 0 0.1em 0 0;
			height: 0.7em;
			line-height: 0.85em;
		}
	}
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Subcomponents ] ...>>>
///////////////////////////////////////////////////

const TextBlock = ( props ) => (
	<Box width={textBlockWidth} my={yMargins}>
		<DropCapsBody big>{props.children}</DropCapsBody>
	</Box>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class] ...>>>
///////////////////////////////////////////////////

// TODO: Add an easter egg:
//		Clicking the portrait makes it spin and reveals something

class GreetingSection extends PureComponent {
	render () {
		return (
			<Section height={this.props.height}>
				<Flex
					flexDirection="row"
					justifyContent="space-around"
					alignItems="center"
					flexWrap="wrap"
					m="auto"
				>
					<TextBlock>
						I am a self-taught programmer, and mathematics graduate currently employed as a lead software engineer.
						I bring confidence, resilience, passion, and attention to detail to the job, and pride myself in
						being able to “get things done” in a timely and professional manner. I absolutely love working in
						this field, and enjoy taking on challenging projects, and learning new things.
					</TextBlock>

					<Box width={imageWidth} my={yMargins}>
						<Slide bottom>
							<Image src={pic} borderRadius="50%" />
						</Slide>
					</Box>

					<TextBlock>
						<div>
							This site was my first web project, and was initially created to act as a demonstration of my
							ability	to pick up new skills before I had begun my career. No point in letting it go to waste
							though, so I am keeping it updated as a digital resume of sorts.
							Keep scrolling to find out more! &ensp;{" "}
							<span role="img" aria-label="Thumbs-Up">
								👍
							</span>
						</div>
					</TextBlock>
				</Flex>
			</Section>
		);
	}
}

export default GreetingSection;
