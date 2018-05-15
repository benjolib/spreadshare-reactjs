import React, {Component} from 'react'

class HomeHeader extends Component {

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
            <div className="home-heading u-flex">

                <div className="home-heading__text home-heading-button clickable l-button"
                     data-dropdown-placement="bottom-start" data-dropdown-target=".home-heading-dropdown">
                    <img src="/static/images/home-arrow-down.svg"/>
                </div>

                <div className="home-heading__line u-flexGrow1">
                    <div className="home-secondary-filters-desktop">
                        <a href="#" className="active">Recommended</a>
                        <a href="#"
                           className="{% if secondSelection is 'trending' %}active{% endif %}">Trending</a>
                        <a href="#"
                           className="{% if secondSelection is 'newest' %}active{% endif %}">Newest</a>
                    </div>
                    <div className="home-secondary-filters-mobile">
                        <div className="l-button button">secondSelectionName<img
                            src="#"/></div>
                        <div className="l-dropdown dropdown secondary-filter-dropdown">
                            <a href="#" className="active">Recommended</a>
                            <a href="#"
                               className="{% if secondSelection is 'trending' %}active{% endif %}">Trending</a>
                            <a href="#" className="
                                    {% if secondSelection is 'newest' %}active{% endif %}">Newest</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader