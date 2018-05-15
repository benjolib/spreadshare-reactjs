import React, {Component} from 'react'

class ActionCard extends Component {

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
            <div className="action-card action-card--green">
                <div className="action-card__inner">
                    <h2 className="action-card__heading">heading</h2>
                    <p className="action-card__text">text</p>
                    <a href="#" className="action-card__button">buttonText</a>
                </div>
            </div>
        )
    }
}

export default ActionCard