import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props) {
        super(props);
        
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    /**
     * Just write something
     *
     * @param {*} keyWord
     * @memberof Control
     */
    handleSearch(keyWord) {
        this.props.handleSearch(keyWord)
    }

    /**
     * Nothing to comment
     *
     * @param {*} sortType
     * @memberof Control
     */
    handleSort(sortType) {
        this.props.handleSort(sortType)
    }

    render() {

        return (
            <div className="row mt-15">
                <Search handleSearch={this.handleSearch} />
                <Sort handleSort={this.handleSort} />
            </div>
        );
    }
}

export default Control;