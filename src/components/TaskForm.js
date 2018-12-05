import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from './../actions/index'

class TaskForm extends Component {
    /**
     * Creates an instance of TaskForm.
     * 
     * @param {*} props
     * 
     * @memberof App
     */
    constructor(props) {
        super(props);
        
        this.state = {
            taskName: '',
            taskStatus: 1,
            taskId: null,
        }
    }

    /**
     * Handle input change
     *
     * @memberof App
     */
    handleOnChangeValue = (e) => {
        let { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    
    /**
     * Handle submit form
     *
     * @memberof App
     */
    handeFormSubmit = (e) => {
        if (!this.state.taskName.trim()) {
            e.preventDefault();
        }

        if (this.state.taskName.trim()) {
            let newTask = {
                name: this.state.taskName.trim(),
                status: parseInt(this.state.taskStatus) ? true : false
            }

            // if has id on state, we update this task with id
            if (this.state.taskId) {
                e.preventDefault();

                newTask.id = this.state.taskId;
                this.props.updateTask(newTask);
            } else {
                // this.props.addNewTask(newTask);
                this.props.onAddTask(this.state);
            }

            this.resetForm();
        }

        e.preventDefault();
    }

    /**
     * Reset field on form
     *
     * @memberof TaskForm
     */
    resetForm = () => {
        this.setState({
            taskName: '',
            taskStatus: 1,
            taskId: null,
        });

        this.handleCloseForm();
    }

    /**
     * Handle close button
     *
     * @memberof TaskForm
     */
    handleCloseForm = () => {
        this.props.onCloseForm();
    }

    /**
     * Fill data to edit
     *
     * @memberof TaskForm
     */
    setTaskToUpdate = () => {
        if (this.props.taskSelected) {
            this.setState({
                taskId: this.props.taskSelected.id,
                taskName: this.props.taskSelected.name,
                taskStatus: this.props.taskSelected.status ? 1 : 0,
            })
        }
    }

    /**
     * When receive prop, fill data
     *
     * @param {*} nextProps
     * @memberof TaskForm
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.taskSelected) {
            this.setState({
                taskId: nextProps.taskSelected.id,
                taskName: nextProps.taskSelected.name,
                taskStatus: nextProps.taskSelected.status ? 1 : 0,
            })
        } else {
            this.setState({
                taskId: null,
                taskName: '',
                taskStatus: 1,
            })
        }
    }

    /**
     * Fill data to edit
     *
     * @memberof TaskForm
     */
    componentWillMount() {
        this.setTaskToUpdate();
    }

    /**
     * Render element component
     *
     * @memberof TaskForm
     */
    render() {
        if (!this.props.isDisplayForm) return '';
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.formTitle}<span className="fa fa-times-circle text-right" onClick={this.handleCloseForm}/></h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={e => this.handeFormSubmit(e)}>
                        <div className="form-group"><label>Tên :</label>
                            <input type="text" className="form-control" name="taskName" value={this.state.taskName} onChange={this.handleOnChangeValue} autoComplete="off"/>
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" name="taskStatus" value={this.state.taskStatus} onChange={this.handleOnChangeValue} >
                            <option value={1}>Hoạt động</option>
                            <option value={0}>Hoàn thành</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5" />Lưu Lại
                            </button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.resetForm}>
                                <span className="fa fa-close mr-5" />Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask : (task) => {
            dispatch(actions.addTask(task));
        },

        
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);