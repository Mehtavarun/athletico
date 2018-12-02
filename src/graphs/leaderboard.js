import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Data from '../datasets/leaderboardMVP.json';

export default class Age extends Component{

	constructor(props){
		super();
		this.state={
			graphData: []
		};
	}

	componentDidMount(){
		var leaders = [];
		for(var k in Data){
			if(Data[k].Medal.Gold === 0 &&
				Data[k].Medal.Silver === 0 &&
				Data[k].Medal.Bronze === 0) continue;
			
			var sum = Data[k].Medal.Gold*30 + Data[k].Medal.Silver*20 + Data[k].Medal.Bronze*10;
			if(sum>150){
				leaders.push({
					name: k,
					score: sum
				});
			}
		}

		this.setState({
			graphData: leaders
		});
	}

	render(){
		return(
			<div>
				<h2>LeaderBoard</h2><br/>
				<LineChart width={1000} height={450} data={this.state.graphData}
            		margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			       <XAxis dataKey="name"/>
			       <YAxis/>
			       <CartesianGrid strokeDasharray="1 1"/>
			       <Tooltip/>
			       <Legend />
			       <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{r: 8}}/>
		      	</LineChart>
			</div>
		);
	}
}