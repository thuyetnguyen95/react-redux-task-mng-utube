import React, { Component } from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions';

/**
 * This project is simple react task manager from a youtube tutorial
 * so if you have any questions or discussions pls contact me!
 * 
 * p/s: don't trust this code!
 */
class App extends Component {
    /**
     * Creates an instance of App.
     * 
     * @param {*} props
     * @memberof App
     */
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, name: 'Eat', status: true },
                { id: 2, name: 'Sleep', status: false },
                { id: 3, name: 'Code', status: true },
                { id: 4, name: 'Breath', status: true },
                { id: 5, name: 'Play game', status: false },
            ],
        }
    }

    /**
     * Update task
     *
     * @memberof App
     */
    onToggleForm = () => {
        let { taskEditting } = this.props;
        if (taskEditting && taskEditting.id) {
            this.props.openForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onResetForm({id: null, name: '', status: 1,});
    }

    /**
     * Render all component
     *
     * @returns
     * @memberof App
     */
    render() {
        let { isDisplayForm } = this.props;

        return (
            <div className="App">
                <div className="container">
                    <div className="text-center">
                        <h1>REACT WITH REDUX</h1>
                        <hr />
                    </div>
                    <div className="row">

                        <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                            <TaskForm />
                        </div>
                    
                        <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'} >
                            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                                <span className="fa fa-plus mr-5"></span>Thêm công việc
                            </button>
                            <Control
                                handleSearch={this.handleSearch}
                                handleSort={this.handleSort} 
                            />
                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditting: state.taskEditting
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },

        onResetForm: (task) => {
            dispatch(actions.editTask(task));
        },

        openForm: () => {
            dispatch(actions.openForm());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
