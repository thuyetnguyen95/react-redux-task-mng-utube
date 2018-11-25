import * as types from '../constants/ActionTypes'

let dataLocal = JSON.parse(localStorage.getItem('tasks'));
let initialState = dataLocal ? dataLocal : [];

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL: // show all tasks
            return state;

        case types.ADD_TASK: // add new tasks
            state = create(state, action.task)
        
            return state;

        default: return state;
    }
};

/**
 * Create a new task and push to localStorage
 *
 * @param {*} state
 * @param {*} actionData
 * 
 * @returns state
 */
function create(state, actionData) {
    let newTask = {
        id: guid(),
        name: actionData.taskName,
        status: actionData.taskStatus === 1 ? true : false
    }

    state.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(state))

    return [...state];
}

/**
 * Generate UID for task
 *
 * @returns {string} string
 */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export default myReducer;
