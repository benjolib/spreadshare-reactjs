import React, {Fragment, Component} from 'react';
import Header from '../react/components/Header';
import Footer from '../react/components/Footer';
import Navbar from '../react/components/Navbar';

import ListContainer from '../react/containers/ListContainer'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Navbar/>

                <ListContainer/>

                <Footer/>
            </Fragment>
        )
    }
}

export default List