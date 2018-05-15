import React, {Component} from 'react'

class CreateTableCard extends Component {

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
            <div className="tables__content__main__cards__item center" id="no-results"
                 style={{padding: '40px'}}>
                <div>
                    <img src="/static/images/desktop.png" alt=""/>
                    <p>&nbsp;</p>
                    <p>We couldn't find any tables matching your search.</p>
                    <p>&nbsp;</p>
                    <p><a className="button bold" href="#">Create Table</a></p>
                </div>
            </div>
        )
    }
}

export default CreateTableCard