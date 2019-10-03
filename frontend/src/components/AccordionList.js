import React, { Component } from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash/includes';
import AccordionDrawer from './AccordionDrawer';

class AccordionList extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const faves = this.props.favorites;
        let accordionData = this.props.data.map(function(data, index) {
            let isFavorite = false;
            let flightNumber = data["flight_number"];
            console.log(flightNumber.toString());
            console.log(faves);

            if (includes(faves, flightNumber.toString())){
                console.log('is fave');
                console.log(data["flight_number"]);
                isFavorite = true;
            }
            //TODO: there has to be a better way to split this data out
            return <AccordionDrawer
                key={index}
                mission_patch_small={data["mission_patch_small"]}
                mission_name = {data["mission_name"]}
                launch_date_unix = {data["launch_date_unix"]}
                flight_number = {data["flight_number"]}
                details = {data["details"]}
                rocket = {data["rocket"]}
                payloads = {data["payloads"]}
                favorite = {isFavorite}
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
    favorites: PropTypes.array
};

 AccordionList.defaultProps = {
     favorites: []
 };

export default AccordionList;