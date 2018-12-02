import React, { Component } from 'react';
import { RadialBar, RadialBarChart, Legend } from 'recharts';
import Data from '../datasets/age.json';

const style = {
  	top: 0,
  	left: 350,
  	lineHeight: '24px'
  };

export default class Age extends Component{

	constructor(props){
		super();
		this.state={
			graphData: []
		};
	}

	componentDidMount(){
		var arr = [];
		var sum = 0;
		var i=0;
		var count = 0;
		for(var k in Data){
			count++;
			if(count > 53){
				arr[i] = sum;
			}
			else if(count%9 === 0){
				arr[i++] = sum;
				sum = 0;
			}
			sum += Data[k];
		}
		sum = arr.reduce((a,b) => a + b, 0);

		const data = [
	      {name: '10-18', fill: '#8884d8', avg: arr[0]},
	      {name: '19-27', fill: '#83a6ed', avg: arr[1]},
	      {name: '29-36', fill: '#8dd1e1', avg: arr[2]},
	      {name: '37-45', fill: '#82ca9d', avg: arr[3]},
	      {name: '46-54', fill: '#a4de6c', avg: arr[4]},
	      {name: '54+', fill: '#d0ed57', avg: arr[5]}
	    ];

		this.setState({
			graphData: data
		});
	}

	render(){
		return(
			<div>
				<h2>Age Group</h2><br/>
				<RadialBarChart 
					width={800} 
					height={450} 
					cx={180} 
					cy={180} 
					innerRadius={50} 
					outerRadius={180} 
					barSize={15} 
					data={this.state.graphData}>
			        
			        <RadialBar 
			        	minAngle={15} 
			        	label={{ position: 'insideStart', fill: '#000' }} 
			        	background 
			        	clockWise={true} 
			        	dataKey='avg'/>
			        
			        <Legend 
			        	iconSize={10} 
			        	width={160} 
			        	height={180} 
			        	layout='vertical' 
			        	verticalAlign='middle' 
			        	wrapperStyle={style}/>
		        </RadialBarChart>
			</div>
		);
	}
}