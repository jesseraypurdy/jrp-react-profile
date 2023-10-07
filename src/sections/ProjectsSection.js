import React, { PureComponent } from "react";
import { HorizontalCard } from "components/Cards";
import Section from "components/Section";
import { Box, Link } from "kaila/Kaila";
import Fade from "react-reveal/Fade";
import moku_img from "assets/moku.png";
import resume_img from "assets/site.png";
import tetris_img from "assets/tetris.png";
import mockatm_img from "assets/mockatm.png";
import hospitalManager_img from "assets/hospitalmanager.png";
// import typeScriptRoguelike_img from "assets/typeScriptRoguelike.png";


//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

// const typeScriptRoguelike_page_url = "https://jrayp.github.io/TypeScriptRoguelike/";
// const typeScriptRoguelike_src_url = "https://github.com/Jrayp/TypeScriptRoguelike";
const hospitalManager_url = "https://github.com/Jrayp/HospitalManager";
const mockatm_url = "https://github.com/Jrayp/Mock-ATM";
const moku_url = "https://defold.com/assets/moku/";
const tetris_url = "https://github.com/Jrayp/Neztris";
const styledSystemURL = "https://github.com/jxnblk/styled-system";
const padding = [4, 5];

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Links ] ...>>>
///////////////////////////////////////////////////

// I could have created a generalized solution for this, and probably should

// const typeScriptRoguelikePageLink = (
// 	<Link href={typeScriptRoguelike_page_url} color="darkblue">
// 		here
// 	</Link>
// );

// const typeScriptRoguelikeSrcLink = (
// 	<Link href={typeScriptRoguelike_src_url} color="darkblue">
// 		roguelike engine
// 	</Link>
// );

const hospitalManagerLink = (
	<Link href={hospitalManager_url} color="darkblue">
		Hospital Manager
	</Link>
);

const mockatmLink = (
	<Link href={mockatm_url} color="darkblue">
		here
	</Link>
);

const neztrisLink = (
	<Link href={tetris_url} color="darkblue">
		here
	</Link>
);

const mokuLink = (
	<Link href={moku_url} color="darkblue">
		link
	</Link>
);

const styledSystemLink = (
	<Link href={styledSystemURL} color="darkblue">
		styled-system
	</Link>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class ProjectsSection extends PureComponent {
	render() {
		return (
			<Section title="Personal Projects" gutterTop gutterBottom>

				{/* <Fade bottom>
					<Box pb={padding}>
						<HorizontalCard
							title="TypeScript Roguelike - WIP"
							subtitle="GameDev | TypeScript | 2021"
							img={typeScriptRoguelike_img}
							link={typeScriptRoguelikePageLink}
						>
							When I want to learn or practice something I typically do so by writing
							something game related. Game programming allows me to really touch on many
							areas of the tech in question, and most importantly: It's very fun! I'm currently
							in the process of building a TypeScript powered {typeScriptRoguelikeSrcLink}{" "}
							built on top of	the	Rot.js framework. It is very much a work in progress and a bit
							of a mess now, but for a small weekend project, I'm not too fussed 😋. Run into some walls
							{" "}{typeScriptRoguelikePageLink}.
						</HorizontalCard>
					</Box>
				</Fade> */}

				<Fade bottom>
					<Box pb={padding}>
						<HorizontalCard
							title="Hospital Manager"
							subtitle="C#/.Net | WinForms | SQL | 2019"
							img={hospitalManager_img}
							link={hospitalManager_url}
						>
							{hospitalManagerLink} is a much more advanced lessson in SQL Server than
							Mock-ATM. This time I actually added some real functionality and
							created a more interesting database that doesn't just act as a
							container, but actually abstracts the relations between the patients
							and doctors datasets. The app handles sorting and listing of patients and doctors,
							displays and updates their relationships, can add and update patients,
							and has a neat-o patient filter because why not.
						</HorizontalCard>
					</Box>
				</Fade>

				<Fade bottom>
					<Box pb={padding}>
						<HorizontalCard
							title="Mock-ATM"
							subtitle="C#/.Net | WinForms | SQL | 2019"
							img={mockatm_img}
							link={mockatm_url}
						>
							Ok ok.. You all want me to know some SQL, I get it. Mock-ATM
							is a simple ATM simulator that I developed as a means
							to learn some basic SQL Server. It reads from, and updates a
							persistent database, and I have to admit.. I should have
							started working with SQL a long time ago. I'm obviously just
							scratching the surface with this, but it's a start. Oh, as a
							side I also got to use Winforms (finally). Check it out{" "}
							{mockatmLink}.
						</HorizontalCard>
					</Box>
				</Fade>

				<Fade bottom>
					<Box pb={padding}>
						<HorizontalCard
							title="Neztris"
							subtitle="GameDev | C#/.Net | Monogame with Nez | 2018"
							img={tetris_img}
							link={tetris_url}
						>
							I've been wanting to try out Monogame with Nez and
							decided a simple game would not only allow me to get
							my hands dirty with the framework and engine, but
							would also act as a way to showcase my proficiency
							with C#/.Net. I wrote Neztris over the course of a
							few days without the use of guides or tutorials,
							while learning how Monogame and Nez work. With that
							said this isn't a masterpiece. However, it is a
							functional and even playable Tetris clone. So{" "}
							{neztrisLink} you have it!
						</HorizontalCard>
					</Box>
				</Fade>

				<Fade bottom>
					<Box py={padding}>
						<HorizontalCard
							title="Digital Resume"
							subtitle="WebDev | React | Visual Design | 2018"
							img={resume_img}
							link={tetris_url}
						>
							This site is my first web project. The development
							process allowed me to get familiar with HTML5, CSS,
							Javascript, and even some visual design.
							Additionally, I learned about the deployment process
							using Heroku. The front-end is built on top of
							React, and I handled the (small) back-end with
							Node.js and Express. For styling I opted to use
							styled-components and the fantastic{" "}
							{styledSystemLink} package. This project has
							taught me a LOT about web development. I'm happy to
							have started, and finished it. 😊

							Update: I have since moved this project to GitHub
							Pages for ease of maintenance. The above still applies
							though.
						</HorizontalCard>
					</Box>
				</Fade>

				<Fade bottom>
					<Box pt={padding}>
						<HorizontalCard
							title="Moku"
							subtitle="GameDev | Lua | AI | 2018"
							img={moku_img}
							link={moku_url}
						>
							Moku is an open source Map utility/module for the
							Defold game engine. It was written as an exercise in
							Lua, and provides out-of-the-box autotiling, as well
							as powerful and efficient pathfinding. Complete
							documentation is available. Moku was featured by
							both the makers of Defold (King Games), as well as
							Games From Scratch. Follow the {mokuLink} for a
							demo!
						</HorizontalCard>
					</Box>
				</Fade>
			</Section>
		);
	}
}

export default ProjectsSection;
