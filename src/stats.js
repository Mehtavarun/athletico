import React, { Component } from 'react';
import Participants from './graphs/participants';
import SexRatio from './graphs/sexRatio';
import MedalsWon from './graphs/medalsWon';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import './css/stats.css';

export default class Stats extends Component{

	render(){
		return (
			<div>
				<PageHeader className = "pageHeader">
					Olympics Statistics
				</PageHeader>
				<Grid>
					<Row>
						<SexRatio/>
					</Row>
					<hr/>
					<Row>
						<Participants/>
					</Row>
					<hr/>
					<Row>
						<MedalsWon/>
					</Row>
				</Grid>
			</div>
		)
	}
}