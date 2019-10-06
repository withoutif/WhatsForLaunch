import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import qs from 'qs';
import includes from 'lodash/includes';
import flatten from 'lodash/flatten';
import DataTable from './DataTable';
import axiosAPI from '../services/axiosAPI';
import { config } from '../../config';
import Star from './StarIcon';

import '../../public/styles/accordionDrawerStyles.css';

class AccordionDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            isFavorite: false,
            fill: '#fff'
        };

        this.favoriteItem = this.favoriteItem.bind(this);
    }


    async componentDidMount() {

        let favoriteData = await axiosAPI.get(`/favorite/view/${config.defaultUserId}`);
        let favorites = favoriteData.data;
        const userFaves = flatten(favorites);

        const isFavorite = includes(userFaves, this.props.flight_number.toString());

        this.setState({
            favorites: userFaves,
            isFavorite: isFavorite,
            fill: isFavorite ? '#FFCE0F' : '#fff'
        });
    }

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
        };

        if (this.state.isFavorite ) {
            await axiosAPI.post('/favorite/remove', axiosData, options);
        } else {
            await axiosAPI.post('/favorite/add', axiosData, options);
        }
        this.setState({
            fill: !this.state.isFavorite ? '#FFCE0F' : '#fff',
            isFavorite: !this.state.isFavorite
        });
    }

    getHeader() {
        const image = this.props.mission_patch_small ?
            (<img src={this.props.mission_patch_small} className="default-image"/>):
            (<span className="no-image">This mission has no patch</span>);
        return (
            <div className="drawer-header">
                <div className="table-row">
                    {image}
                    <span className="header-text" >{this.props.mission_name}</span>
                    <span className="header-text" >{this.props.launch_date_unix}</span>
                    <span className="header-text" >{`Flight# ${this.props.flight_number}`}</span>
                    <div className="button-container">
                        <button onClick={this.favoriteItem} className="button-style">
                            <Star width="50px" height="50px" viewBox="0 -40 80 100"  fill={this.state.fill}/>
                        </button>
                    </div>
                </div>
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
    mission_patch_small: PropTypes.string,
    mission_name: PropTypes.string.isRequired,
    launch_date_unix: PropTypes.string.isRequired,
    flight_number: PropTypes.number.isRequired,
    details: PropTypes.string,
    rocket: PropTypes.object.isRequired,
    payloads: PropTypes.array.isRequired,
};
AccordionDrawer.defaultProps = {
    details: "None available",
    mission_patch_small: undefined
};


export default AccordionDrawer;
