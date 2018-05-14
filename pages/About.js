import React, { Fragment, Component } from 'react';
import { Header, Navbar, Footer } from '../react/components';
import { AboutContainer } from '../react/containers';
import '../sass/styles.scss'

export default class About extends Component {

	/*static async getInitialProps ({ req, query }) {
		console.log(query)
	}*/

	static defaultProps = {
	  active: 'vision'
  }

  render() {

    return (
      <Fragment>
        <Header/>
        <Navbar/>

        <section className="main">
          <AboutContainer active={this.props.active}/>
        </section>

        <Footer/>
      </Fragment>
    );
  }
}
