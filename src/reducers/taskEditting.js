import * as types from '../constants/ActionTypes'

let initialState = {};

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
        console.log(action);
            return state;
        
        default: return state;
    }
};

export default myReducer;
