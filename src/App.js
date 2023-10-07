import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme, Breakpoints } from "./GlobalStyles";
import Layout from "./Layout";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			breakpoint: null
		};
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		let w = window.innerWidth;
		let h = window.innerHeight;
		let b = Breakpoints.length - 1;
		for (let i = 0; i < Breakpoints.length; i++) {
			if (w < Breakpoints[i]) {
				b = i;
				break;
			}
		}

		this.setState({
			windowWidth: w,
			windowHeight: h,
			breakpoint: b
		});
	};

	render() {
		return (
			<React.Fragment>
				<ThemeProvider theme={Theme}>
					<Layout appState={this.state} />
				</ThemeProvider>
				<GlobalStyle />
			</React.Fragment>
		);
	}
}

export default App;
