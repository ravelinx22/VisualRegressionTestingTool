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

	renderDimensionDifferenceWidth() {
		let data =	{
			misMatchPercentage : 100, // %
			isSameDimensions: true, // or false
			dimensionDifference: { width: 0, height: -1  }, // defined if dimensions are not the same
			getImageDataUrl: function(){}		
		}
		let difference = data.dimensionDifference;
		if(difference && difference.width != undefined) {
			return(
				<div><strong>Width Difference:</strong> {difference.width}</div>
			);
		}
		return null;
	}

	renderDimensionDifferenceHeight() {
		let data =	{
			misMatchPercentage : 100, // %
			isSameDimensions: true, // or false
			dimensionDifference: { width: 0, height: -1  }, // defined if dimensions are not the same
			getImageDataUrl: function(){}		
		}
		let difference = data.dimensionDifference;
		if(difference && difference.height != undefined) {
			return(
				<div><strong>Height Difference:</strong> {difference.height}</div>
			);
		}
		return null;
	}

	render() {
		let data =	{
			misMatchPercentage : 100, // %
			isSameDimensions: true, // or false
			dimensionDifference: { width: 0, height: -1  }, // defined if dimensions are not the same
			getImageDataUrl: function(){}		
		}

		return (
			<Row className="reportRow">
				<Col className="dateEntry" md="2">Domingo, 16 de septiembre de 2018</Col>
				<Col className="imageEntry" md="2">
					<img className="testImage" src="./img/tests/firstPhoto.png" alt="test"/>
				</Col>
				<Col className="imageEntry" md="2">
					<img className="testImage" src="./img/tests/secondPhoto.png" alt="test"/>
				</Col>
				<Col className="imageEntry" md="2">
					<img className="testImage" src="./img/tests/diff.png" alt="test"/>
				</Col>
				<Col className="infoEntry" md="2">
					<div><strong>Mismatch Percentage:</strong> {data.misMatchPercentage}</div>
					<div><strong>Is Same Dimensions:</strong> {data.isSameDimensions + ""}</div>
					{this.renderDimensionDifferenceWidth()}
					{this.renderDimensionDifferenceHeight()}
				</Col>
			</Row>
		);
	}
}
