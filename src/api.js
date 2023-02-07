import axios from "axios";

const baseURL = "https://api.rawg.io/api/games";
const KEY_URL = "?key=342f8b20c974442f9c072609d2653d5e";
const queryParameters = "&dates=2020-01-01,2023-12-31&platforms=7";
const API_GAMES_URL = baseURL + KEY_URL + queryParameters;

export function getApiGames() {
	return axios.get(API_GAMES_URL);
}
//console.log(API_GAMES_URL)