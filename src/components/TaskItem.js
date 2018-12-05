import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class TaskItem extends Component {
    
    /**
     * @inheritance
     * 
     * @memberof TaskList
     */
    changeStatus = (task) => {
        this.props.updateStatus(task);
    }

    /**
     * @inheritance
     *
     * @memberof TaskList
     */
    deleteTask = task => {
        this.props.deleteTask(task);
    }

    /**
     * @inheritance
     *
     * @memberof TaskList
     */
    editTask = taskSelected => {
        this.props.openForm();
        this.props.editTask(taskSelected);
    }

    render() {
        let { taskValue, idx } = this.props;

        return (
            <tr>
                <td>{idx + 1}</td>
                <td>{taskValue.name}</td>
                <td className="text-center">
                    <span
                        className={ taskValue.status ? 'label label-info' : 'label label-success' }
                        onClick={() => this.changeStatus(taskValue)}
                        style={{cursor: 'pointer'}}
                    >
                        { taskValue.status ? 'Hoạt động' : 'Hoàn thành' }
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning btn-sm" onClick={() => this.editTask(taskValue)} >
                        <span className="fa fa-edit mr-5"></span>
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.deleteTask(taskValue)} >
                        <span className="fa fa-trash mr-5"></span>
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateStatus: (task) => {
            dispatch(actions.updateStatus(task));
        },

        deleteTask: (task) => {
            dispatch(actions.deleteTask(task));
        },

        editTask: (task) => {
            dispatch(actions.editTask(task));
        },

        openForm: () => {
            dispatch(actions.openForm());
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);