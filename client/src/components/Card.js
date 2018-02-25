import React from 'react';

let youtubeURL = 'https://www.youtube.com/watch?v=';
const Card = props => {
	let playCircle = null;

	let show = 'none';
	if (props.show) {
		show = 'card';
	}
	if (props.data.itemData.youtube_video) {
		playCircle = (
			<a
				target="_blank"
				href={`${youtubeURL}${props.data.itemData.youtube_video}`}
			>
				<i className="material-icons">play_circle_outline</i>
			</a>
		);
	}

	return (
		<div className={show}>
			<img src={props.data.itemData.image} alt={props.data.name} />
			<p>{props.data.name}</p>
			<p>{props.data.itemData.definingInfo}</p>
			<a onClick={() => props.handleLike(props.data.uuid, props.index)}>
				<i className="material-icons">favorite</i>
			</a>

			{playCircle}
		</div>
	);
};

export default Card;
