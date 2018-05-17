import React, {Component} from 'react'
import ProfileCard from '../Home/ProfileCard'

class AboutList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="about-list">
                <div className="about-list__inner">
                    <div className="about-list__col">
                        <div className="about-list__item">
                            <div className="about-list__item__name">ACTIONS</div>
                            <div className="about-list__item__content">
                                <a className="about-list__action" href="#">Subscribe</a>
                                <a className="about-list__action" href="#">Collaborate</a>
                                <a className="about-list__action" href="#">Download</a>
                                <a className="about-list__action" href="#comment">Comment</a>
                                <a className="about-list__action l-button" href="javascript:;"
                                   data-dropdown-placement="right">Flag</a>
                                <div
                                    className="dropdown flag-dropdown u-flex u-flexCol u-flexJustifyCenter l-dropdown">
                                    <a href="#">Duplicate</a>
                                    <a href="#">Spam</a>
                                    <a href="#">Copyright</a>
                                    <a href="#">inappropriate</a>
                                    <a href="#">Other</a>
                                </div>
                            </div>
                        </div>
                        <div className="about-list__item">
                            <div className="about-list__item__name">STATS</div>
                            <div className="about-list__item__content">
                                <div className="about-list__part"><b>335</b> Subscriptions</div>
                                <div className="about-list__part"><b>16</b> Collaborations</div>
                                <div className="about-list__part"><b>80</b> Comments</div>
                            </div>
                        </div>
                        <div className="about-list__item">
                            <div className="about-list__item__name">SHARE</div>
                            <div className="about-list__item__content">
                                <div className="about-list__part"><a href="#" id="share-twitter">Twitter</a></div>
                                <div className="about-list__part"><a id="share-facebook" href="#">Facebook</a></div>
                                <div className="about-list__part"><a id="share-hacker" href="#">Hacker News</a>
                                </div>
                                <div className="about-list__part"><a id="share-reddit" href="#">Reddit</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-list__col">
                        <div className="about-list__item">
                            <div className="about-list__item__name">CURATED BY</div>
                            <div className="about-list__item__content">
                                <ProfileCard/>
                            </div>
                        </div>
                        <div className="about-list__item">
                            <div className="about-list__item__name">TAGS</div>
                            <div className="about-list__item__content">
                                {/*<div className="about-list__part">{{tag['title']}}</div>*/}
                                <div className="about-list__part">No Tags</div>
                            </div>
                        </div>
                        <div className="about-list__item">
                            <div className="about-list__item__name">REGION</div>
                            <div className="about-list__item__content">
                                {/*<div className="about-list__part">{{tablelocation.locations.locationName}}</div>*/}
                                <div className="about-list__part">No Region</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutList