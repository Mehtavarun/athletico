import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Data from '../datasets/height.json';

export default class Height extends Component{

	constructor(props){
		super();
		this.state={
			graphData: []
		};
	}

	componentDidMount(){
		var arr = [];
		for(var k in Data){
			arr.push({
				height: k,
				num: Data[k]
			})
		}
		this.setState({
			graphData: arr
		})
	}

	render(){
		return(
			<div>
				<h2>Height Variation</h2>
				<BarChart width={1000} height={500} data={this.state.graphData}
		            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			       <CartesianGrid strokeDasharray="1 1"/>
			       <XAxis dataKey="height"/>
			       <YAxis/>
			       <Tooltip/>
			       <Legend />
			       <Bar dataKey="num" fill="#ffcc80" />
			      </BarChart>
			</div>
		);
	}
}