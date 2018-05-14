import React, {Fragment, Component} from 'react';

export default class Navbar extends Component {

	render() {

		let loggedIn = false;

		const LoggedInElm = (
			<Fragment>
				<div className="navbar__controls desktop-only">
					<div className="navbar__wrapper navbar__wrapper--left">
						<div className="navbar__logo mobile-and-tablet">
							<a href="/"><img src="/static/images/icon_1024.png"/></a>
						</div>
						<div className="navbar__search mobile-and-tablet mobile-and-tablet--flex">

							<div className="navbar__search__icon">
								<img src="/static/icons/search-green.svg"/>
							</div>
							<input type="text" className="navbar__search__field" placeholder="Search"/>

							{/* Begin Search Auto Complete Component !*/}
							<div className="search-autocomplete search__dropdown">
								<div className="title-block">
									<div className="description">
										TABLE TITLE
									</div>
									<div className="result-count">
									</div>
									<div id="search-items"/>
									<hr className="divider"/>
									<div className="all-results">All Results</div>
								</div>
							</div>
						</div>
					</div>
					<div className="navbar__wrapper navbar__wrappper--right">
						<span className="navbar__controls__add navbar__controls__add--notification"/>
						<a className="navbar__controls__add__create" href="/table/add">
							<img src="/static/icons/add-green.svg" className="navbar__controls__add" title="Create a New Table"/>
							<span>Create a Table</span>
						</a>
						<a id="notificationButton" href="javascript:;">
							<span>25</span>
							<img src="/static/icons/bell.svg" className="navbar__controls__notification"/>
						</a>
						<div className="dropdown dropdown--notifications"><br/>
							<div className="loading"/>
							<br/></div>
						<a id="profileImage" href="javascript:;">
							<img src="https://lh3.googleusercontent.com/-wZxoXtON360/AAAAAAAAAAI/AAAAAAAABOE/EaWescW2Pq8/photo.jpg?sz=150"
									 className="navbar__controls__profile"/></a>
						<div className="profile-menu navbar__controls__dropdown">
							<ul>
								<li><a href="/table/add">Create a Table</a></li>
								<li><a href="/">Home</a></li>
								<li><a href="/leaderboard">Leaderboard</a></li>
								<li className="separator"/>
								<li><a href="/user/Nishchit">Profile</a></li>
								<li><a href="/user/nishchit/tables">Your Tables</a></li>
								<li><a href="/settings/wallet">Wallet</a></li>
								<li><a href="/settings/invite">Get Token</a></li>
								<li><a href="/settings/personal">Settings</a></li>
								<li><a href="/logout">Sign out</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="navbar__controls mobile-and-tablet mobile-and-tablet--flex">
					<div className="navbar__wrapper navbar__wrapper__mobile--left">
						<div className="navbar__logo mobile-and-tablet">
							<a href="/"><img src="/static/images/icon_1024.png"/></a>
						</div>
						<div className="navbar__search mobile-and-tablet mobile-and-tablet--flex">
							{'{'}% if searchDisabled is empty %{'}'}
							<div className="navbar__search__icon">
								<img src="/static/icons/search-green.svg"/>
							</div>
							{'{'}% if query is defined %{'}'}
							<input type="text" className="navbar__search__field" placeholder="Search" defaultValue="{{ query }}"/>
							{'{'}% else %{'}'}
							<input type="text" className="navbar__search__field" placeholder="Search"/>
							{'{'}% endif %{'}'}
							{'{'}% endif %{'}'}
							{/* Begin Search Auto Complete Component !*/}
							<div className="search-autocomplete search__dropdown">
								<div className="title-block">
									<div className="description">
										TABLE TITLE
									</div>
									<div className="result-count">
									</div>
									<div id="search-items"/>
									<hr className="divider"/>
									<div className="all-results">All Results</div>
								</div>
							</div>
						</div>
					</div>
					<div className="navbar__wrapper navbar__wrapper__mobile--right">
						<span className="navbar__controls__add navbar__controls__add--notification"/>
						<a className="navbar__controls__add__create" href="/table/add">
							<img src="/static/icons/add-green.svg" className="navbar__controls__add" title="Create a New Table"/>
							<span>Create a Table</span>
						</a>
						<a id="notificationButton" href="javascript:;">
							{'{'}% if auth.getUser().getStats().getUnreadNotificationsCount() &gt;0 %{'}'}<span>{'{'}{'{'} auth.getUser().getStats().getUnreadNotificationsCount() {'}'}{'}'}</span>{'{'}% endif %{'}'}
							<img src="/static/icons/bell.svg" className="navbar__controls__notification"/>
						</a>
						<div className="dropdown dropdown--notifications">
							<br/>
							<div className="loading"/>
							<br/>
						</div>
						<a id="profileImage" href="javascript:;">
							<img src="https://lh3.googleusercontent.com/-wZxoXtON360/AAAAAAAAAAI/AAAAAAAABOE/EaWescW2Pq8/photo.jpg?sz=150" className="navbar__controls__profile"/>
						</a>
						<div className="profile-menu navbar__controls__dropdown">
							<ul>
								<li><a href="/table/add">Create a Table</a></li>
								<li><a href="/">Home</a></li>
								<li><a href="/user/{{ auth.getUser().handle }}">Profile</a></li>
								<li><a href="/settings/wallet">Wallet</a></li>
								<li><a href="/settings/invite">Get Token</a></li>
								<li><a href="/settings/personal">Settings</a></li>
								<li><a href="/logout">Sign out</a></li>
							</ul>
						</div>
					</div>
				</div>
			</Fragment>
		)

		const LoggedOutElm = (
				<Fragment>
					<div className="navbar__logo mobile-and-tablet mobile-and-tablet--flex">
						<a href="/"><img src="/static/images/icon_1024.png"/></a>
					</div>
					<div className="navbar__search mobile-and-tablet mobile-and-tablet--flex">

						<div className="navbar__search__icon">
							<img src="/static/icons/search-green.svg"/>
						</div>

						<input type="text" className="navbar__search__field" placeholder="Search"/>

						{/* Begin Search Auto Complete Component !*/}
						<div className="search-autocomplete search__dropdown">
							<div className="title-block">
								<div className="description">
									TABLE TITLE
								</div>
								<div className="result-count">
								</div>
								<div id="search-items"/>
								<hr className="divider"/>
								<div className="all-results">All Results</div>
							</div>
						</div>
					</div>
					<div className="navbar__wrapper navbar__wrappper--right">
						<div className="navbar__controls">
							<a className="navbar__controls__add__create" href="/table/add">
								<img src="/static/icons/add-green.svg" className="navbar__controls__add" title="Create a New Table"/>
								<span>Create a Table</span>
							</a>
						</div>
						<span className="navbar__login">
        <a href="/login" className="navbar__login__login"/>
        <span>or</span>
        <a href="/signup" className="navbar__login__signup">Sign up</a>
      </span>
					</div>
				</Fragment>
		)

		return (

				<div>

					<header className="re-header">
						<div className="re-header__inner">
							<a className="re-header__logo" href="/"><img src="/static/images/logo.png" /></a>
							<a className="re-header__item {{ exploreActive is not empty and exploreActive ? 'active': '' }}" href="/">Explore</a>
							<a className="re-header__item {{ forYouActive is not empty and forYouActive ? 'active': '' }}" href="/for-you">For You</a>
							<a className="re-header__search" href="#"><img className="re-header__search__img" src="/static/images/search.svg" /><img className="re-header__search__img-green" src="/static/images/search-green.svg" /></a>
							<div className="re-header__search-open" style={{display: 'none'}}>
								<img src="/static/images/search-green.svg" />
								<input type="text" placeholder="Search" className="navbar__search__field"/>
								<img className="search-close" src="/static/images/search-cross.svg" />
							</div>
							<div className="search-autocomplete search__dropdown">
								<div className="u-flex">
									<div className="description">
										LISTS
									</div>
									<div className="result-count">
									</div>
								</div>
								<div id="search-items" />
								<a href="#" className="all-results">More Results</a>
							</div>
							{
								loggedIn
									? (
											<Fragment>
												<a className="re-header__add" href="/table/add"><img src="/static/images/header-add.svg" /></a>
												<a className="re-header__paperPencil" href="/collaborations"><img src="/static/images/header-paper-pencil.svg" /></a>
												<a className="re-header__bell l-button" data-dropdown-placement="bottom-end" data-dropdown-offset={114} href="javascript:;">
													<span>25</span>
													<img src="/static/images/header-bell.svg" />
												</a>
												<div className="l-dropdown dropdown notification-dropdown u-flex u-flexCol">
													{
														[1,2,3,4,5,6].map((n, i)=> {

															return (
																	<div className="notification-dropdown__notification u-flex u-flexAlignItemsCenter" key={i}>
																		<a href="/user/andrewcoyle">
																			<img className="notification-dropdown__notification__image" src="https://cdn-images-1.medium.com/fit/c/100/100/1*iRHlXdQhKPpyNJ0w6f7ijw.jpeg" />
																		</a>
																		<div style={{width: '100%'}}>
																			<div className="u-flex u-flexJustifyBetween">
																				<a href="/user/andrewcoyle">
																					<span className="notification-dropdown__notification__name">Andrew Coyle</span>
																				</a>
																				<div className="notification-dropdown__notification__date"><img src="/static/images/comment-clock.svg" />TODAY</div>
																			</div>
																			<p className="notification-dropdown__notification__text">Created a new list <a href="#">Design Tools</a></p>
																		</div>
																	</div>
															)
														})
													}
													<a href="/activity" className="notification-dropdown__notification__see-all">See All</a>
												</div>
												<a className="re-header__user l-button" data-dropdown-placement="bottom-end" data-dropdown-offset={48} href="javascript:;">
													<img src="https://lh3.googleusercontent.com/-wZxoXtON360/AAAAAAAAAAI/AAAAAAAABOE/EaWescW2Pq8/photo.jpg?sz=150" />
												</a>
												<div className="l-dropdown dropdown re-header__user-dropdown user-dropdown u-flex">
													<div className="user-dropdown__column">
														<a href="/profile/{{ auth.getUser().handle }}" className="user-dropdown__item">
															<div className="user-dropdown__item__image user-dropdown__item__image--profile">
																<img src="https://lh3.googleusercontent.com/-wZxoXtON360/AAAAAAAAAAI/AAAAAAAABOE/EaWescW2Pq8/photo.jpg?sz=150" />
															</div>
															<div className="user-dropdown__item__text">
																<h3>You</h3>
																<span>Your public profile</span>
															</div>
														</a>
														<a href="/lists" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-lists.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Your Lists</h3>
																<span>All lists created by you</span>
															</div>
														</a>
														<a href="/subscriptions" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-subscriptions.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Subscriptions</h3>
																<span>Lists you are subscribed</span>
															</div>
														</a>
														<a href="/submissions" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-submissions.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Submissions</h3>
																<span>All listings you submitted</span>
															</div>
														</a>
														<a href="/collaborations" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-collaborations.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Collaborations</h3>
																<span>Community requests to you</span>
															</div>
														</a>
													</div>
													<div className="user-dropdown__column">
														<a href="/table/add" className="user-dropdown__item">
															<div className="user-dropdown__item__image user-dropdown__item__image--fill-highlight">
																<img src="/static/images/user-menu-create.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Create List</h3>
																<span>Here you can create a list</span>
															</div>
														</a>
														<a href="/karma" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-karma.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Karma</h3>
																<span>Your Karma points</span>
															</div>
														</a>
														<a href="/history" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-history.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>History</h3>
																<span>All lists you have seen</span>
															</div>
														</a>
														<a href="/settings" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-settings.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Settings</h3>
																<span>Manage your account</span>
															</div>
														</a>
														<a href="/logout" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-logout.svg" /></div>
															<div className="user-dropdown__item__text user-dropdown__item__text--logout">
																<h3>Logout</h3>
																<span>See you soon</span>
															</div>
														</a>
													</div>
												</div>
												<a className="re-header__dotdotdot l-button" data-dropdown-placement="bottom-end" data-dropdown-offset={20} href="javascript:;">
													<img src="/static/images/header-dotdotdot.svg" /></a>
												<div className="l-dropdown dropdown re-header__dotdotdot-dropdown user-dropdown u-flex" style={{marginTop: 29}}>
													<div className="user-dropdown__column">
														<a href="/karma-challenge" className="user-dropdown__item">
															<div className="user-dropdown__item__image user-dropdown__item__image--fill-highlight">
																<img src="/static/images/user-menu-karma-challenge.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Karma Challenge</h3>
																<span>Earn money for contributing</span>
															</div>
														</a>
														<a href="/about" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-about.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>About</h3>
																<span>Who we are, what we do</span>
															</div>
														</a>
														<a href="/jobs" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-jobs.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Jobs</h3>
																<span>Want to join our team?</span>
															</div>
														</a>
													</div>
													<div className="user-dropdown__column">
														<a href="/faq" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-faq.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Frequently Asked</h3>
																<span>How Spreadshare works</span>
															</div>
														</a>
														<a href="/blog" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-blog.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Blog</h3>
																<span>What inspires us to write</span>
															</div>
														</a>
														<a href="/terms" className="user-dropdown__item">
															<div className="user-dropdown__item__image"><img src="/static/images/user-menu-terms.svg" /></div>
															<div className="user-dropdown__item__text">
																<h3>Terms</h3>
																<span>Terms, conditions &amp; privacy</span>
															</div>
														</a>
													</div>
												</div>
												<a className="re-header__hamburger l-button" data-dropdown-placement="bottom-end" href="javascript:;"><img src="/static/images/hamburger.svg" /></a>
												<div className="l-dropdown dropdown user-dropdown u-flex u-flexCol user-dropdown--no-margin">
													<div className="u-flex user-dropdown__white-section">
														<div className="user-dropdown__column">
															<a href="/profile/nishchit" className="user-dropdown__item">
																<div className="user-dropdown__item__image user-dropdown__item__image--profile"><img src="https://lh3.googleusercontent.com/-wZxoXtON360/AAAAAAAAAAI/AAAAAAAABOE/EaWescW2Pq8/photo.jpg?sz=150" /></div>
																<div className="user-dropdown__item__text">
																	<h3>You</h3>
																	<span>Your public profile</span>
																</div>
															</a>
															<a href="/lists" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-lists.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Your Lists</h3>
																	<span>All lists created by you</span>
																</div>
															</a>
															<a href="/subscriptions" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-subscriptions.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Subscriptions</h3>
																	<span>Lists you are subscribed</span>
																</div>
															</a>
															<a href="/submissions" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-submissions.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Submissions</h3>
																	<span>All listings you submitted</span>
																</div>
															</a>
															<a href="/collaborations" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-collaborations.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Collaborations</h3>
																	<span>Community requests to you</span>
																</div>
															</a>
														</div>
														<div className="user-dropdown__column">
															<a href="/table/add" className="user-dropdown__item">
																<div className="user-dropdown__item__image user-dropdown__item__image--fill-highlight"><img src="/static/images/user-menu-create.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Create List</h3>
																	<span>Here you can create a list</span>
																</div>
															</a>
															<a href="/karma" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-karma.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Karma</h3>
																	<span>Your Karma points</span>
																</div>
															</a>
															<a href="/history" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-history.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>History</h3>
																	<span>All lists you have seen</span>
																</div>
															</a>
															<a href="/settings" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-settings.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Settings</h3>
																	<span>Manage your account</span>
																</div>
															</a>
															<a href="/logout" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-logout.svg" /></div>
																<div className="user-dropdown__item__text user-dropdown__item__text--logout">
																	<h3>Logout</h3>
																	<span>See you soon</span>
																</div>
															</a>
														</div>
													</div>
													<div className="u-flex user-dropdown__grey-section">
														<div className="user-dropdown__column">
															<a href="/karma-challenge" className="user-dropdown__item">
																<div className="user-dropdown__item__image user-dropdown__item__image--fill-highlight"><img src="/static/images/user-menu-karma-challenge.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Karma Challenge</h3>
																	<span>Earn money for contributing</span>
																</div>
															</a>
															<a href="/about" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-about.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>About</h3>
																	<span>Who we are, what we do</span>
																</div>
															</a>
															<a href="/jobs" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-jobs.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Jobs</h3>
																	<span>Want to join our team?</span>
																</div>
															</a>
														</div>
														<div className="user-dropdown__column">
															<a href="/faq" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-faq.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Frequently Asked</h3>
																	<span>How Spreadshare works</span>
																</div>
															</a>
															<a href="/blog" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-blog.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Blog</h3>
																	<span>What inspires us to write</span>
																</div>
															</a>
															<a href="/terms" className="user-dropdown__item">
																<div className="user-dropdown__item__image"><img src="/static/images/user-menu-terms.svg" /></div>
																<div className="user-dropdown__item__text">
																	<h3>Terms</h3>
																	<span>Terms, conditions &amp; privacy</span>
																</div>
															</a>
														</div>
													</div>
												</div>
											</Fragment>
										)
										:
										(
												<a className="re-button re-button--header" href="/login">
													<span>Join with</span>
													<img src="/static/images/join-button-facebook.svg" />
													<img src="/static/images/join-button-twitter.svg" />
													<img src="/static/images/join-button-google.svg" />
												</a>
										)
							}
						</div>
					</header>

					<nav className={`navbar ${loggedIn?'': ' navbar--loggedOut'}`}>

						<div className="navbar__wrapper navbar__wrapper--left">
							<div className="navbar__logo desktop-only desktop-only--flex">
								<a href="/"><img src="/static/images/icon_1024.png"/></a>
							</div>
							<div className="navbar__search desktop-only desktop-only--flex">

								<div className="navbar__search__icon">
									<img src="/static/icons/search-green.svg"/>
								</div>

								<input type="text" className="navbar__search__field" placeholder="Search"/>

								{/* Begin Search Auto Complete Component !*/}
								<div className="search-autocomplete search__dropdown">
									<div className="title-block">
										<div className="description">
											TABLE TITLE
										</div>
										<div className="result-count">
										</div>
										<div id="search-items"/>
										<hr className="divider"/>
										<div className="all-results">All Results</div>
									</div>
								</div>
							</div>
						</div>

						{
							loggedIn
								?
									(<div className="navbar__controls desktop-only">
										<div className="navbar__wrapper navbar__wrapper--left">
											<div className="navbar__logo mobile-and-tablet">
												<a href="/"><img src="/static/images/icon_1024.png" /></a>
											</div>
											<div className="navbar__search mobile-and-tablet mobile-and-tablet--flex">
												<div className="navbar__search__icon" if="searcDisable">
													<img src="/static/icons/search-green.svg" />
												</div>
												<input type="text" className="navbar__search__field" placeholder="Search" />
												{/* Begin Search Auto Complete Component !*/}
												<div className="search-autocomplete search__dropdown">
													<div className="title-block">
														<div className="description">
															TABLE TITLE
														</div>
														<div className="result-count">
														</div>
														<div id="search-items" />
														<hr className="divider" />
														<div className="all-results">All Results</div>
													</div>
												</div>
											</div>
											</div>
										<div className="navbar__wrapper navbar__wrappper--right">
											<span className="navbar__controls__add navbar__controls__add--notification" />
											<a className="navbar__controls__add__create" href="/table/add">
												<img src="/static/icons/add-green.svg" className="navbar__controls__add" title="Create a New Table" />
												<span>Create a Table</span>
											</a>
											<a id="notificationButton" href="javascript:;">
												<span>15</span>
												<img src="/static/icons/bell.svg" className="navbar__controls__notification" />
											</a>
											<div className="dropdown dropdown--notifications"><br />
												<div className="loading" />
												<br />
											</div>
											<a id="profileImage" href="javascript:;"><img src="https://lh3.googleusercontent.com/-wZxoXtON360/AAAAAAAAAAI/AAAAAAAABOE/EaWescW2Pq8/photo.jpg?sz=150" className="navbar__controls__profile" /></a>
											<div className="profile-menu navbar__controls__dropdown">
												<ul>
													<li><a href="/table/add">Create a Table</a></li>
													<li><a href="/">Home</a></li>
													<li><a href="/leaderboard">Leaderboard</a></li>
													<li className="separator" />
													<li><a href="/user/{{ auth.getUser().handle }}">Profile</a></li>
													<li><a href="/user/{{ auth.getUser().handle }}/tables">Your Tables</a></li>
													<li><a href="/settings/wallet">Wallet</a></li>
													<li><a href="/settings/invite">Get Token</a></li>
													<li><a href="/settings/personal">Settings</a></li>
													<li><a href="/logout">Sign out</a></li>
												</ul>
											</div>
										</div>
											</div>)
									:''

						}

						<div className="navbar__controls mobile-and-tablet mobile-and-tablet--flex">
							<div className="navbar__wrapper navbar__wrapper__mobile--left">
								<div className="navbar__logo mobile-and-tablet">
									<a href="/"><img src="/static/images/icon_1024.png" /></a>
								</div>
								<div className="navbar__search mobile-and-tablet mobile-and-tablet--flex">
									<div className="navbar__search__icon" if="searchDisabled">
										<img src="/static/icons/search-green.svg" />
									</div>
									<input type="text" className="navbar__search__field" placeholder="Search" />
									{/* Begin Search Auto Complete Component !*/}
									<div className="search-autocomplete search__dropdown">
										<div className="title-block">
											<div className="description">
												TABLE TITLE
											</div>
											<div className="result-count">
											</div>
											<div id="search-items" />
											<hr className="divider" />
											<div className="all-results">All Results</div>
										</div>
									</div>
								</div>
							</div>
							<div className="navbar__wrapper navbar__wrapper__mobile--right">
								<span className="navbar__controls__add navbar__controls__add--notification" />
								<a className="navbar__controls__add__create" href="/table/add">
									<img src="/static/icons/add-green.svg" className="navbar__controls__add" title="Create a New Table" />
									<span>Create a Table</span>
								</a>
								<a id="notificationButton" href="javascript:;">
										<span>25</span>
									<img src="/static/icons/bell.svg" className="navbar__controls__notification" />
								</a>
								<div className="dropdown dropdown--notifications">
									<br />
									<div className="loading" />
									<br />
								</div>
								<a id="profileImage" href="javascript:;">
									<img src="https://lh3.googleusercontent.com/-wZxoXtON360/AAAAAAAAAAI/AAAAAAAABOE/EaWescW2Pq8/photo.jpg?sz=150" className="navbar__controls__profile" />
								</a>
								<div className="profile-menu navbar__controls__dropdown">
									<ul>
										<li><a href="/table/add">Create a Table</a></li>
										<li><a href="/">Home</a></li>
										<li><a href="/user/{{ auth.getUser().handle }}">Profile</a></li>
										<li><a href="/settings/wallet">Wallet</a></li>
										<li><a href="/settings/invite">Get Token</a></li>
										<li><a href="/settings/personal">Settings</a></li>
										<li><a href="/logout">Sign out</a></li>
									</ul>
								</div>
							</div>
						</div>
						<span>25</span>

						{/*else*/}
						<div className="navbar__logo mobile-and-tablet mobile-and-tablet--flex">
							<a href="/"><img src="/static/images/icon_1024.png" /></a>
						</div>

						<div className="navbar__search mobile-and-tablet mobile-and-tablet--flex">
							<div className="navbar__search__icon" if="searchDisabled">
								<img src="/static/icons/search-green.svg" />
							</div>

							<input type="text" className="navbar__search__field" placeholder="Search" />

							{/* Begin Search Auto Complete Component !*/}
							<div className="search-autocomplete search__dropdown">
								<div className="title-block">
									<div className="description">
										TABLE TITLE
									</div>
									<div className="result-count">
									</div>
									<div id="search-items" />
									<hr className="divider" />
									<div className="all-results">All Results</div>
								</div>
							</div>
						</div>
						<div className="navbar__wrapper navbar__wrappper--right">
							<div className="navbar__controls">
								<a className="navbar__controls__add__create" href="/table/add">
									<img src="/static/icons/add-green.svg" className="navbar__controls__add" title="Create a New Table" />
									<span>Create a Table</span>
								</a>
							</div>
							<span className="navbar__login">
							<a href="/login" className="navbar__login__login" />
							<span>or</span>
							<a href="/signup" className="navbar__login__signup">Sign up</a>
							</span>
						</div>
					</nav>

				</div>

		)
	}
}
