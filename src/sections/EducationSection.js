import React, { PureComponent } from "react";
import Section from "components/Section";
import { HorizontalCard } from "components/Cards";
import { Box } from "kaila/Kaila";
import Fade from "react-reveal/Fade";
import kccLogo from "assets/kcc_logo.svg";
import uhLogo from "assets/manoa_logo.svg";


//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const padding = [4, 5];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class EducationSection extends PureComponent {
	render() {
		return (
			<Section title="Education" gutterTop gutterBottom>
				<Fade bottom>
					<Box pb={padding}>
						<HorizontalCard
							title="University of Hawaiʻi at Mānoa"
							subtitle="Bachelor of Science | Mathematics | 3.8 GPA"
							img={uhLogo}
						>
							After graduating at Kapiʻolani I immediatly enrolled
							in the University of Hawaii's mathematics program.
							Here I learned the skills necessary to understand
							and work with advanced concepts in mathematics. Some
							of the courses I took such as differential
							equations, linear algebra, and probability theory
							were mostly application based. Whereas others such
							as abstract algebra, real analysis, and topology
							were very heavily focused on theory and proofs. In
							the end the most important skill I learned in the
							persuit of this degree was to think analytically.
							Even in every day situations I often find myself
							“thinking like a mathematician.”
						</HorizontalCard>
					</Box>
				</Fade>
				<Fade bottom>
					<Box pt={padding}>
						<HorizontalCard
							title="Kapiʻolani CC"
							subtitle="Associate of Science | Natural Sciences | 4.0 GPA"
							img={kccLogo}
						>
							I enrolled in KCC with such a lack of knowledge in
							math that I was required to take introductory,
							pre-college-level algebra courses. However, after
							overcoming my fear of mathematics and working my way
							up to the calculus level, I was able to enter the
							schools exceptional STEM program. There I took part
							in physics, chemistry, ICS, and biology courses.
							Kapiʻolani's amazing faculty promoted in me the idea
							that I could excel in anything I put my mind to,
							including my former nemesis mathematics which I
							ultimatly, and perhaps ironically, decided to major
							in.
						</HorizontalCard>
					</Box>
				</Fade>
			</Section>
		);
	}
}

export default EducationSection;
