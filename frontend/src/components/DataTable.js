import React, { Component } from 'react';
import ObjectTable from 'react-object-table'
import PropTypes from 'prop-types';
import { payloadCols, rocketCols } from '../models';

class DataTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //even with the column set to hidden, the images array is janky with ReactTable
        const mappedRocket = this.props.rocket;
        mappedRocket["images"] = " ";
    return(
        <div>
            <h1>Mission Description</h1>
            <div>{this.props.details}</div>
            <h1>Rocket</h1>
            <ObjectTable
                objects = {[mappedRocket]}
                columns = {rocketCols}
            />
            <h1>Payloads</h1>
            <ObjectTable
                objects = {this.props.payloads}
                columns = {payloadCols}
            />
        </div>
    );
    }
}
DataTable.propTypes = {
    rocket: PropTypes.object.isRequired,
    payloads: PropTypes.array.isRequired
};

export default DataTable;