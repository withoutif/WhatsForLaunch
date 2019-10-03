import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import qs from 'qs';
import DataTable from './DataTable';
import axiosAPI from '../services/axiosAPI';
import { config } from '../../config';
import Star from './StarIcon';
//import Star from 'raw-loader!../../public/images/star.svg';

import '../../public/styles/accordionDrawerStyles.css';

class AccordionDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorite: this.props.favorite,
            fill: this.props.favorite ? '#FFCE0F' : '#fff'
        };

        this.favoriteItem = this.favoriteItem.bind(this);
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

        if (this.state.favorite ) {
            await axiosAPI.post('/favorite/remove', axiosData, options);
        } else {
            await axiosAPI.post('/favorite/add', axiosData, options);
        }
        this.setState({
            fill: !this.state.favorite ? '#FFCE0F' : '#fff',
            favorite: !this.state.favorite
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
    favorite: PropTypes.bool
};
AccordionDrawer.defaultProps = {
    details: "None available",
    favorites: [],
    favorite: false,
    mission_patch_small: undefined
};


export default AccordionDrawer;
