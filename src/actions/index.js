import * as types from '../constants/ActionTypes'

/**
 * Get all task
 * 
 * @return {object}
*/
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

/**
 * Add a new task
 * 
 * @param {object} task 
 * 
 * @return {object}
 */
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task // task: task
    }
}

/**
 * Toggle form add/edit task
 * 
 * @return {object}
 */
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM,
    }
}

/**
 * Open form add/edit task
 * 
 * @return {object}
 */
export const openForm = () => {
    return {
        type: types.OPEN_FORM,
    }
}

/**
 * Close form add/edit task
 * 
 * @return {object}
 */
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM,
    }
}

/** 
 * Update status
 * 
 * @param {*} task 
*/
export const updateStatus = (task) => {
    return {
        type: types.UPDATE_STATUS,
        task // task: task
    }
}

/**
 * Delete task
 * 
 * @param {*} task 
 */
export const deleteTask = (task) => {
    return {
        type: types.DELETE_TASK,
        task,
    }
}

/**
 * Edit task
 * 
 * @param {*} task 
 */
export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task, // task: task
    }
}
