import React, {Fragment, Component} from 'react';
import { Company, Content, Product, Token } from "../components/FAQs";

export default class FeedContainer extends Component {

	static defaultProps = {
	}


	render() {

		let notification = false;

		return (
			<Fragment>

				<div className="tableFeed">
					<div className="tableFeed__title">
						<p>Your Notifications</p>
					</div>
					<div className="container container--tableFeed">

						{
							notification
								?
									<div className="container__content">

										{
											[1,2,3].map((n, i)=> {
												return <div className="tableFeed__item" key={i}>
													<div className="tableFeed__item__avatar">
														<a href="/user/nishchit">
															<img src="/static/images/anakin.jpg" />
														</a>
													</div>
													<a href="">
														<div className="tableFeed__item__info">
															<div className="tableFeed__item__info__text">
														<span className="tableFeed__item__info__text__author">
														Benjamin
														</span>
																<span className="tableFeed__item__info__text__message">
															You got this notification
														</span>
															</div>
															<div className="tableFeed__item__info__time">
																<span>Today 5pm</span>
															</div>
														</div>
													</a>
												</div>
											})
										}
									</div>
									: <div className="container__content center">
											<div>
												<img src="/static/images/desktop.png" alt />
											</div>
											<p>&nbsp;</p>
											<p>There are no notifications available for you, yet..</p>
										</div>
						}

						<aside className="aside">
							<a href="/feed">
								<div className="aside__item item-selected">
									<p>All</p>
								</div>
							</a>
							<a href="/feed/changes">
								<div className="aside__item">
									<p>Changes</p>
								</div>
							</a>
							<a href="/feed/comments">
								<div className="aside__item">
									<p>Comments</p>
								</div>
							</a>
							<a href="/feed/followers">
								<div className="aside__item">
									<p>Followers</p>
								</div>
							</a>
							<a href="/feed/subscribers">
								<div className="aside__item">
									<p>Subscribers</p>
								</div>
							</a>
							<a href="/feed/upvotes">
								<div className="aside__item">
									<p>Upvotes</p>
								</div>
							</a>
						</aside>
					</div>
				</div>

			</Fragment>
		)
	}
}
