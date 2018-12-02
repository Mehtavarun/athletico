import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Data from '../datasets/sexRatio.json';

export default class SexRatio extends Component{

	render(){
		return(
			<div>
				<h2>Male-Female Growth</h2>
				<AreaChart width={1000} height={450} data={Data}
				    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
					<CartesianGrid strokeDasharray="2 2"/>
					<XAxis dataKey="year"/>
					<YAxis/>
					<Tooltip/>
					<Area type='monotone' dataKey='Female' stackId="1" stroke='#ffc658' fill='#ffc658' />
					<Area type='monotone' dataKey='Male' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
				</AreaChart>
			</div>
		);
	}
}
