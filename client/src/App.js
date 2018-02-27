import React, { Component } from 'react';
import axios from 'axios';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import Carousel from './components/Carousel';
import IndexIndicator from './components/IndexIndicator';

export default class App extends Component {
	state = {
		hello: 'world',
		data: [],
		display: [],
		show: true,
		start: 0,
		indicator: 1
	};
	constructor() {
		super();
		this.handleLike = this.handleLike.bind(this);
		this.leftArrow = this.leftArrow.bind(this);
		this.rightArrow = this.rightArrow.bind(this);
	}
	componentDidMount() {
		axios.get('/items/?page=1&amt=16').then(data => {
			this.setState({
				data: data.data,
				display: [data.data[0], data.data[1], data.data[2], data.data[3]],
				sliceAt: 18
			});
		});
	}
	leftArrow() {
		console.log('left arrow');
		if (this.state.start === 0) {
			this.setState({
				start: 12,
				indicator: 4,
				show: !this.state.show
			});
		} else {
			this.setState({
				start: this.state.start - 4,
				indicator: this.state.indicator - 1,
				show: !this.state.show
			});
		}
	}
	rightArrow() {
		if (this.state.start === 12) {
			this.setState({
				start: 0,
				indicator: 1,
				show: !this.state.show
			});
		} else {
			this.setState({
				start: this.state.start + 4,
				indicator: this.state.indicator + 1,
				show: !this.state.show
			});
		}
	}
	handleLike(id, index) {
		let data = this.state.data;
		let sliceAt = this.state.sliceAt;
		data.splice(index, 1);
		axios.post(`/items/${id}`).then(res => {
			console.log(res);
			if (res.statusCode === 200) {
				axios.get(`/items/?page=${sliceAt}&amt=1`).then(res => {
					let newItem = res.data[0];
					data.push(newItem);
					this.setState({
						data,
						sliceAt: sliceAt + 1
					});
				});
			}
		});
	}
	render() {
		let carousel = <div>Loading</div>;
		if (this.state.data.length) {
			carousel = <Carousel data={this.state.data} />;
		}
		return (
			<div>
				<p className="title">Top recomendations for you</p>
				<IndexIndicator indicator={this.state.indicator} />

				<div className="container">
					<a className="left-arrow" onClick={() => this.leftArrow()}>
						<i className="material-icons">chevron_left</i>
					</a>
					<ReactCSSTransitionReplace
						transitionName="fade-wait"
						transitionEnterTimeout={1000}
						transitionLeaveTimeout={400}
					>
						<Carousel
							key={this.state.show}
							data={this.state.data}
							start={this.state.start}
							handleLike={this.handleLike}
							leftArrow={this.leftArrow}
							rightArrow={this.rightArrow}
						/>
					</ReactCSSTransitionReplace>

					<a className="right-arrow" onClick={() => this.rightArrow()}>
						<i className="material-icons">chevron_right</i>
					</a>
				</div>
			</div>
		);
	}
}
