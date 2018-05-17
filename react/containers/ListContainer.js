import React, {Component} from 'react'

import ListHeader from '../components/List/ListHeader'
import TableHeader from '../components/List/TableHeader'
import CollaborateRow from '../components/List/CollaborateRow'
import NewCollaborateRow from '../components/List/NewCollaborateRow'
import AboutList from '../components/List/AboutList'
import DiscussionSection from '../components/List/DiscussionSection'
import ActivitySection from '../components/List/ActivitySection'
import SubscribersSection from '../components/List/SubscribersSection'
import CollaboratorsSection from '../components/List/CollaboratorsSection'
import ProfileCard from '../components/Home/ProfileCard'

class ListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeSection: 1
        }
    }

    render() {

        let {activeSection} = this.state

        return (
            <div>
                <div className="re-page re-page--list">
                    <ListHeader/>

                    <div className="table-scroll">
                        <table className="re-table re-table--list" data-id="{{ table['id'] }}">
                            <thead>
                            <TableHeader/>
                            </thead>

                            <tbody>

                            <CollaborateRow/>
                            <CollaborateRow/>
                            <CollaborateRow/>
                            <CollaborateRow/>
                            <CollaborateRow/>

                            <tr className="re-table-space"/>
                            <tr className="list-row-tr">
                                <td className="pagination-td">
                                    <div className="pagination">
                                        <a href="#"> {`<<`}</a>
                                        <a href="#"> {`<`}</a>

                                        <a className="active" style={{color: 'red'}} href="#">1</a>
                                        <a className="" href="#">2</a>
                                        <a className="" href="#">3</a>

                                        <a href="#">></a>
                                        <a href="#">>></a>
                                    </div>
                                </td>
                            </tr>

                            <tr id="addAListingRowSpace" className="re-table-space"/>

                            <NewCollaborateRow/>

                            <tr className="re-table-space"/>

                            </tbody>
                        </table>
                    </div>

                    <div className="addAListingSubmitAndCancel" id="addAListingSubmitAndCancel" style={{display: ''}}>
                        <a className="re-button re-button--list-add-row" href="#" id="addAListingSubmit">Submit</a>
                        <a className="re-button re-button--list-add-row re-button--grey" href="#"
                           id="addAListingCancel">Cancel</a>
                    </div>

                    <a id="addAListingButton"
                       className="re-button re-button--double-line re-button--full-width re-button--tall re-button--grey"
                       href="#">
                        Collaborate
                        <div className="re-button__extra-text">
                            And reach 25 subscribers of this list
                        </div>
                    </a>
                </div>

                <div className="list-page-section-label">
                    ABOUT THIS LIST
                </div>
                <AboutList/>

                <div className="list-page-section-label">
                    RELATED LISTS
                </div>
                <div className="related-lists u-flex u-flexJustifyCenter">
                    <div className="related-lists__inner u-flex u-flexWrap">
                        <div className="related-lists__item">
                            <a href="#">
                                <div className="related-lists__item__name">title
                                    <div className="related-lists__item__staff-pick">STAFF PICK 👏</div>
                                </div>
                            </a>
                            <div className="related-lists__item__descr">tagline</div>
                        </div>
                        <div className="related-lists__item">
                            <a href="#">
                                <div className="related-lists__item__name">title
                                    <div className="related-lists__item__staff-pick">STAFF PICK 👏</div>
                                </div>
                            </a>
                            <div className="related-lists__item__descr">tagline</div>
                        </div>
                        <div className="related-lists__item">
                            <a href="#">
                                <div className="related-lists__item__name">title
                                    <div className="related-lists__item__staff-pick">STAFF PICK 👏</div>
                                </div>
                            </a>
                            <div className="related-lists__item__descr">tagline</div>
                        </div>
                        <div className="related-lists__item">
                            <a href="#">
                                <div className="related-lists__item__name">title
                                    <div className="related-lists__item__staff-pick">STAFF PICK 👏</div>
                                </div>
                            </a>
                            <div className="related-lists__item__descr">tagline</div>
                        </div>
                    </div>
                </div>


                <div className="list-tabs">
                    <div className="list-tabs__inner">
                        <div className="list-tab-buttons">
                            <p className={`list-tab-button list-tab-button-discussion ${activeSection === 1 ? "active" : ''}`}
                               onClick={() => this.setState({activeSection: 1})}
                               onMouseOver={() => this.setState({activeSection: 1})}>DISCUSSION</p>
                            <p className={`list-tab-button list-tab-button-activity ${activeSection === 2 ? "active" : ''}`}
                               onClick={() => this.setState({activeSection: 2})}
                               onMouseOver={() => this.setState({activeSection: 2})}>ACTIVITY</p>
                            <p className={`list-tab-button list-tab-button-subscribers ${activeSection === 3 ? "active" : ''}`}
                               onClick={() => this.setState({activeSection: 3})}
                               onMouseOver={() => this.setState({activeSection: 3})}>SUBSCRIBERS</p>
                            <p className={`list-tab-button list-tab-button-collaborators ${activeSection === 4 ? "active" : ''}`}
                               onClick={() => this.setState({activeSection: 4})}
                               onMouseOver={() => this.setState({activeSection: 4})}>COLLABORATORS</p>
                        </div>

                        {
                            activeSection === 1 ?
                                <DiscussionSection/> : activeSection === 2
                                ? <ActivitySection/> : activeSection === 3
                                    ? <SubscribersSection/> : activeSection === 4
                                    && <CollaboratorsSection/>

                        }

                    </div>
                </div>


            </div>
        )
    }
}

export default ListContainer