import React, {Fragment, Component} from 'react';
import { AffixBar } from './'

export default class Vision extends Component {

	render() {

		return (
				<div className="__page__container">
					<div className="__page__wrapper">
						<div id="vision">
							<p>We are heading towards a new age. Data has become the most-valuable resource of our planet. Following the footsteps of British statesman Winston Churchill and Canadian philosopher Marshal McLuhan, today we could say: We shape our data and therefore our data shape us.Information is the ultimate value. Knowledge has the power to educate people and fundamentally change their lives. Access is the problem, there’s no free lunch, they say. But Wikipedia (among other sites) proofed that voluntary crowd-sourcing information is a way to democratise information and grant free access for everybody. We believe that most of the worlds knowledge can be put into the table format through the power of the crowd.With SpreadShare we make the guarantee that information is and always will be freely accessible for everybody. We have a philosophy of openness and collaboration and want SpreadShare to be owned by our contributors.
							</p>
							<br />
							<p>If you haven’t heard of SpreadShare yet we recommend to read the stories of how we <a href="https://medium.com/spreadshare/https-medium-com-benjamin-libor-spreadshare-launch-ca113d03b5e4">build our prototype</a> and <a href="https://medium.com/spreadshare/https-medium-com-benjamin-libor-dude-get-up-we-are-1-on-product-hunt-f03742126b1b">launched it</a>. In short, SpreadShare is a content community for digital professionals. We believe in public tables as a format for collecting and distributing information. Collective research through crowd-sourced data creation.</p>
						</div>
					</div>
					<AffixBar active={'vision'}/>
				</div>

		)
	}
}
