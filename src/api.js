import axios from 'axios';


const API_RAWG_URL =
	"https://api.rawg.io/api/platforms?key=342f8b20c974442f9c072609d2653d5e";

export function getApiRawg() {
	return axios.get(API_RAWG_URL);
}