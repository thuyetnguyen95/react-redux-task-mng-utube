import * as types from '../constants/ActionTypes'

let initialState = {
    id: null,
    name: '',
    status: 1,
};

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task;
        
        default: return state;
    }
};

export default myReducer;
