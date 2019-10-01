import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';

class AccordionDrawer extends Component () {

    constructor(props) {
        super(props);

        this.data = {
         "mission_name": props.mission_name,
         "launch_date_unix": props.mission_name,
         "flight_number": props.flight_number
         };
    }

/*    favoritesButtonOnClick() {

    }*/

//favorite happens in one of these controls
    getHeader() {
        return (
            <div>
                <img src={this.props.mission_patch_small}/>
                {this.props.mission_name}
                {this.props.launch_date_unix}
                {this.props.flight_number}
                <button>Favorite</button>
            </div>
        );
    }

    onOpen(){
        //rotate arrow
    }


    render() {
        return (
            <div>
                <Collapsible trigger={this.getHeader()}>
                    <DataTable launch={this.data} />
                </Collapsible>
            </div>
        );
    }
}

AccordionDrawer.PropTypes = {
    mission_patch_small: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    launch_date_unix: PropTypes.string.isRequired,
    flight_number: PropTypes.number.isRequired
};

export default AccordionDrawer;
