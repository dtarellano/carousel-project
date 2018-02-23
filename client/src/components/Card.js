import React from 'react';

let youtubeURL = 'https://www.youtube.com/watch?v=';
const Card = props => {
	let playCircle = null;
	if (props.data.itemData.youtube_video) {
		playCircle = <i className="material-icons">play_circle_outline</i>;
	}

	return (
		<div className="card">
			<img src={props.data.itemData.image} />
			<p>{props.data.name}</p>
			<p>{props.data.itemData.definingInfo}</p>

			<i className="material-icons">favorite</i>
			{playCircle}
		</div>
	);
};

export default Card;
