import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionDrawer from './AccordionDrawer';


class AccordionList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let accordionData = this.props.data.map(function(data, index) {
            //TODO: there has to be a better way to split this data out
            return <AccordionDrawer
                key={data["flight_number"]}
                mission_patch_small={data["mission_patch_small"]}
                mission_name = {data["mission_name"]}
                launch_date_unix = {data["launch_date_unix"]}
                flight_number = {data["flight_number"]}
                details = {data["details"]}
                rocket = {data["rocket"]}
                payloads = {data["payloads"]}
            />;
        });
        return (
            <div id="accordion-rows">
                <ul>{accordionData}</ul>
            </div>
        );
    }
};

 AccordionList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default AccordionList;