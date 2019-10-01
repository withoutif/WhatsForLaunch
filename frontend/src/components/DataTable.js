import React, { Component } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import { launchCols } from '../models';

class DataTable extends Component (){

    constructor(props) {
        super(props);
    }

    render() {
    return(
        <div>
            <h1>Rocket</h1>
            <ReactTable
                data = {this.props.launch}
                columns = {launchCols}
            />
            {/*TODO something for images if time permits*/}
        </div>
    );
    }
}
DataTable.PropTypes = {
    launch: PropTypes.string.isRequired
};

export default DataTable;