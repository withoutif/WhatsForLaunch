import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import AccordionList from './AccordionList';
import axiosAPI from '../services/axiosAPI';

class App extends Component {
    constructor(props) {
        super(props);

        const {offset, limit } = props;

        this.state = {
            data: [],
            offset: offset || 0,
            limit: limit || 5,
            pagecount: 0,
        };

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    async componentDidMount() {
        let missionData = await axiosAPI.get(`/missions/${this.state.offset}/${this.state.limit}`);
        let missions = missionData.data;

        let countData = await axiosAPI.get('/count');
        let missionCount = countData.data;

        const pages = missionCount / this.state.limit;
        this.setState({
            data: missions,
            pagecount: pages,
        });
    }

    async handlePageClick(data) {
        let selected = data.selected;
        let offset = selected * this.state.limit;

        let missionData = await axiosAPI.get(`/missions/${offset}/${this.state.limit}`);
        let missions = missionData.data;

        this.setState({
            offset: offset,
            data: missions
        });
    };

    render() {
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
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }
}

App.propTypes = {
    offset: PropTypes.number,
    limit: PropTypes.number
};

App.defaultProps = {
    offset: 0,
    limit: 5
};

export default App;