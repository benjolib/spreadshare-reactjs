import React, {Component} from 'react'

class FilterDropDown extends Component {

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
            <div className="l-dropdown dropdown u-flex home-heading-dropdown">
                <div className="u-flex u-flexCol home-heading-dropdown__col1">
                    <a href="/" className="active">
                        <div><img
                            src="/static/images/diamond-green.svg"/>
                        </div>
                        Recommended</a>
                    <a href="#" className="{% if selection is 'trending' %}active{% endif %}">
                        <div><img
                            src="/static/images/lightning.svg"/>
                        </div>
                        Trending</a>
                    <a href="#"
                       className="{% if selection is 'recently-added' %}active{% endif %}">
                        <div><img
                            src="/static/images/clock.svg"/>
                        </div>
                        Recently Added</a>
                    <a href="#"
                       className="space-below {% if selection is 'most-viewed' %}active{% endif %}">
                        <div><img
                            src="/static/images/eye.svg"
                            className="icon-eye"/></div>
                        Most Viewed</a>

                    <a href="#"
                       className="{% if selection is 'san-francisco' %}active{% endif %}">
                        <div><img
                            src="/static/images/waypoint.svg"/>
                        </div>
                        San Francisco</a>
                    <a href="#" className="active">
                        <div><img
                            src="/static/images/waypoint-green.svg"/>
                        </div>
                        New York</a>
                    <a href="#" className="{% if selection is 'london' %}active{% endif %}">
                        <div><img
                            src="/static/images/waypoint.svg"/>
                        </div>
                        London</a>
                    <a href="#" className="{% if selection is 'berlin' %}active{% endif %}">
                        <div><img
                            src="/static/images/waypoint.svg"/>
                        </div>
                        Berlin</a>
                    <a href="#" className="greyed-out">
                        <div><img src="/static/images/waypoint.svg"/></div>
                        City missing?</a>
                </div>
                <div className="u-flex u-flexCol u-md-flexRow">
                    <div className="u-flex u-flexCol home-heading-dropdown__col2">
                        <a href="#" className="{% if selection is 'ai' %}active{% endif %}">AI</a>
                        <a href="#"
                           className="{% if selection is 'blockchain' %}active{% endif %}">Blockchain</a>
                        <a href="#"
                           className="{% if selection is 'bots' %}active{% endif %}">Bots</a>
                        <a href="#"
                           className="{% if selection is 'business' %}active{% endif %}">Business</a>
                        <a href="#"
                           className="{% if selection is 'crypto' %}active{% endif %}">Crypto</a>
                        <a href="#" className="{% if selection is 'culture' %}active{% endif %}">Culture</a>
                        <a href="#"
                           className="{% if selection is 'design' %}active{% endif %}">Design</a>
                        <a href="#"
                           className="{% if selection is 'engineering' %}active{% endif %}">Engineering</a>
                        <a href="#" className="{% if selection is 'finance' %}active{% endif %}">Finance</a>
                        <a href="#"
                           className="{% if selection is 'fundraising' %}active{% endif %}">Fundraising</a>
                        <a href="#"
                           className="{% if selection is 'growth' %}active{% endif %}">Growth</a>
                    </div>
                    <div className="u-flex u-flexCol home-heading-dropdown__col3">
                        <a href="#"
                           className="{% if selection is 'hiring' %}active{% endif %}">Hiring</a>
                        <a href="#"
                           className="{% if selection is 'marketing' %}active{% endif %}">Marketing</a>
                        <a href="#"
                           className="{% if selection is 'media' %}active{% endif %}">Media</a>
                        <a href="#"
                           className="{% if selection is 'operations' %}active{% endif %}">Operations</a>
                        <a href="#"
                           className="{% if selection is 'people' %}active{% endif %}">People</a>
                        <a href="#"
                           className="{% if selection is 'press' %}active{% endif %}">Press</a>
                        <a href="#" className="{% if selection is 'product' %}active{% endif %}">Product</a>
                        <a href="#"
                           className="{% if selection is 'research' %}active{% endif %}">Research</a>
                        <a href="#"
                           className="{% if selection is 'tech' %}active{% endif %}">Tech</a>
                        <a href="#"
                           className="{% if selection is 'everything-else' %}active{% endif %}">Everything
                            else</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterDropDown