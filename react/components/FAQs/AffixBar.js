import React, {Fragment, Component} from 'react';

const AffixBar = ({ active })=> {

	return (
			<div className="__page__sidebar">
				<ul>
					<li className={active=='company'? 'active': ''}><a href="/faq">Company</a></li>
					<li className={active=='product'? 'active': ''}><a href="/faq/product">Product</a></li>
					<li className={active=='content'? 'active': ''}><a href="/faq/content">Content</a></li>
					<li className={active=='token'? 'active': ''}><a href="/faq/token">Token</a></li>
				</ul>
			</div>
	)
}

export default AffixBar;