import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card';

export default class App extends Component {
	state = {
		hello: 'world',
		data: [],
		display: []
	};

	componentDidMount() {
		axios.get('/items/?page=1&amt=16').then(data => {
			this.setState({
				data: data.data,
				display: [data.data[0], data.data[1], data.data[2], data.data[3]]
			});
		});
	}
	leftArrow() {}
	rightArrow() {
		this.setState({
			display: []
		});
	}
	render() {
		let carousel = <div>Loading</div>;
		if (this.state.display.length) {
			carousel = this.state.display.map(data => (
				<Card data={data} key={data.uuid} />
			));
		}
		return (
			<div>
				<h3>Top recomendations for you</h3>
				<div className="carousel">{carousel}</div>
			</div>
		);
	}
}
