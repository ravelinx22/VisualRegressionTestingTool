import React, { Component  } from "react";
import { Container, Row, Col, Button } from "reactstrap";

export default class ReportRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<Row className="reportRow">
				<Col className="dateEntry" md="2">Domingo, 16 de septiembre de 2018</Col>
				<Col className="imageEntry" md="2">
					<img className="testImage" src="http://www.nationalgeographic.it/images/2017/02/17/121845769-5cd70c95-e40c-4fb6-99fa-955e334fa62b.jpg" alt="test"/>
				</Col>
				<Col className="imageEntry" md="2">
					<img className="testImage" src="http://www.nationalgeographic.it/images/2017/02/17/121845769-5cd70c95-e40c-4fb6-99fa-955e334fa62b.jpg" alt="test"/>
				</Col>
				<Col className="imageEntry" md="2">
					<img className="testImage" src="http://www.nationalgeographic.it/images/2017/02/17/121845769-5cd70c95-e40c-4fb6-99fa-955e334fa62b.jpg" alt="test"/>
				</Col>
				<Col className="infoEntry" md="2">
					Informacion importante
				</Col>
			</Row>
		);
	}
}
