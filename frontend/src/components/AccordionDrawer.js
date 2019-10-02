import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import qs from 'qs';
import DataTable from './DataTable';
import axiosAPI from '../services/axiosAPI';
import { config } from '../../config';


class AccordionDrawer extends Component {

    constructor(props) {
        super(props);
        this.favorite = this.props.favorite;
        this.favoriteItem = this.favoriteItem.bind(this);
    }

    //this should probably be kept in state somewhere
    async favoriteItem() {
        const data = {
            userId: config.defaultUserId,
            flightnumber: this.props.flight_number
        };
        const axiosData = qs.stringify(data);
        const options ={
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        if (this.favorite ) {
            await axiosAPI.post('/favorite/remove', axiosData, options);
            alert("Removed from favorites");
        } else {
            await axiosAPI.post('/favorite/add', axiosData, options);
            alert("Added to favorites");
        }
        this.favorite = !this.favorite;
    }

    getHeader() {
        return (
            <div>
                <img src={this.props.mission_patch_small}/>
                <span>{this.props.mission_name}</span>
                <span>{this.props.launch_date_unix}</span>
                <span>{this.props.flight_number}</span>
                <button onClick={this.favoriteItem}>
                    Favorite!
                </button>
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
                       key={this.props.flight_number}
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
    favorite: PropTypes.bool
};
AccordionDrawer.defaultProps = {
    details: "None available",
    favorites: [],
    favorite: false
};


export default AccordionDrawer;
