import { Label } from "components/Text";
import { Box, Flex } from "kaila/Kaila";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import styled from "styled-components";

/* TODO: This module needs to be generalized. For now it functions very well for my resume site,
but is lacking in some customization (such as font-size), and it probably shouldn't be extending
labels. */

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const RatingContainer = styled(Flex)`
	justify-content: space-between;
	:hover {
		background: ${(props) => props.hoverBg};
	}
	cursor: default;
`;

const Icon = styled(Label)`
	color: ${(props) => props.color};
	padding-left: 0.05em;
	padding-right: 0.05em;
	text-overflow: clip;
	transition: padding-left 0.25s ease;
	${RatingContainer}:hover & {
		padding-left: 0.15em;
	}
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class Rating extends PureComponent {
	constructor(props) {
		super(props);
		this.pushIcons();
	}

	pushIcons = () => {
		const props = this.props;

		this.icons = [];

		const maxRating = props.maxRating;
		const rating = props.rating;

		for (let i = 0; i < maxRating; i++) {
			let selected = false;

			if (rating > i && rating != null) selected = true;

			this.icons.push(
				<Icon key={i} color={selected ? props.iconColor : props.emptyIconColor}>
					{props.icon}
				</Icon>
			);
		}
	};

	render() {
		return (
			<Box width="100%">
				<RatingContainer hoverBg={this.props.hoverBg}>
					<Label>{this.props.label}</Label>
					<Flex>{this.icons}</Flex>
				</RatingContainer>
			</Box>
		);
	}
}

export default Rating;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ PropTypes & DefaultProps ] ...>>>
///////////////////////////////////////////////////

Rating.propTypes = {
	label: PropTypes.string.isRequired,
	rating: PropTypes.number,
	maxRating: PropTypes.number,
	icon: PropTypes.string,
	iconColor: PropTypes.string,
	emptyIconColor: PropTypes.string,
	hoverBg: PropTypes.string,
	// fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
};

Rating.defaultProps = {
	maxRating: 5,
	icon: "★",
	iconColor: "orange",
	emptyIconColor: "#666",
	// fontSize: 5
};
