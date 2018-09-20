import React from "react";
import "../styles/styles.css";

// Commonly used with containers
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ReportRow from "../components/report_row.jsx";

export default class TestContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.loadTests();
	}

	generateReport() {
		console.log("Will generate");
	}

	loadTests() {
		fetch("/api/tests")
			.then(results => {
				return results.json();
			}).then(data => {
				this.setState({
					data: data
				})
			});
	}

	renderRows() {
		return this.state.data.map((d) => {
			return <ReportRow data={d} />
		});
	}

	render() {
		return (
			<Container>
				<Button color="primary" className="btnGenerarReporte" onClick={this.generateReport.bind(this)}>Generar Reporte</Button>
				<Row className="table-header">
					<Col className="header" md={{size: 2, offset: 2}}>Imagen Base</Col>
					<Col className="header" md="2">Imagen Modificada</Col>
					<Col className="header" md="2">Diferencias</Col>
				</Row>
				{this.renderRows()}
			</Container>
		);
	}
}
