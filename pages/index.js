import React, {Fragment, Component} from 'react';
import Header from '../react/components/Header';
import Footer from '../react/components/Footer';
import Navbar from '../react/components/Navbar';
import '../sass/styles.scss'
import HomeContainer from '../react/containers/HomeContainer'

export default class index extends Component {

    /*static async getInitialProps ({ req, query }) {
        console.log(query)
    }*/

    render() {
        return (
            <Fragment>
                <Header/>
                <Navbar/>

                <HomeContainer/>

                <Footer/>
            </Fragment>
        );
    }
}
