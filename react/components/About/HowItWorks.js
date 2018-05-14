import React, {Fragment, Component} from 'react';
import { AffixBar } from './'

export default class HowItWorks extends Component {

	render() {

		return (
			<div className="__page__container">
				<div className="__page__wrapper">
					<div id="howitworks">
						<p>Users can create tables of data on SpreadShare, share them with the community and collaboratively work on them. The idea is to crowdsource knowledge creation and reward users with token. Token can be traded with real money and cryptocurrencies.</p>
					</div>
				</div>
				<AffixBar active={'howitworks'}/>
			</div>
		)
	}
}
