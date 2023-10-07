import { Box, Flex } from "kaila/Kaila";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class SortedColumns extends PureComponent {
	constructor(props) {
		super(props);

		// We sort the children at instantiation, to avoid performance issues.
		// TODO: Add escape hatch for reordering after creation. Prob by using states.
		this.children1 = React.Children.toArray(this.props.children);
		this.children1.sort(this.sort);

		// Splice the children array to handle responsiveness during render.
		this.children2 = this.children1.splice(Math.ceil(this.children1.length / 2));
	}

	column = (children) => {
		return (
			<Flex flexDirection="column" alignItems="center" justifyContent="center">
				{children}
			</Flex>
		);
	};

	sort = (a, b) => {
		const first = this.props.first;
		const second = this.props.second;
		const firstAscending = this.props.firstAscending === true ? 1 : -1;
		const secondAscending = this.props.secondAscending === true ? 1 : -1;
		const aFirst = a.props[first];
		const bFirst = b.props[first];
		const aSecond = a.props[second];
		const bSecond = b.props[second];

		if (aFirst === bFirst) {
			return aSecond < bSecond ? -secondAscending : aSecond > bSecond ? secondAscending : 0;
		} else {
			return aFirst > bFirst ? firstAscending : -firstAscending;
		}
	};

	render() {
		const columnWidth = this.props.columnWidth;
		return (
			<Box>
				<Flex alignItems="flex-start" justifyContent="space-between" flexWrap="wrap">
					<Box width={columnWidth}>{this.column(this.children1)}</Box>
					<Box width={columnWidth}>{this.column(this.children2)}</Box>
				</Flex>
			</Box>
		);
	}
}

export default SortedColumns;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ PropTypes & DefaultProps ] ...>>>
///////////////////////////////////////////////////

SortedColumns.propTypes = {
	first: PropTypes.string,
	second: PropTypes.string,
	firstAscending: PropTypes.bool,
	secondAscending: PropTypes.bool,
	columnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

SortedColumns.defaultProps = {
	firstAscending: true,
	secondAscending: true,
	columnWidth: 1,
};
