import React, {Component} from 'react'
import ProfileCard from '../Home/ProfileCard'

class SubscribersList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subscriberList: [1, 3]
        }
    }

    render() {

        let {subscriberList} = this.state

        return (
            <div className="list-tab-content list-tab-content-subscribers" style={{display: ''}}>
                <div className="list-tab-content-subscribers__card">
                    <ProfileCard/>
                </div>
                <div className="list-tab-content-subscribers__card">
                    <ProfileCard/>
                </div>
                <div className="list-tab-content-subscribers__card">
                    <ProfileCard/>
                </div>

                {
                    !subscriberList.length &&
                    <div className="empty-subscribers">
                        No Subscribers
                    </div>
                }
            </div>
        )
    }
}

export default SubscribersList