import * as types from '../constants/ActionTypes'

let initialState = '';

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return action.sortType;
        
        default: return state;
    }
};

export default myReducer;
