import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	return <>Put a game here!</>;
}

export default Game;
