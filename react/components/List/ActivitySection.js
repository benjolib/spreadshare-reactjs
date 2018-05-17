import React, {Component} from 'react'

class ActivityList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="list-tab-content list-tab-content-activity" style={{display: ''}}>
                <div className="empty-activity">
                    No Activity
                </div>
            </div>
        )
    }
}

export default ActivityList