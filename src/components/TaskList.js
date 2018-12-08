import React, { Component } from 'react';
import TaskItem from "./TaskItem";
import { connect } from 'react-redux';
import * as actions from '../actions';

class TaskList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            filterName: '',
            filterStatus: -1,
            taskList: null,
        }

        this.handleFilter = this.handleFilter.bind(this); // Just I like!
    }
    
    /**
     * Handle filter
     *
     * @param {*} event
     * @memberof TaskList
     */
    handleFilter(event) {
        let { name, value } = event.target;
        let filter = {
            filterName: name === 'filterName' ? value : this.state.filterName,
            filterStatus: name === 'filterStatus' ? value : this.state.filterStatus
        }

        this.props.onFilterTable(filter);

        this.setState({
            [name] : value
        });
    }

    sort(tasks, sortType) {
        let tasksSorted = null;
        switch (sortType) {
            case 1: tasksSorted = tasks.sort((prevItem, nextItem) => {
                        let fist = prevItem.name.toLowerCase();
                        let second = nextItem.name.toLowerCase();
                        
                        if (fist < second) { return -1; }    
                        if (fist > second) { return 1; }
                
                        return 0;
                    })
                    break;

            case 2: tasksSorted = tasks.sort((prevItem, nextItem) => {
                        let fist = prevItem.name.toLowerCase();
                        let second = nextItem.name.toLowerCase();
                        
                        if (fist > second) { return -1; }    
                        if (fist < second) { return 1; }
                
                        return 0;
                    })
                    break;
            case 3: tasksSorted = tasks.sort((prevItem, nextItem) => {
                        let fist = prevItem.status;
                        let second = nextItem.status;

                        if (fist > second) { return -1; }    
                        if (fist < second) { return 1; }
                
                        return 0;
                    })
                    break;

            case 4: tasksSorted = tasks.sort((prevItem, nextItem) => {
                        let fist = prevItem.status;
                        let second = nextItem.status;

                        if (fist < second) { return -1; }    
                        if (fist > second) { return 1; }
                
                        return 0;
                    })
                break;

                default: tasksSorted = tasks; break;
        }

        return tasksSorted;
    }

    /**
     * Filter name, status
     *
     * @memberof App
     */
    tasksHasFilter = (tasksFiltered, filterTable, searchKeyWord, sortType) => {
        if (filterTable.name) {
            tasksFiltered = tasksFiltered.filter(item => {
                return item.name.toLowerCase().indexOf(filterTable.name) !== -1;
            });
        }

        if (filterTable.status === 0) {
            tasksFiltered = tasksFiltered.filter(item => item.status);
        }

        if (filterTable.status === 1) {
            tasksFiltered = tasksFiltered.filter(item => !item.status);
        }

        if (searchKeyWord) {
            tasksFiltered = tasksFiltered.filter(item => {
                return item.name.toLowerCase().indexOf(searchKeyWord) !== -1;
            });
        }
        
        if (sortType) {
            tasksFiltered = this.sort(tasksFiltered, sortType);
        }
        
        return tasksFiltered;
    }

    render() {
        let { tasks, filterTable, keyword, sortType } = this.props;
        let taskFiltered = this.tasksHasFilter(tasks, filterTable, keyword, sortType);
        let task = taskFiltered.map((item, idx) => {
            return <TaskItem
                        key={idx}
                        idx={idx}
                        taskValue={item}
                    />;
        });

        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><input type="text" className="form-control" name="filterName" onChange={this.handleFilter} /></td>
                                 <td>
                                    <select className="form-control" name="filterStatus" onChange={this.handleFilter}>
                                        <option value="-1">Tất Cả</option>
                                        <option value="0">Hoạt động</option>
                                        <option value="1">Hoàn thành</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {task}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapSateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sortType: state.sort,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter))
        }
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(TaskList);