import React, { Component } from "react";
import { throttle } from "lodash";
import * as Scroll from "react-scroll";

import NavBar from "components/NavBar";

import GreetingSection from "sections/GreetingSection.js";
import SkillsSection from "sections/SkillsSection.js";
import WorkHistorySection from "sections/WorkHistorySection.js"
import EducationSection from "sections/EducationSection.js";
import ProjectsSection from "sections/ProjectsSection.js";
import ContactSection from "sections/ContactSection.js";
import BannerSection from "sections/BannerSection.js";
import QuoteSection from "sections/QuoteSection.js";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Constants ] ...>>>
///////////////////////////////////////////////////

const scrollDuration = 800;
const navBarHeight = 50;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Sub Components ] ...>>>
///////////////////////////////////////////////////

const FeynmannQuote = (props) => (
	<QuoteSection author="Richard Feynmann">
		The first principle is that you must not fool yourself and you are the
		easiest person to fool.
	</QuoteSection>
);

const BellQuote = (props) => (
	<QuoteSection author="Daniel Bell">
		Technology, like art, is a soaring exercise of the human imagination.
	</QuoteSection>
);

const JobsQuote = (props) => (
	<QuoteSection author="Steve Jobs">
		It's not a faith in technology. It's faith in people.
	</QuoteSection>
);

const PratchettQuote = (props) => (
	<QuoteSection author="Terry Pratchett">
		Logic is a wonderful thing but doesn't always beat actual thought.
	</QuoteSection>
);

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Layout Class ] ...>>>
///////////////////////////////////////////////////

class Layout extends Component {
	state = {
		currentId: "home",
		layout: "default"
	};

	constructor(props) {
		super(props);

		// Using refs here, as it seems to be an
		// acceptable use case.
		this.home = React.createRef();
		this.skills = React.createRef();
		this.work = React.createRef();
		this.projects = React.createRef();
		this.education = React.createRef();
		this.contact = React.createRef();

		this.sections = [
			this.home,
			this.skills,
			this.work,
			this.projects,
			this.education,
			this.contact
		];
	}

	componentDidMount() {
		// throttled for performance increase (especially on old ipads/phones).
		window.addEventListener("scroll", throttle(this.handleScroll, 100));
		this.setSection(this.home);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	// Wrapping in case I need to add some kind of
	// section change logic later on.
	setSection = (section) => {
		this.setState({
			currentId: section.current.id
		});
	};

	// Not the best way to do this,
	// but it works for now.
	handleScroll = () => {
		var iRef = 0;
		for (let i = 0; i < this.sections.length; i++) {
			var rect = this.sections[i].current.getBoundingClientRect(); // Could cache this on update
			var bottom = rect.bottom + window.scrollY - navBarHeight;
			if (window.pageYOffset <= bottom) {
				iRef = i;
				break;
			}
		}

		if (this.sections[iRef].current.id !== this.state.currentId) {
			this.setSection(this.sections[iRef]);
		}
	};

	scrollTo = (target) => {
		Scroll.scroller.scrollTo(target, {
			duration: scrollDuration,
			delay: 0,
			smooth: "easeInOutQuart"
		});
	};

	render() {
		return (
			<div>
				<BannerSection height={"100vh"} scrollTo={this.scrollTo} />
				<NavBar
					current={this.state.currentId}
					scrollTo={this.scrollTo}
					height={navBarHeight}
				/>
				<section id="home" ref={this.home}>
					<GreetingSection height={["fit-content", null, "100vh"]} />
				</section>
				<FeynmannQuote />
				<section id="skills" ref={this.skills}>
					<SkillsSection />
				</section>
				<JobsQuote />
				<section id="work" ref={this.work}>
					<WorkHistorySection />
				</section>
				<PratchettQuote />
				<section id="projects" ref={this.projects}>
					<ProjectsSection />
				</section>
				<BellQuote />
				<section id="education" ref={this.education}>
					<EducationSection />
				</section>
				<section id="contact" ref={this.contact}>
					<ContactSection />
				</section>
			</div>
		);
	}
}

export default Layout;
