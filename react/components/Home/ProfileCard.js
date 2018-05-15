import React, {Component} from 'react'

class ProfileCard extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(props) {
    }

    render() {
        return (
            <div className="profile-card u-flex {{ type != 9 ? 'u-flexAlignItemsCenter' : '' }} {{ type == 3 ? 'profile-card--type3' : '' }} profile-card--type4 {{ type == 9 ? 'profile-card--type9' : '' }} {{ type == 10 ? 'profile-card--type10' : '' }}">
                <a href="#"><img className="profile-card__avatar" src="https://cdn-images-1.medium.com/fit/c/100/100/1*iRHlXdQhKPpyNJ0w6f7ijw.jpeg" onerror="this.onerror=null;this.src='http://beta.spreadshare.co/assets/images/eleven.png';" /></a>
                <div>
                    <a href="#"><span className="profile-card__name"> Andrew Coyle </span></a> <a href="#" className="profile-card__follow reply reply-maincomment reply-subcomment" data-handle="{{ username }}" data-id="commentId">Reply</a><a href="#" className="profile-card__follow">Follow</a>
                    <p className="profile-card__bio">Designing the future of global trade </p>
                    <p className="profile-card__bio">@Flexport. Curating lists at Spreadshare. </p>
                </div>
            </div>
        )
    }
}

export default ProfileCard