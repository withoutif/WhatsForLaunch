import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import toPairs from 'lodash/toPairs';
import AccordionList from './AccordionList';
//import { getMissions, getLaunchCount, getSpecificLaunch } from '../services/missionDataService'
import axiosAPI from '../services/axiosAPI';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
            limit: 5,
            pagecount: 0,
        };
    }

     async componentDidMount() {
         let missionData = await axiosAPI.get(`/missions/${this.state.offset}/${this.state.limit}`);
         let missions = missionData.data;
         //Convert object to array for the purpose of pushing data around
         //missions.forEach(function(value) {console.log(toPairs(value))});

         //console.log(missions);
         let countData = await axiosAPI.get('/count');
         let missionCount = countData.data;
         const pages = missionCount / this.state.limit;
         this.setState({
             data: missions,
             pagecount: pages
         });
     }

    handlePageClick(pageNumber) {
       /* let selected = pageNumber.selected;
        let offset = Math.ceil(selected * this.props.limit);

        const data = await getMissions(offset, this.props.limit);

        this.setState({
            offset:offset,
            data: data
        });*/
        return () => {"hi"};
    };

    render() {
        const {
            data,
            offset,
            totalItems,
        } = this.state;
        return (
            <div className="accordion-container">
                <AccordionList data={this.state.data} />
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'~~~'}
                    breakClassName={'break-styles'}
                    pageCount={this.state.pagecount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick()}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }
}

App.propTypes = {
  config: PropTypes.object.isRequired
};

export default App;