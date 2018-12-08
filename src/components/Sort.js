import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Sort extends Component {

    constructor(props) {
        super(props);
        
        this.state = { sortType: 0 }
    }
    
    /**
     * You need to comment for this ???
     *
     * @param {*} sortType
     * @memberof Sort
     */
    handleSort(sortType) {
        this.setState({ sortType: sortType })
        this.props.handleSort(sortType)
    }

    /**
     * Display selected sort
     * 
     * @return {string} labelName
     * @memberof Sort
     */
    getLabelName = () => {
        let labelName = '';
        switch (this.state.sortType) {
            case 2: labelName = 'Tên Z-A'; break;
            case 3: labelName = 'Trạng thái (hoạt động)'; break;
            case 4: labelName = 'Trạng thái (hoàn thành)'; break;
            default: labelName = 'Tên A-Z';
        }

        return labelName;
    }

    render() {
        let labelName = this.getLabelName();

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown col-xs-6 col-sm-3 col-md-3"><button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span></button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.handleSort(1)}><a href="#name-asc" role="button" className={this.state.sortType === 1 ? 'sort_selected' : '' }><span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></a></li>
                        <li onClick={() => this.handleSort(2)}><a href="#name-desc" role="button" className={this.state.sortType === 2 ? 'sort_selected' : '' }><span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span></a></li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.handleSort(3)}><a href="#status-on" role="button" className={this.state.sortType === 3 ? 'sort_selected' : '' }><span className="fa fa-long-arrow-down"></span> Hoạt động</a></li>
                        <li onClick={() => this.handleSort(4)}><a href="#status-off" role="button" className={this.state.sortType === 4 ? 'sort_selected' : '' }><span className="fa fa-long-arrow-down"></span>Hoàn thành</a></li>
                    </ul>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <p style={{margin: 0, lineHeight: '34px'}}>
                        <span className="label label-success" style={{padding: '5px 10px'}}>{labelName}</span>
                    </p>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleSort: sortType => {
            dispatch(actions.sortTask(sortType));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);