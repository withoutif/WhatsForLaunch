import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import AccordionDrawer from './AccordionDrawer';

class AccordionList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="project-comments" className="commentList">
{/*                <AccordionDrawer
                mission_patch_small = {this.props.data["mission_patch_small"]}
                mission_name = {this.props.data["mission_name"]}
                launch_date_unix = {this.props.data["launch_date_unix"]}
                flight_number = {this.props.data["flight_number"]}
                />*/}
            </div>
        );
    }
};

 AccordionList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default AccordionList;