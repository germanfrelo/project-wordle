import React from "react";

function VisualKeyboard() {
	return (
		<div className="keyboard">
			<div className="row">
				<kbd>Q</kbd>
				<kbd>W</kbd>
				<kbd>E</kbd>
				<kbd>R</kbd>
				<kbd>T</kbd>
				<kbd>Y</kbd>
				<kbd>U</kbd>
				<kbd>I</kbd>
				<kbd>O</kbd>
				<kbd>P</kbd>
			</div>
			<div className="row">
				<kbd>A</kbd>
				<kbd>S</kbd>
				<kbd>D</kbd>
				<kbd>F</kbd>
				<kbd>G</kbd>
				<kbd>H</kbd>
				<kbd>J</kbd>
				<kbd>K</kbd>
				<kbd>L</kbd>
			</div>
			<div className="row">
				<kbd>Z</kbd>
				<kbd>X</kbd>
				<kbd>C</kbd>
				<kbd>V</kbd>
				<kbd>B</kbd>
				<kbd>N</kbd>
				<kbd>M</kbd>
			</div>
		</div>
	);
}

export default VisualKeyboard;
