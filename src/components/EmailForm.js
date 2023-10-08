import { ButtonTrans } from "components/Buttons";
import { Label } from "components/Text";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { fontSize } from "styled-system";

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Styles ] ...>>>
///////////////////////////////////////////////////

const FormStyle = styled.div`
	${fontSize};
	font-family: ${(props) => props.theme.fonts.input};

	display: inline-block;
	box-sizing: border-box;
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	border-width: 4px;
	border-radius: 15px;
	border-style: solid;
	border-color: white;
	color: white;
	background-color: rgba(0, 0, 0, 0.3);

	::placeholder {
		color: white;
		opacity: 0.6;
	}

	:focus {
		outline: none;
		box-shadow: 0 0 6px white;
	}

	resize: none;
`;

FormStyle.defaultProps = {
	fontSize: ["1.15em", "1.25em"],
};

const SubmitInput = styled(ButtonTrans)`
	width: 100%;
`;

const EmailLabel = styled(Label)`
	color: white;
	text-align: left;
	font-weight: bold;
`;

//////////////////////////////////////////////////////////////////////////////////////
// <<<... [ Class ] ...>>>
///////////////////////////////////////////////////

class EmailForm extends PureComponent {
	// React design philosphy would frown on my usage of refs here,
	// but this is the cleaner (and probably more performant) way to
	// handle such a simple form (imo). Using controlled components seems
	// incredibly contrived for something so simple. So unless I
	// am otherwise persuaded, refs it is for now.

	// For any potential future employers sniffing through my code:
	// I'd obviously stick to company policy on anything like this
	// :P

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.form = React.createRef();
		this.name = React.createRef();
		this.message = React.createRef();
	}

	handleSubmit(e) {
		e.preventDefault();

		const name = this.name.current.value;
		const message = this.message.current.value;
		const subject = `From '${name}' via react site`;

		window.open(`mailto:jrayp.code@gmail.com?subject=${subject}&body=${message}`);
		this.props.submitCallback();
	}

	render() {
		return (
			<form id="email-form" ref={this.form} onSubmit={this.handleSubmit}>
				<EmailLabel htmlFor="name">Name</EmailLabel>
				<FormStyle as="input" id="name" ref={this.name} type="text" placeholder="Your name..." required />
				<EmailLabel htmlFor="message">Message</EmailLabel>
				<FormStyle
					as="textarea"
					id="message"
					ref={this.message}
					cols="60"
					rows="8"
					placeholder="Enter a message..."
					required
				/>
				<SubmitInput as="input" type="submit" value="Submit" mt={[3]} />
			</form>
		);
	}
}

export default EmailForm;
