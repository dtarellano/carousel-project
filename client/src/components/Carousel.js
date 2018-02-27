import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import Card from './Card';

const duration = 300;

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
	padding: 20,
	display: 'inline-block'
};

const transitionStyles = {
	entering: { opacity: 0 },
	entered: { opacity: 1 }
};

const Carousel = props => {
	let carousel = [];
	let start = props.start;
	let i = 1;
	if (props.data.length) {
		while (i <= 4) {
			carousel.push(
				<Card
					data={props.data[start]}
					index={start}
					key={props.data[start].uuid}
					handleLike={props.handleLike}
					show={true}
				/>
			);
			start++;
			i++;
		}
	}
	return <div className="carousel">{carousel}</div>;
};

export default Carousel;

{
	/* {props.data.map((data, index) => {
  console.log(props.start);
  if (index >= props.start && slides < 5) {
    show = true;
    slides++;
  }
  if (slides === 5) {
    show = false;
  }
  return (
    <Card
      data={data}
      index={index}
      show={show}
      key={data.uuid}
      handleLike={props.handleLike}
    />
  );
})} */
}
