import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container calculator">
					<Calculator />
				</div>
			</div>
		);
	}
}

export default App;
