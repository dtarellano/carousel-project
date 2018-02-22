import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card';

let youtubeURL = 'https://www.youtube.com/watch?v=';
export default class App extends Component {
	state = {
		hello: 'world',
		data: []
	};

	componentDidMount() {
		axios.get('/items/?p=1&amt=16').then(data => {
			this.setState({
				data: data.data
			});
		});
	}

	render() {
		let carousel = <div>Loading</div>;
		if (this.state.data.length) {
			carousel = this.state.data.map(data => (
				<Card data={data} key={data.uuid} />
			));
		}
		return (
			<div>
				<h3>Top recomendations for you</h3>
				{carousel}
			</div>
		);
	}
}
