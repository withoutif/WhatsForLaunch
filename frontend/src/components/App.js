import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import AccordionList from './AccordionList';

class App extends Component {
    constructor(props) {
        super(props);

        const { missions } = props;
        this.state = {
            data: missions,
            offset: 0,
            totalItems: 5
        };
    }

    transformJsonToArray(){

    }

/*    async componentDidMount() {
        const data = await this.props.offset;
        const stringified = JSON.stringify(data);
        this.setState({
            data: stringified
        });
    }*/

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
        return (
            <div className="accordion-container">
                <span>{this.state.data}</span>
                <AccordionList data={this.state.data} />
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'~~~'}
                    breakClassName={'break-styles'}
                    pageCount={this.state.totalItems}
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
    missions: PropTypes.array.isRequired
};

export default App;