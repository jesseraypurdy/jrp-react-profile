import { CenterWidth } from "GlobalStyles";
import Rating from "components/Rating";
import Section from "components/Section";
import SortedColumns from "components/SortedColumns";
import { Heading } from "components/Text";
import { Flex } from "kaila/Kaila";
import { PureComponent } from "react";
import Fade from "react-reveal/Fade";
import { withTheme } from "styled-components";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const columnWidth = [ 1, null, 9 / 20 ];
const hoverBg = "rgba(0, 0, 0, 0.05)";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Subcomponents ] ...>>>
///////////////////////////////////////////////////

const SkillContainer = ( props ) => (
	<Fade bottom>
		<Flex flexDirection="column" width={CenterWidth}>
			<Heading variant="h3" color="accent1" gutter>
				{props.title}
			</Heading>
			<SortedColumns
				first="rating"
				second="label"
				firstAscending={false}
				secondAscending={true}
				columnWidth={columnWidth}
			>
				{props.children}
			</SortedColumns>
		</Flex>
	</Fade>
);

const skillRating = ( props ) => (
	<Rating
		iconColor={props.theme.colors.main}
		emptyIconColor={props.theme.colors.text1}
		hoverBg={hoverBg}
		{...props}
	>
		{props.children}
	</Rating>
);

const SkillRating = withTheme( skillRating );

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class SkillsSection extends PureComponent {
	render () {
		return (
			<Section title="Skills" gutterTop gutterBottom>
				<SkillContainer title="Programming / Languages">
					<SkillRating label="C#/.Net" rating={5} />
					<SkillRating label="JavaScript/Typescript" rating={5} />
					<SkillRating label="Java" rating={4} />
					<SkillRating label="Python" rating={3} />
					<SkillRating label="PHP" rating={4} />
					<SkillRating label="HaXe" rating={5} />
					<SkillRating label="C" rating={2} />
					<SkillRating label="C++" rating={1} />
					<SkillRating label="SQL Server" rating={3} />
					<SkillRating label="Lua" rating={3} />
					<SkillRating label="HTML/CSS" rating={2} />
				</SkillContainer>

				<br />

				<SkillContainer title="Frameworks / Tools">
					<SkillRating label="Locust" rating={5} />
					<SkillRating label="Cucumber-js/Gherkin" rating={4} />
					<SkillRating label="Pytest / Tavern" rating={2} />
					<SkillRating label="NUnit" rating={4} />
					<SkillRating label="JUnit" rating={4} />
					<SkillRating label="ASP.Net" rating={3} />
					<SkillRating label="React" rating={4} />
					<SkillRating label="Apigee" rating={4} />
					<SkillRating label="Git" rating={4} />
				</SkillContainer>

				<br />

				<SkillContainer title="Infrastructure / Cloud">
					<SkillRating label="Octopus Deploy" rating={5} />
					<SkillRating label="Gitlab CI/CD" rating={3} />
					<SkillRating label="AWS (in general)" rating={2} />
				</SkillContainer>

				<br />

				<SkillContainer title="Miscellaneous">
					<SkillRating label="German" rating={5} />
					<SkillRating label="English" rating={5} />
					<SkillRating label="Problem Solving" rating={5} />
					<SkillRating label="Agile - Scrum" rating={4} />
					<SkillRating label="Agile - Kanban" rating={5} />
					<SkillRating label="Teamwork" rating={5} />
				</SkillContainer>

			</Section>
		);
	}
}

export default SkillsSection;
