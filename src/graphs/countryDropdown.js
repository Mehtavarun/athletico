import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Data from '../datasets/participants.json';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './participants.css';

export default class CountryDropdown extends Component{

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
		var obj = {};
		for(var j=0; j<Data.length; j++){
			if(Data[j].country === this.state.countries[i]){
				obj.Country = this.state.countries[i];
				obj.Gold = Data[j].medal.gold;
				obj.Silver = Data[j].medal.silver;
				obj.Bronze = Data[j].medal.bronze;
			}
		}
		this.props.graphData(obj);
		this.setState({ 
			title: this.state.countries[i]
		});
	}

	render(){
		return(
			<div>
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
			</div>
		);
	}
}
