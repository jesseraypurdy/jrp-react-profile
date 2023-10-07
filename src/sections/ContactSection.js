import React, { PureComponent } from "react";
import { Flex, Link, Box } from "kaila/Kaila";
import styled from "styled-components";
import Section from "components/Section";
import { Heading } from "components/Text";
import EmailForm from "components/EmailForm";
import { Center } from "components/Misc";
import { Router, Location, navigate } from "@reach/router";
import posed, { PoseGroup } from "react-pose";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const bgCol1 = "#8360c3";
const bgCol2 = "#2ebf91";
const footerHeight = "96px";
const iconSize = 52;
const defaultBig = "Get in touch!";
const defaultSmall = "Either through email, or one of the platforms below.";
const submittedBig = "Thanks :)";
const submittedSmall = "I'll get back to you as soon as I recieve your message.";
const emailBoxMargin = [3, 4];
const emailYMargin = [4, 0];
const emailWidth = ["100%", "80%", "60%", "30%"];
const footerIconFlexWidth = ["90%", "75%", "60%", "30%"];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const DisplayArea = styled(Flex)`
	width: 100%;
	min-height: calc(100vh - ${footerHeight});
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: linear-gradient(-25deg, ${bgCol1}, ${bgCol2});
`;

const IconStyle = styled.svg`
	transition: 0.25s;
	fill: ${(props) => props.theme.colors.highlight1};
	&:hover {
		fill: ${(props) => props.theme.colors.highlight2};
	}
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Posed Components ...>>>
///////////////////////////////////////////////////

const RouteContainer = posed.div({
	enter: { opacity: 1, delay: 300, beforeChildren: 300 },
	exit: { opacity: 0 }
});

const PosedRouter = (props) => (
	<Location>
		{({ location }) => (
			<PoseGroup>
				<RouteContainer key={location.key}>
					<Router location={location}>{props.children}</Router>
				</RouteContainer>
			</PoseGroup>
		)}
	</Location>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Footer Icons ] ...>>>
///////////////////////////////////////////////////

const FooterIcon = (props) => (
	<Link href={props.href}>
		<IconStyle width={iconSize} height={iconSize} viewBox="0 0 24 24">
			{props.children}
		</IconStyle>
	</Link>
);

const GithubIcon = (props) => (
	<FooterIcon href="https://github.com/Jrayp">
		<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z" />
	</FooterIcon>
);

const LinkedInIcon = (props) => (
	<FooterIcon href="https://www.linkedin.com/in/jesse-purdy-94b997163/">
		<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
	</FooterIcon>
);

const EmailIcon = (props) => (
	<FooterIcon href="mailto:jesseraypurdy@gmail.com">
		<path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z" />
	</FooterIcon>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Subcomponents ] ...>>>
///////////////////////////////////////////////////

const Footer = (props) => (
	<Flex
		width="100%"
		height={footerHeight}
		justifyContent="center"
		alignItems="center"
		bg="darkShade1"
	>
		<Flex
			width={footerIconFlexWidth}
			justifyContent="space-around"
			alignItems="center"
		>
			<LinkedInIcon />
			<GithubIcon />
			<EmailIcon />
		</Flex>
	</Flex>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class ContactSection extends PureComponent {
	state = {
		display: "default"
	};

	isSubmitted = () => {
		return this.state.display === "submitted";
	}

	onMessageSubmit = () => {
		this.setState({ display: "submitted" });
	};

	DisplayText = (props) => {
		return (
			<div>
				<Heading variant="display3" color="white">
					{this.isSubmitted() ? submittedBig : defaultBig}
				</Heading>
				<br />
				<Heading variant="h2" color="white">
					{this.isSubmitted() ? submittedSmall : defaultSmall}
				</Heading>
			</div>
		);
	};

	DisplayEmail = (props) => {
		return (
			<Center my={emailYMargin}>
				<Box width={emailWidth} m={emailBoxMargin}>
					<EmailForm submitCallback={this.onMessageSubmit} />
				</Box>
			</Center>
		);
	};

	render() {
		const DisplayText = this.DisplayText;
		const DisplayEmail = this.DisplayEmail;
		return (
			<Section noPadding>
				<DisplayArea>
					<Box width="100%">
						{this.isSubmitted()
							?
							<Zoom>
								<DisplayText />
							</Zoom>
							:
							<Fade bottom>
								<DisplayText />
								<Box height="8vh" />
								<DisplayEmail />
							</Fade>}
					</Box>
				</DisplayArea>
				<Footer />
			</Section>
		);
	}
}

export default ContactSection;
