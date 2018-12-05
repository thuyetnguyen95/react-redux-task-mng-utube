import { combineReducers } from "redux";
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditting from './taskEditting';

const myReducer = combineReducers({
    tasks, // tasks: tasks
    isDisplayForm,
    taskEditting,
});

export default myReducer;
