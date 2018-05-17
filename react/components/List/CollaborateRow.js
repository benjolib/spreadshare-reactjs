import React, {Component} from 'react'

class TableRow extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
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
                         style={{background: "#f5f5f5 url('https://picsum.photos/894/258/?image=2') center / cover"}}/>
                </td>
                <td style={{minWidth: "150px"}}>ggg</td>
                <td style={{minWidth: "150px"}}>ggg</td>
                <td style={{minWidth: "150px"}}>ggg</td>
                <td style={{minWidth: "150px"}}>ggg</td>
            </tr>
        )
    }
}

export default TableRow