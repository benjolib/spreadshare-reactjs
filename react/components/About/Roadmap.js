import React, {Fragment, Component} from 'react';
import { AffixBar } from './'

export default class Roadmap extends Component {

	render() {

		return (
				<div className="__page__container">
					<div className="__page__wrapper">
						<div id="roadmap">
							<p>
								We’re focusing on iterating our product based on the learnings from our most recent release.
								We’ll be starting by letting selected users access our platform.
								Together with them we’ll explore the way they use the product and define a roadmap to iterate it.
								There’s more features to come, bugs to fix, new ideas to design and content to be added.
								🚨 Interested to have a look on our code and explore ways to collaborate?
								Just send us a mail to <a href="mailto:hi@spreadshare.co">hi@spreadshare.co</a>
							</p>
						</div>
					</div>
					<AffixBar active={'roadmap'}/>
				</div>
		)
	}
}
