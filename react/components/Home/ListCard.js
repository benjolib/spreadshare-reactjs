import React, {Component} from 'react'

class ListCard extends Component {

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
            <div className="list-card {{ large ? 'list-card--large' : '' }} {{ half ? 'list-card--half' : '' }}">
                <a href="#">
                    <div className="list-card__image" style={{background: "#f5f5f5 url('https://picsum.photos/872/258/?image=1') center / cover"}}>
                        <div className="list-card__listingCount">85 LISTINGS</div>
                    </div>
                </a>
                <div className="u-flex u-flexJustifyBetween">
                    <a href="#"><h3 className="list-card__name"> Remote CTO's </h3></a>
                    <a href="#" className="list-card__subscriberCount u-flex u-flexAlignItemsCenter"><img src="/static/images/mail.svg" /> 99 </a>
                </div>
                <p className="list-card__description">For CTO's looking for a new remote job and companies looking to hire, curated by Remote</p>
            </div>
        )
    }
}

export default ListCard