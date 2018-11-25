import React, { Component } from 'react';
import TaskItem from "./TaskItem";
import { connect } from 'react-redux';

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

        this.setState({
            [name] : value
        }, () => {
            this.props.filter(
                this.state.filterName.toLocaleLowerCase(),
                parseInt(this.state.filterStatus)
            );
        });
    }

     /**
     * Update status when clicked
     * 
     * @memberof App
     */
    changeStatus = task => {
        this.props.changeStatus(task);
    }

    /**
     * Delete task
     * 
     * @memberof App
     */
    deleteTask = task => {
        this.props.deleteTask(task);
    }

    /**
     * Edit task
     * 
     * @memberof App
     */
    editTask = taskSelected => {
        this.props.editTask(taskSelected);
    }

    render() {
        let task = this.props.tasks.map((item, idx) => {
            return <TaskItem
                        key={idx}
                        idx={idx}
                        taskValue={item}
                        changeStatus={this.changeStatus}
                        deleteTask={this.deleteTask}
                        editTask={this.editTask}
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
        tasks: state.tasks
    }
}

export default connect(mapSateToProps, null)(TaskList);