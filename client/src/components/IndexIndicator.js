import React from 'react';

const IndexIndicator = props => {
	let indicator = [];
	for (let i = 1; i <= 4; i++) {
		if (props.indicator === i) {
			indicator.push(<i class="material-icons">lens</i>);
		} else {
			indicator.push(<i class="material-icons">panorama_fish_eye</i>);
		}
	}

	for (let i = 0; i < 4; i++) {}
	return <div>{indicator}</div>;
};

export default IndexIndicator;
