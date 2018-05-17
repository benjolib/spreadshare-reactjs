import React, {Component} from 'react'

class ListHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="list-page-space">
                <div className="re-image"
                     style={{background: "#f5f5f5 url('https://picsum.photos/894/258/?image=1') center / cover"}}/>
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
        )
    }
}

export default ListHeader