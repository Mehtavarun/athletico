import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Data from '../datasets/events.json';
 
export default class Season extends Component{

	constructor(props){
		super();
		this.state={
			graphData: []
		}
	}

	componentDidMount(){
		var arr = [];
		for(var season in Data){
			for(var k in Data[season]){
				arr.push({
					season: season,
					event: k,
					num: Data[season][k]
				})
			}
		}
		this.setState({
			graphData: arr 
		})
	}

	render(){
		return(
			<div>
				<h2>Event wise Comparison</h2><br/>
				<BarChart width={1000} height={400} data={this.state.graphData}
		            margin={{top: 5, right: 30, left: 20, bottom: 10}}>
			       <CartesianGrid strokeDasharray="3 3"/>
			       <XAxis dataKey="event"/>
			       <YAxis/>
			       <Tooltip/>
			       <Legend />
			       <Bar dataKey="num" fill="#8884d8" />
		      </BarChart>
		      <br/>
			</div>
		);
	}
}