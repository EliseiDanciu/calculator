import React from "react";

const Buttons = props => {
	const { handleNumbers, handleOperators, calculate, reset } = props;
	return (
		<div>
			<button id="clear" value="clear" onClick={reset} style={{ width: "75%" }}>
				AC
			</button>
			<button id="subtract" value="-" onClick={handleOperators}>
				-
			</button>
			<button id="seven" value="7" onClick={handleNumbers}>
				7
			</button>
			<button id="eight" value="8" onClick={handleNumbers}>
				8
			</button>
			<button id="nine" value="9" onClick={handleNumbers}>
				9
			</button>
			<button id="add" value="+" onClick={handleOperators}>
				+
			</button>
			<button id="four" value="4" onClick={handleNumbers}>
				4
			</button>
			<button id="five" value="5" onClick={handleNumbers}>
				5
			</button>
			<button id="six" value="6" onClick={handleNumbers}>
				6
			</button>
			<button id="divide" value="/" onClick={handleOperators}>
				/
			</button>
			<button id="one" value="1" onClick={handleNumbers}>
				1
			</button>
			<button id="two" value="2" onClick={handleNumbers}>
				2
			</button>
			<button id="three" value="3" onClick={handleNumbers}>
				3
			</button>
			<button id="multiply" value="*" onClick={handleOperators}>
				*
			</button>
			<button id="zero" value="0" onClick={handleNumbers}>
				0
			</button>
			<button id="decimal" value="." onClick={handleNumbers}>
				.
			</button>
			<button
				id="equals"
				value="="
				onClick={calculate}
				style={{ width: "50%" }}
			>
				=
			</button>
		</div>
	);
};

export default Buttons;
