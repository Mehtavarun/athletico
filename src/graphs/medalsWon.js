import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Data from '../datasets/participants.json';
import { ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import '../css/participants.css';

export default class MedalsWon extends Component{

	constructor(props){
		super();
		this.state={
			title: '',
			countries: [],
			graphData: []
		};
	}

	mergeData(i, data){
		// setting undefined values to 0 for graph data
		(!data.Gold) ? data.Gold = 0 : data.Gold = data.Gold;
		(!data.Silver) ? data.Silver = 0 : data.Silver = data.Silver;
		(!data.Bronze) ? data.Bronze = 0 : data.Bronze = data.Bronze;
		this.setState(prevState=>({
			graphData: [...prevState.graphData, data]
		}));
	}

	render(){
		return(
			<div>
				<h2>Medals for 5 Countries</h2>
				<h3> To compare Countries, select countries again and again</h3>

				<CountryDropdown graphData = {this.mergeData.bind(this, 0)}/>

				<BarChart width={1000} height={450} data={this.state.graphData}
		            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
			       <CartesianGrid strokeDashdataaay="3 3"/>
			       <XAxis dataKey="Country"/>
			       <YAxis/>
			       <Tooltip/>
			       <Legend />
			       <Bar dataKey="Gold" fill="#ffc658"/>
			       <Bar dataKey="Silver" fill="#82ca9d" />
			       <Bar dataKey="Bronze" fill="#8884d8" />
		      </BarChart>
			</div>
		);
	}
}

// DropDown list for data
class CountryDropdown extends Component{
	constructor(props){
		super();
		this.state={
			title: '',
			countries: []
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