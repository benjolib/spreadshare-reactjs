import React, {Component} from 'react'
import ProfileCard from '../Home/ProfileCard'

class CollaboratorsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collaboratorList: [1, 2]
        }
    }

    render() {

        let {collaboratorList} = this.state

        return (
            <div className="list-tab-content list-tab-content-collaborators" style={{display: ''}}>
                <div className="list-tab-content-collaborators__card">
                    <ProfileCard/>
                </div>
                <div className="list-tab-content-collaborators__card">
                    <ProfileCard/>
                </div>
                <div className="list-tab-content-collaborators__card">
                    <ProfileCard/>
                </div>

                {
                    !collaboratorList.length &&
                    <div className="empty-collaborators">
                        No Collaborators
                    </div>
                }

            </div>
        )
    }
}

export default CollaboratorsList