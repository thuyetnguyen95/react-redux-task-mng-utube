import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = { keyword: '' }
        this.handleSearch = this.handleSearch.bind(this);
    }

    /**
     * Hmm, I think function name is clear
     *
     * @memberof Search
     */
    handleSearch() {
        this.props.handleSearch(this.state.keyword.trim());
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text"
                        name="keyword"
                        value={this.state.keyword}
                        className="form-control"
                        onChange={(e) => { this.setState({ keyword: e.target.value })}}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={this.handleSearch}>
                            <span className="fa fa-search mr-5"></span>Tìm
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;