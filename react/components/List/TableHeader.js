import React, {Component} from 'react'

class TableHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
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
                <th>title1</th>
                <th>title2</th>
                <th>title3</th>
                <th>title4</th>
            </tr>
        )
    }
}

export default TableHeader