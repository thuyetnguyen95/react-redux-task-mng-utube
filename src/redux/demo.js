import { createStore } from "redux";

let states = {
    status: false
}

let firstReducer = (state = states, action) => {

    state.status = action.type === 'TOGGLE_STATUS' ? !state.status : state.status;

    return state;
}

const store = createStore(firstReducer);
console.log('Init', store.getState());

const action = { type: 'TOGGLE_STATUS' };
store.dispatch(action);


console.log('Action', store.getState());