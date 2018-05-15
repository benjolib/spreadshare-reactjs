import React, { Fragment, Component } from 'react';
import { Header, Navbar, Footer } from '../react/components';
import { FeedContainer } from '../react/containers';
import '../sass/styles.scss'

export default class Feed extends Component {

	/*static async getInitialProps ({ req, query }) {
		console.log(query)
	}*/

	static defaultProps = {
	  active: 'token'
  }

  render() {

    return (
      <Fragment>
        <Header/>
        <Navbar/>

        <section className="main">
          <FeedContainer/>
        </section>

        <Footer/>
      </Fragment>
    );
  }
}
