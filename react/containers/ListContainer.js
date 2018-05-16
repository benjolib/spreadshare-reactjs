import React, {Component} from 'react'

class ListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="re-page re-page--list">
                <div className="list-page-space">
                    <div className="re-image"
                         style={{background: "#f5f5f5 url('https://picsum.photos/894/258/?image=table1') center / cover;"}}/>
                    <div className="re-pre-heading-info">
                        <div>topic1</div>
                        <div className="re-green">36 SUBSCRIBERS</div>
                        <div className="re-lighten">23-06-2017</div>
                    </div>
                    <h1 className="re-heading re-heading--list">title</h1>
                    <h2 className="re-subheading re-subheading--list">tagline</h2>
                    <p className="re-para">description</p>
                    <a className="re-button re-button--double-line" href="#">
                        Subscribe
                        <div className="re-button__extra-text">Get new listings to your inbox</div>
                    </a>
                </div>

                <div className="table-scroll">
                    <table className="re-table re-table--list" data-id="{{ table['id'] }}">
                        <thead>
                        <tr>
                            <th>
                                <div className="l-button">VOTES <img src="/static/images/updown.svg"
                                                                     className="updown"/></div>
                                <div className="dropdown sort-dropdown u-flex u-flexCol u-flexJustifyCenter l-dropdown">
                                    <a href="#"><img src="/static/images/lightning.svg"/> Sort by
                                        <span>Popularity</span></a>

                                    <a href="#?orderby=date" className="warning-color"><img
                                        src="/static/images/clock.svg"/> Sort by <span>Newest</span></a>
                                </div>
                            </th>
                            <th className="shadowcontainth"/>
                            <th>image</th>
                            <th>title</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr data-id="{{ row['id'] }}" className="list-row-tr">
                            <td>
                                <a href="#"
                                   className="j_listing-vote vote-link {{ row['userHasVoted'] ? 'vote-link--upvoted' : '' }}">
                                    <img className="vote-link__image" src="/static/images/vote-lightning.svg"/>
                                    <img className="vote-link__image vote-link__image--green"
                                         src="/static/images/vote-lightning-green.svg"/>
                                    <div>21</div>
                                </a>
                            </td>
                            <td className="shadowcontaintd">
                                <div className="shadowcontain">
                                    <div className="l-button"
                                         style={{position: 'absolute',top: 0,right: '6px',pointerEvents: 'all',cursor: 'pointer'}}>
                                        <img src="/static/images/dotdotdot.svg"/></div>
                                    <div
                                        className="dropdown list-row-remove-dropdown u-flex u-flexCol u-flexJustifyCenter l-dropdown">
                                        <a href="#"><img src="/static/images/bin.svg"/> Request to remove</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="re-table__list-image"
                                     style={{background: "#f5f5f5 url('https://picsum.photos/894/258/?image=table1') center / cover;"}}/>
                            </td>
                            <td style={{minWidth: "480px"}}>ggg</td>
                        </tr>
                        <tr className="re-table-space"/>
                        <tr className="list-row-tr">
                            <td className="pagination-td">
                                <div className="pagination">
                                    <a href="#"> {`<<`}</a>
                                    <a href="#"> {`<`}</a>

                                    <a className="active" style={{color:'red'}} href="#">p</a>

                                    <a href="#">></a>
                                    <a href="#">>></a>
                                </div>
                            </td>
                        </tr>
                        <tr id="addAListingRowSpace" className="re-table-space" style={{display: 'none'}}/>
                        <tr id="addAListingRow" className="list-row-tr list-row-tr--add-row" style={{display: 'none'}}>
                            <td>
                                <a href="#" className="vote-link">
                                    <img className="vote-link__image" src="/static/images/vote-lightning.svg"/>
                                    <div>0</div>
                                </a>
                            </td>
                            <td className="shadowcontaintd">
                                <div className="shadowcontain"/>
                            </td>
                            <td>
                                <div className="re-table__list-image re-table__list-image--new-row" id="addRowImage"/>
                                <input type="file" name="image" id="fileUpload" style={{display: 'none'}}/>
                            </td>
                            <td><textarea placeholder="{{ column.title }}" rows="1"
                                          oninput="$(this).height(5);$(this).height($(this).prop('scrollHeight'))"/>
                            </td>
                        </tr>
                        <tr className="re-table-space"/>
                        </tbody>
                    </table>
                </div>
                <div className="addAListingSubmitAndCancel" id="addAListingSubmitAndCancel" style={{display: 'none'}}>
                    <a className="re-button re-button--list-add-row" href="#" id="addAListingSubmit">Submit</a>
                    <a className="re-button re-button--list-add-row re-button--grey" href="#" id="addAListingCancel">Cancel</a>
                </div>
                <a id="addAListingButton"
                   className="re-button re-button--double-line re-button--full-width re-button--tall re-button--grey"
                   href="#">
                    Collaborate
                    <div className="re-button__extra-text">And reach 25 subscribers of this
                        list
                    </div>
                </a>
            </div>
        )
    }
}

export default ListContainer