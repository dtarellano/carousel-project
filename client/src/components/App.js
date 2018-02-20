import React, { Component } from 'react';

export default class App extends Component {
	state = {
		hello: 'world'
	};
	render() {
		return (
			<div>
				<h1>Hello {hello}</h1>
			</div>
		);
	}
}
