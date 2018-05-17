import React, {Component} from 'react'

class TableNewCollaborate extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <tr id="addAListingRow" className="list-row-tr list-row-tr--add-row">
                <td>
                    <a href="#" className="vote-link">
                        <img className="vote-link__image" src="/static/images/vote-lightning.svg"/>
                        <div>0</div>
                    </a>
                </td>
                <td className="shadowcontaintd">
                    <div className="shadowcontain"/>
                </td>
                <td>
                    <div className="re-table__list-image re-table__list-image--new-row" id="addRowImage"/>
                    <input type="file" name="image" id="fileUpload" style={{display: 'none'}}/>
                </td>
                <td><textarea placeholder="{{ column.title }}" rows="1"/>
                </td>
            </tr>
        )
    }
}

export default TableNewCollaborate