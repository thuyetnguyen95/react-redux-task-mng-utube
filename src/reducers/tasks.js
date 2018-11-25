import * as types from '../constants/ActionTypes'

let dataLocal = JSON.parse(localStorage.getItem('tasks'));
let initialState = dataLocal ? dataLocal : [];

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;

        case types.ADD_TASK:
        console.log(guid());
        
            return state;

        default: return state;
    }
};

let guid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export default myReducer;
