import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// action name constant (Type)
const INIT = 'initialize';
const INC = 'increment';
const DEC = 'decrement';
const INCBYAMOUNT = 'incrementByAmount';

// store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

const history = [];

// reducer
function reducer(state={amount:1}, action) {
  switch(action.type) {
    case INIT:
      return {amount: action.payload};
    case INC:
      return {amount: state.amount + 1};
    case DEC:
      return {amount: state.amount - 1};
    case INCBYAMOUNT:
      return {amount: state.amount + action.payload};
    default:
      return state;
  }
}

// global state
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

// Async call
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    // console.log(data);
    dispatch(initialize(data.amount));
  }
}
// getUser();

// Action Creator
function initialize(val) {
  return {type: INIT, payload: val};
}

function increment() {
  return {type: INC};
}

function decrement() {
  return {type: DEC};
}

function incrementByAmount(val) {
  return {type: INCBYAMOUNT, payload: val}
}

// dispatch an action
setTimeout(() => {
  store.dispatch(getUser(2));
}, 2000);

// console.log(store.getState());
