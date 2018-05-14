import React, {Fragment, Component} from 'react';

export default class Footer extends Component {

	render() {

		return (

				<Fragment>
					<div className="white-overlay"></div>
					{/*<a class="button green found-a-bug" href="https://betterresearch.typeform.com/to/o3W0BI" target="_blank">Report a Bug 🐞</a>*/}
					<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
					<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
					<script type="text/javascript" src="/static/js/api.js"></script>
					<script type="text/javascript" src="/static/js/jquery.sticky-sidebar.min.js"></script>
					<script type="text/javascript" src="/static/js/infinite-scroll.min.js"></script>
					<script type="text/javascript" src="/static/js/scripts.js"></script>

					<footer className="footer">
					<div className="footer__top">
						<div className="footer__top__left">
							<h1>SpreadShare</h1>
							<h2>Community curated Tables</h2>
							<p>Explore community-curated tables for startups and professionals</p>
						</div>
						<div className="footer__top__right">
							<div className="footer__top__right__column footer__top__right__column--first">
								<p>WELCOME</p>
								<ul>
									<li><a href="/about">About</a></li>
									<li><a href="/blog">Blog</a></li>
									<li><a href="/faq">FAQ</a></li>
								</ul>
							</div>
							<div className="footer__top__right__column footer__top__right__column--second">
								<p>PARTICIPATE</p>
								<ul>
									<li><a href="/jobs">Tasks &amp; Jobs</a></li>
									<li><a href="/feature-voting">Feature Voting</a></li>
									<li><a href="/token">Earn Token</a></li>
								</ul>
							</div>
							<div className="footer__top__right__column footer__top__right__column--third">
								<p>TERMS</p>
								<ul>
									<li><a href="/terms">Terms Of Use</a></li>
									<li><a href="/privacy">Privacy Policy</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer__bottom">
						<div className="footer__bottom__rights">
							<p>All Rights Reserved @ spreadshare.co</p>
						</div>
						<div className="footer__bottom__social">
							<ul>
								<li><a href="mailto:hi@spreadshare.co?Subject=Say%20hello">Email</a></li>
								<li>●</li>
								<li><a className="facebook" href="https://www.facebook.com/groups/403500643362775">Facebook</a></li>
								<li>●</li>
								<li><a className="twitter" href="https://twitter.com/SpreadShareCo">Twitter</a></li>
								<li>●</li>
								<li><a className="medium" href="https://medium.com/spreadshare">Medium</a></li>
								<li>●</li>
								<li><a className="producthunt" href="https://www.producthunt.com/posts/spreadshare">Product Hunt</a></li>
							</ul>
						</div>
					</div>
				</footer>
				</Fragment>
		)
	}
}
