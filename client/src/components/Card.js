import React from 'react';

const youtubeURL = 'https://www.youtube.com/watch?v=';
const Card = props => {
	let playCircle = null;
	let name = props.data.name;

	if (props.data.name.length > 18) {
		name = name.slice(0, 18) + '...';
	}
	if (props.data.itemData.youtube_video) {
		playCircle = (
			<a
				target="_blank"
				href={`${youtubeURL}${props.data.itemData.youtube_video}`}
			>
				<i className="material-icons play">play_circle_outline</i>
			</a>
		);
	}

	return (
		<div className="card">
			<img src={props.data.itemData.image} alt={props.data.name} />
			{playCircle}
			<a onClick={() => props.handleLike(props.data.uuid, props.index)}>
				<i className="material-icons favorite">favorite</i>
			</a>
			<p className="name">{name}</p>
			<p className="info">{props.data.itemData.definingInfo}</p>
		</div>
	);
};

export default Card;
