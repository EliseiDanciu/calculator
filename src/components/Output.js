import React, { Component } from "react";

class Output extends Component {
	render() {
		const { currentVal } = this.props;
		return (
			<div id="display" className="outputScreen">
				<p>{currentVal}</p>
			</div>
		);
	}
}

export default Output;
