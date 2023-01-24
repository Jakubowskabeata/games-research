import React, { Component } from "react";
import { getApiRawg } from "./api.js";

export default class Axios extends Component {
	constructor() {
		super();

		this.state = {
			apiRawg: [],
		};
	}

	componentDdMount() {
		getApiRawg()
			.then((response) => {
				console.log(response);
				this.setState({
					apiRawg: response.data,
				});
			})
			.catch((err) => console.log(err.message));
	}

	render() {
		const { apiRawg } = this.state;

		console.log(apiRawg);

		const apiRawgList = apiRawg.map((item, index) => {
			return <div key={`${item.title}${index}`}>{item.title}</div>;
		});

		return <div>{apiRawgList}</div>;
	}
}
