import React, {Component} from 'react'
import ProfileCard from '../Home/ProfileCard'

class DiscussionSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: true
        }
    }

    render() {

        let {comments} = this.state

        return (
            <div className="list-tab-content list-tab-content-discussion j_table-discussion" id="comment">
                {
                    comments ?
                        <div>
                            <div>
                                <button
                                    className="re-button re-button--full-width re-button--tall re-button--list-discussion">
                                    Write a Response
                                </button>
                                <form method="POST" action="/list/{{ table['id'] }}" style={{display: ''}}>
                                    <input type="hidden" name="parentId" value=""/>
                                    <div className="discussion-textarea">
                                        <textarea name="comment" placeholder="Write comment here..." minLength="3"
                                                  maxLength="300"/>
                                        <button>Send</button>
                                    </div>
                                </form>
                            </div>

                            <div className="u-flex comment">
                                <a href="#" className="j_comment-vote vote-link vote-link--discussion"
                                   data-id="{{ comment['id'] }}">
                                    <img className="vote-link__image" src="/static/images/vote-lightning.svg"/>
                                    <img className="vote-link__image vote-link__image--green"
                                         src="/static/images/vote-lightning-green.svg"/>
                                    <div>25</div>
                                </a>
                                <ProfileCard/>
                                <div className="comment-clock"><img
                                    src="/static/images/comment-clock.svg"/>
                                    17-05-2018
                                </div>
                            </div>
                            <div className="u-flex comment" style={{marginLeft: '71px'}}>
                                <a href="#" className="j_comment-vote vote-link vote-link--discussion"
                                   data-id="{{ childComment['id'] }}">
                                    <img className="vote-link__image" src="/static/images/vote-lightning.svg"/>
                                    <img className="vote-link__image vote-link__image--green"
                                         src="/static/images/vote-lightning-green.svg"/>
                                    <div>12</div>
                                </a>
                                <ProfileCard/>
                                <div className="comment-clock"><img src="/static/images/comment-clock.svg"/>17-5-2018
                                </div>
                            </div>

                            <form method="POST" action="/list/{{ table['id'] }}"
                                  style={{display: '', marginLeft: '80px', marginTop: '8px'}}>
                                <input type="hidden" name="parentId" className="commentParentId" value=""/>
                                <div className="discussion-textarea">
                                    <textarea name="comment" className="commentTextArea"
                                              placeholder="Write comment here..."
                                              minLength="3" maxLength="300"/>
                                    <button>Send</button>
                                </div>
                            </form>
                        </div>
                        :
                        <div className="empty-discussion">
                            No Comments
                        </div>
                }
            </div>
        )
    }
}

export default DiscussionSection

