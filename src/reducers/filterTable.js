import * as types from '../constants/ActionTypes'

let initialState = {
    name: null,
    status: -1,
};

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            return {
                name: action.filter.filterName.toLowerCase(),
                status: parseInt(action.filter.filterStatus)
            };
        
        default: return state;
    }
};

export default myReducer;
