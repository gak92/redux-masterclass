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
async function getUser() {
  const { data } = await axios.get('http://localhost:3000/accounts/1');
  console.log(data);
}
// getUser();

// Action Creator
async function initialize(dispatch, getState) {
  const { data } = await axios.get('http://localhost:3000/accounts/1');
  dispatch({type: INIT, payload: data.amount});
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
  store.dispatch(initialize);
}, 2000);

// console.log(store.getState());
