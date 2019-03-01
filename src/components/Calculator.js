import React, { Component } from "react";
import Buttons from "./Buttons";
import Formula from "./Formula";
import Output from "./Output";

const initialState = { currentVal: "0", formula: "" };
const checkForDecimal = /[.]+/;
const checkForOperator = /([/+\-*])/;

export default class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	handleNumbers = e => {
		const { currentVal, formula } = this.state;
		//Ignore multiple dots
		if (checkForDecimal.test(currentVal) && e.target.value === ".") {
			console.log("Ignored");
			return;
		}

		//Remove initial zero
		if (currentVal[0] === "0" && currentVal.length > 0) {
			this.setState({
				currentVal: e.target.value,
				formula: formula.concat(e.target.value.toString())
			});
		} else {
			//Concat number pressed to currentValue
			this.setState({
				currentVal: currentVal.concat(e.target.value),
				formula: formula.concat(e.target.value.toString())
			});
		}
	};

	handleOperators = e => {
		const { formula } = this.state;

		if (checkForOperator.test(e.target.value) && formula === "") {
			return;
		}

		this.setState({
			currentVal: e.target.value,
			formula: formula.concat(e.target.value.toString())
		});

		//If the last element in formula is an operator substitute it with the new insterted one
		if (checkForOperator.test(formula[formula.length - 1])) {
			this.setState({
				currentVal: e.target.value,
				formula: formula.slice(0, formula.length - 3).concat(e.target.value)
			});
		}
	};

	calculate = e => {
		const { formula } = this.state;
		let expression = formula;
		const lastElement = expression[expression.length - 1];
		//If ends with operator or decimal remove it
		if (
			checkForOperator.test(lastElement) ||
			checkForDecimal.test(lastElement)
		) {
			expression = expression.slice(0, -1);
		}
		const result = eval(expression);
		this.setState({
			currentVal: result.toString(),
			formula: result.toString()
		});
	};

	reset = () => {
		this.setState(initialState);
	};

	render() {
		const { currentVal, formula } = this.state;
		return (
			<div>
				<div id="displays" className="display">
					<Formula formula={formula} />
					<Output currentVal={currentVal} />
				</div>
				<Buttons
					handleNumbers={this.handleNumbers}
					handleOperators={this.handleOperators}
					calculate={this.calculate}
					reset={this.reset}
				/>
			</div>
		);
	}
}
