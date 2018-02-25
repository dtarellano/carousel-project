import React from 'react';
import Card from './Card';

const Carousel = props => {
	let show = false;
	let slides = 0;
	return (
		<div className="carousel">
			{props.data.map((data, index) => {
				console.log(props.start);
				if (index >= props.start && slides < 5) {
					show = true;
					slides++;
				}
				if (slides === 5) {
					show = false;
				}
				return <Card data={data} show={show} key={data.uuid} />;
			})}
		</div>
	);
};

export default Carousel;
