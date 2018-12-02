import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Data from '../datasets/participants.json';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import '../css/participants.css';

export default class Participants extends Component{

	constructor(props){
		super();
		this.state={
			title: '',
			countries: [],
			graphData: []
		};
	}

	componentDidMount(){
		const Regions = require('../datasets/noc_regions.json')
		Regions.map((data)=>{
			this.setState(prevState=>({
				countries: [...prevState.countries, data.region]
			}));
		});
	}

	getSelected(i){
		var arr = [];
		for(var j=0; j<Data.length; j++){
			if(Data[j].country === this.state.countries[i]){
				for(var k in Data[j].year){
					arr.push({year: k, participants: Data[j].year[k]});
				}
			}
		}
		this.setState({ 
			graphData: arr,
			title: this.state.countries[i]
		});
	}

	render(){
		return(
			<div>
				<h2>Participants from a Country</h2>
				<ButtonToolbar>
				    <DropdownButton
				      bsSize="large"
				      title={(this.state.title)? this.state.title : "Select Country"}
				      id="dropdown-size-large"
				    >
				      {
				      	this.state.countries.map((country, i)=>
				    	  	<MenuItem key={i} eventKey={i} onSelect={this.getSelected.bind(this, i)}>{country}</MenuItem>
					    )
				      }
				    </DropdownButton>
				</ButtonToolbar>
				<br/>

				<BarChart width={1000} height={450} data={this.state.graphData}
		            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			       <CartesianGrid strokeDasharray="1 1"/>
			       <XAxis dataKey="year"/>
			       <YAxis/>
			       <Tooltip/>
			       <Legend />
			       <Bar dataKey="participants" fill="#8884d8" />
		      </BarChart>
			</div>
		);
	}
}
