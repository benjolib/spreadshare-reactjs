import React, {Component} from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import FilterDropDown from '../components/Home/FilterDropDown'
import ListCard from '../components/Home/ListCard'
import ActionCard from '../components/Home/ActionCard'
import ProfileCard from '../components/Home/ProfileCard'

class HomeContainer extends Component {

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
            <div className="re-page re-page--large">

                <HomeHeader/>
                <FilterDropDown/>

                <div className="u-flex u-flexWrap gutter home-top-margin-bottom">
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                </div>

                <div className="u-flex u-flexWrap gutter">
                    <ListCard/>
                    <ActionCard/>
                    <ListCard/>
                    <ActionCard/>
                    <ListCard/>
                    <ListCard/>
                </div>

                <div className="home-heading home-heading--type2 u-flex">
                    <div className="home-heading__text">Featured Curators</div>
                    <div className="home-heading__line u-flexGrow1"/>
                </div>
                <div className="home-featured-curators">
                    <div className="u-flex">
                        <ProfileCard/>
                        <ProfileCard/>
                        <ProfileCard/>
                    </div>
                    <div className="u-flex">
                        <ProfileCard/>
                        <ProfileCard/>
                        <ProfileCard/>
                    </div>
                </div>

                <div className="u-flex u-flexWrap gutter">
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                </div>

            </div>
        )
    }
}

export default HomeContainer