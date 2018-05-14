import React, {Fragment, Component} from 'react';
import { AffixBar } from './'

export default class BlockChain extends Component {

	render() {

		return (
			<div className="__page__container">
				<div className="__page__wrapper">
					<div id="blockchain">
						<p>We wanted to change all that and build a better product integrated in a community of creators. But there was one last aspect we had to solve. Incent the creators to add millions of cells of valuable data. That’s where the blockchain came to our mind. How about incentivizing users by rewarding them with tokens - for reputation in the first place but would convert into tradeable assets at a later stage of the platform. We came to believe that a platform heavily relying on user-generated content can only exploit its full potential if the users are incentivized right.</p>
					</div>
				</div>

				<AffixBar active={'blockchain'}/>
			</div>
		)
	}
}
