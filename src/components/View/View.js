import React from 'react';

function View(props) {
	console.log(props);
	return (
		<div>
			View Target with Id of {props.match.params.id}
		</div>
	);
}
export default View;
