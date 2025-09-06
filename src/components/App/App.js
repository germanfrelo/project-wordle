import Game from "../Game";
import Header from "../Header";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="game-wrapper">
				<Game />
			</main>
		</div>
	);
}

export default App;
