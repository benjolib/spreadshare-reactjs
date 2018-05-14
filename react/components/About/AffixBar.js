import React, {Fragment, Component} from 'react';

const AffixBar = ({ active })=> {

	return (
			<div className="__page__sidebar">
				<ul>
					<li className={active=='vision'? 'active': ''}><a href="/about">Vision</a></li>
					<li className={active=='howitworks'? 'active': ''}><a href="/about/howitworks">How it works</a></li>
					<li className={active=='problem'? 'active': ''}><a href="/about/problem">Problem</a></li>
					<li className={active=='solution'? 'active': ''}><a href="/about/solution">Solution</a></li>
					<li className={active=='blockchain'? 'active': ''}><a href="/about/blockchain">Blockchain</a></li>
					<li className={active=='roadmap'? 'active': ''}><a href="/about/roadmap">Roadmap</a></li>
				</ul>
			</div>
	)
}

export default AffixBar;