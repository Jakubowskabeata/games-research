import React, { Component } from "react";
import { getApiGames} from "./api.js";

import PropTypes from 'prop-types';

export default class Axios extends Component {
	constructor() {
		super();
const propTypes = {
	count: PropTypes.number,
	next: PropTypes.string,
	previous: PropTypes.any,
	results: PropTypes.arrayOf(
		PropTypes.shape({
			slug: PropTypes.string,
			name: PropTypes.string,
			playtime: PropTypes.number,
			platforms: PropTypes.arrayOf(
				PropTypes.shape({
					platform: PropTypes.shape({
						id: PropTypes.number,
						name: PropTypes.string,
						slug: PropTypes.string,
					}),
				})
			),
			stores: PropTypes.arrayOf(
				PropTypes.shape({
					store: PropTypes.shape({
						id: PropTypes.number,
						name: PropTypes.string,
						slug: PropTypes.string,
					}),
				})
			),
			released: PropTypes.string,
			tba: PropTypes.bool,
			background_image: PropTypes.string,
			rating: PropTypes.number,
			rating_top: PropTypes.number,
			ratings: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number,
					title: PropTypes.string,
					count: PropTypes.number,
					percent: PropTypes.number,
				})
			),
			ratings_count: PropTypes.number,
			reviews_text_count: PropTypes.number,
			added: PropTypes.number,
			added_by_status: PropTypes.shape({
				yet: PropTypes.number,
				owned: PropTypes.number,
				beaten: PropTypes.number,
				toplay: PropTypes.number,
				dropped: PropTypes.number,
				playing: PropTypes.number,
			}),
			metacritic: PropTypes.number,
			suggestions_count: PropTypes.number,
			updated: PropTypes.string,
			id: PropTypes.number,
			score: PropTypes.any,
			clip: PropTypes.any,
			tags: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number,
					name: PropTypes.string,
					slug: PropTypes.string,
					language: PropTypes.string,
					games_count: PropTypes.number,
					image_background: PropTypes.string,
				})
			),
			esrb_rating: PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				slug: PropTypes.string,
				name_en: PropTypes.string,
				name_ru: PropTypes.string,
			}),
			user_game: PropTypes.any,
			reviews_count: PropTypes.number,
			saturated_color: PropTypes.string,
			dominant_color: PropTypes.string,
			short_screenshots: PropTypes.arrayOf(
				PropTypes.shape({
					id: -PropTypes.number,
					image: PropTypes.string,
				})
			),
			parent_platforms: PropTypes.arrayOf(
				PropTypes.shape({
					platform: PropTypes.shape({
						id: PropTypes.number,
						name: PropTypes.string,
						slug: PropTypes.string,
					}),
				})
			),
			genres: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number,
					name: PropTypes.string,
					slug: PropTypes.string,
				})
			),
		})
	),
	user_platforms: PropTypes.bool,
};

		this.state = 
		 this.propTypes
		;
	}

	componentDidMount() {
		getApiGames()
			.then((response) => {
				//console.log(response);
				this.setState(
					response.data,
				);
			})
			.catch((err) => console.log(err.message));
	}

	render() {
		if (this.state) {
			const apiGames  = this.state;

			console.log(apiGames);

			const apiGamesList = apiGames.results.map((item) => {
				return <div key={item.id}>{item.name}</div>;
			});

			return (
				<div>
					<p>Lista gier:</p>
					{apiGamesList}
				</div>
			);
		}
	}
}
