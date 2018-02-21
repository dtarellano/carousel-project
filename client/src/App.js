import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card';

let youtubeURL = 'https://www.youtube.com/watch?v=';
export default class App extends Component {
	state = {
		hello: 'world'
	};

	componentDidMount() {
		axios.get('/items/?p=1&amt=16').then(data => {
			this.setState({
				data: data.data
			});
		});
	}

	render() {
		return (
			<div>
				<h1>Hello {this.state.hello}</h1>
				<Card />
			</div>
		);
	}
}
