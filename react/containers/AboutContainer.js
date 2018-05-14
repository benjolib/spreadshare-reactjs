import React, {Fragment, Component} from 'react';
import { Vision, Solution, Roadmap, Problem, HowItWorks, BlockChain } from "../components/About";

export default class AboutContainer extends Component {

	static defaultProps = {
		active: 'vision'
	}

	_getContent() {

		let { active } = this.props

		switch (active) {
			case 'vision':
				return <Vision/>
				break
			case 'solution':
				return <Solution/>
				break
			case 'roadmap':
				return <Roadmap/>
				break
			case 'problem':
				return <Problem/>
				break
			case 'howitworks':
				return <HowItWorks/>
				break
			case 'blockchain':
				return <BlockChain/>
				break
		}
	}

	render() {

		return (
			<Fragment>
				<div className="__page__top">
					<h1>About</h1>
					<h2>We shape our Data and therefore our Data shape Us</h2>
				</div>
				{this._getContent()}
			</Fragment>
		)
	}
}
