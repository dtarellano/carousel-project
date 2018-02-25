import React, { Component } from 'react';
import axios from 'axios';
import Carousel from './components/Carousel';

export default class App extends Component {
	state = {
		hello: 'world',
		data: [],
		display: []
	};
	constructor() {
		super();
		this.handleLike = this.handleLike.bind(this);
	}
	componentDidMount() {
		axios.get('/items/?page=1&amt=16').then(data => {
			this.setState({
				data: data.data,
				display: [data.data[0], data.data[1], data.data[2], data.data[3]],
				start: 0,
				sliceAt: 18
			});
		});
	}
	leftArrow() {
		if (this.state.start === 0) {
			this.setState({
				start: 12
			});
		} else {
			this.setState({
				start: this.state.start - 4
			});
		}
	}
	rightArrow() {
		if (this.state.start === 12) {
			this.setState({
				start: 0
			});
		} else {
			this.setState({
				start: this.state.start + 4
			});
		}
	}
	handleLike(id, index) {
		let data = this.state.data;
		let sliceAt = this.state.sliceAt;
		data.splice(index, 1);
		axios.get(`/items/?page=${sliceAt}&amt=1`).then(res => {
			let newItem = res.data[0];
			data.push(newItem);
			this.setState({
				data,
				sliceAt: sliceAt + 1
			});
		});
		console.log(data);
	}
	render() {
		let carousel = <div>Loading</div>;
		if (this.state.data.length) {
			carousel = <Carousel data={this.state.data} />;
		}
		return (
			<div>
				<h3>Top recomendations for you</h3>
				<Carousel
					data={this.state.data}
					start={this.state.start}
					handleLike={this.handleLike}
				/>
				<button onClick={() => this.leftArrow()}>Left</button>
				<button onClick={() => this.rightArrow()}>Right</button>
			</div>
		);
	}
}
