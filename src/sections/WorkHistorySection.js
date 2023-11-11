import fergusLogo from "assets/fergus_logo.png";
import paymarkLogo from "assets/paymark_logo.png";
import worldlineLogo from "assets/worldline_logo.png";
import { HorizontalCard } from "components/Cards";
import Section from "components/Section";
import { Box } from "kaila/Kaila";
import { PureComponent } from "react";
import Fade from "react-reveal/Fade";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const padding = [4, 5];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class WorkHistorySection extends PureComponent {
	render() {
		return (
			<Section title="Work History" gutterTop gutterBottom>
				<Fade bottom>
					<Box pb={padding}>
						<HorizontalCard
							title="Worldline NZ - Auckland, NZ"
							subtitle="Lead .Net Engineer | July 2022 - present"
							img={worldlineLogo}
						>
							I returned to Worldline NZ (formerly Paymark) to begin my first formal Leadership role. In
							this position I balance people, and technical leadership while working as a hands on
							engineer. My day-to-day includes, but is not limited to one-on-ones, mentoring, maintaining
							and building new features for the Click platform, offering high-level technical guidance,
							planning, and discussing process improvements.
						</HorizontalCard>
					</Box>
				</Fade>
				<Fade bottom>
					<Box pb={padding}>
						<HorizontalCard
							title="Fergus Software - Auckland, NZ"
							subtitle="Senior Software Engineer | Nov 2021 - July  2022"
							img={fergusLogo}
						>
							Fergus is New Zealand's #1 Job managment software. Over my time at Fergus I helped maintain
							and build features for the platform, both front- and back-end. The primary technologies I
							used here were Javascript/Typescript with React, PHP 7, MySQL as well as some AWS services.
							I helped lead a team through timely completion of a critical piece of work, and also helped
							lead the same team through an in-depth security review of the entire system.
						</HorizontalCard>
					</Box>
				</Fade>
				<Fade bottom>
					<Box pb={padding}>
						<HorizontalCard
							title="Paymark - Auckland, NZ"
							subtitle=".Net Software Engineer | Jan 2020 - Nov 2021"
							img={paymarkLogo}
						>
							Paymark is New Zealand's leading payments innovation company. My responsibilities as a
							software engineer included, but were not limited to: Front and backend feature development
							and maintenance of the monolithic Click web payments product. Proxy and Java microservice
							maintenance. Automated test suite development, including both UI automation and performance
							testing. Rotational on-call duties, and production deployments. I was in a fairly large
							Scrum team and eventually led a platform improvement initiative.
						</HorizontalCard>
					</Box>
				</Fade>
			</Section>
		);
	}
}

export default WorkHistorySection;
