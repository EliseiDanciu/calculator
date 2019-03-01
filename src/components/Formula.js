import React from "react";

class Formula extends React.Component {
	render() {
		const { formula } = this.props;
		return (
			<div className="formulaScreen">
				<p>{formula}</p>
			</div>
		);
	}
}

export default Formula;
