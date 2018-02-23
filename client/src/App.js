import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card';

export default class App extends Component {
	state = {
		hello: 'world',
		data: [],
		display: [],
		start
	};

	constructor() {
		super();
		const { data, display, start } = this.state;
	}

	componentDidMount() {
		axios.get('/items/?page=1&amt=16').then(data => {
			this.setState({
				data: data.data,
				display: [data.data[0], data.data[1], data.data[2], data.data[3]]
			});
		});
	}

	leftArrow() {
		let start = start;
		if (start <= 0) {
			start = data.length - 4;
			this.setState(state => {
				let display = [];
				for (let i = start; i < start + 4; i++) {
					display.push(data[i]);
				}
				return {
					display,
					start
				};
			});
		} else {
			this.setState(state => {
				let display = [];
				start = start - 4;
				for (let i = start; i < start + 4; i++) {
					display.push(data[i]);
				}
				return {
					display,
					start
				};
			});
		}
	}

	rightArrow() {
		console.log('right arrow clicked');
		if (this.state.start >= 15) {
			this.setState({ start: 0 });
		} else {
			this.setState({ start: this.state.start + 4 });
		}
	}

	render() {
		let carousel = <div>Loading</div>;
		if (this.state.data.length) {
			carousel = this.state.display.map(data => (
				<Card data={data} key={data.uuid} />
			));
		}
		return (
			<div>
				<h3>Top recomendations for you</h3>
				<div className="carousel">{carousel}</div>
				<button onClick={() => this.leftArrow()}>Left</button>
				<button onClick={() => this.rightArrow()}>Right</button>
			</div>
		);
	}
}
