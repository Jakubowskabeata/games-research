import axios from 'axios';


const API_RAWG_URL =
	"https://api.rawg.io/api/games?key=342f8b20c974442f9c072609d2653d5e&dates=2019-09-01,2019-09-30&platforms=18,1,7";
	

export function getApiRawg() {
	return axios.get(API_RAWG_URL);
}