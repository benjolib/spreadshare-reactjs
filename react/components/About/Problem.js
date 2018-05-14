import React, {Fragment, Component} from 'react';
import { AffixBar } from './'

export default class Problem extends Component {

	render() {

		return (
			<div className="__page__container">
				<div className="__page__wrapper">
					<div id="problem">
						<p>Crowd-sourced data creation has a huge potential but the user experience around it is exhausting.Today, there are thousands of these public sheets containing all sorts of useful information. The scope feels endless. Creators go through the effort of collecting and compiling big loads of useful information into perfectly structured tables, and share them in the wild through various public channels (e.g. Hacker News, Reddit, Slack, Discord, Facebook, Twitter, Newsletters, Medium and others). Those sheets can go viral in a short periode of time. Attract thousands of users and grow the content by contributions from the community. Still you will hardly find public spreadsheets older than 2 years containing actual and relevant content. There’s many reasons why these sheets decay. G-Sheets are broken when it comes to collaboratively collecting and distributing data. Creators usually start with high ambitions and lose stamina over time. The content gets stale and isn’t leveraged into anything else.</p>
					</div>
				</div>

				<AffixBar active={'Problem'}/>
			</div>
		)
	}
}
