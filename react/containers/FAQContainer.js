import React, {Fragment, Component} from 'react';
import { Company, Content, Product, Token } from "../components/FAQs";

export default class FAQContainer extends Component {

	static defaultProps = {
		active: 'company'
	}

	_getContent() {

		let { active } = this.props

		switch (active) {
			case 'company':
				return <Company/>
				break
			case 'content':
				return <Content/>
				break
			case 'product':
				return <Product/>
				break
			case 'token':
				return <Token/>
				break
		}
	}

	render() {

		return (
			<Fragment>
				<div className="__page__top">
						<h1>Frequently Asked</h1>
						<h2>Write us an email to hi@spreadshare.co if your question wasn’t answered. We get back to you asap.</h2>
				</div>
				{this._getContent()}
			</Fragment>
		)
	}
}
