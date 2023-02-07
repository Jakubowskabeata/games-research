import "./App.css";
import {useState, useEffect} from "react";
import { getApiGames } from "./api.js";

function App() {

const [game, setGame]= useState([]);

 useEffect(() => {
		getApiGames().then((response) => {
			setGame(response.data);
		});
 }, []);

const apiGamesList = game.results?.map((item) => {
	return <div key={item.id}>{item.name}</div>;
});

	return (
		<div className="App">
			<header className="App-header">
				<p>Lista gier:</p>
				{apiGamesList}

			</header>
		</div>
	);
}

export default App;
