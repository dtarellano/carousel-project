import React from 'react';

const IndexIndicator = props => {
	let indicator = [];
	for (let i = 1; i <= 4; i++) {
		if (props.indicator === i) {
			indicator.push(
				<i className="material-icons" key={i}>
					lens
				</i>
			);
		} else {
			indicator.push(
				<i className="material-icons" key={i}>
					panorama_fish_eye
				</i>
			);
		}
	}
	return <div className="indicator">{indicator}</div>;
};

export default IndexIndicator;
