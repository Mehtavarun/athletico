import React, { Component } from 'react';
import Participants from './graphs/participants';
import SexRatio from './graphs/sexRatio';
import MedalsWon from './graphs/medalsWon';
import Leaderboard from './graphs/leaderboard';
import Age from './graphs/age';
import Season from './graphs/season';
import Height from './graphs/height';
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
					<Row>
						<Age/>
					</Row>
					<Row>
						<Leaderboard/>
					</Row>
					<Row>
						<Height/>
					</Row>
					<Row>
						<Season/>
					</Row>
				</Grid>
			</div>
		)
	}
}