import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import DataTable from './DataTable';

class AccordionDrawer extends Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
                <Collapsible trigger={this.getHeader()}>
                   <DataTable
                       rocket={this.props.rocket}
                       payloads={this.props.payloads}
                       details={this.props.details}
                   />
                </Collapsible>
            </div>
        );
    }
}

AccordionDrawer.propTypes = {
    mission_patch_small: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    launch_date_unix: PropTypes.string.isRequired,
    flight_number: PropTypes.number.isRequired,
    details: PropTypes.string,
    rocket: PropTypes.object.isRequired,
    payloads: PropTypes.array.isRequired,
};
AccordionDrawer.defaultProps = {
    details: "None available"
};


export default AccordionDrawer;
