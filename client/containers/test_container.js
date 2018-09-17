import React from "react";
import "../styles/styles.css";

// Commonly used with containers
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class TestContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				Hello World
			</div>
		);
	}
}
