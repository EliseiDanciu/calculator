import React from "react";

const Output = props => {
	return (
		<div id="display" className="outputScreen">
			<p>{props.currentVal}</p>
		</div>
	);
};

export default Output;
