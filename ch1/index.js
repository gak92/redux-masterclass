import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// action name constant (Type)
const INC = 'increment';
const DEC = 'decrement';
const INCBYAMOUNT = 'incrementByAmount';

// store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

// reducer
function reducer(state={amount:1}, action) {
  if(action.type === INC) {
    return {amount: state.amount + 1};
  }

  if(action.type === DEC) {
    return {amount: state.amount - 1};
  }

  if(action.type === INCBYAMOUNT) {
    return {amount: state.amount + action.payload};
  }

  return state;
}

// global state
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);

// });

function increment() {
  return {type: INC};
}

function decrement() {
  return {type: DEC};
}

function incrementByAmount() {
  return {type: INCBYAMOUNT, payload: 4}
}

// dispatch an action
setInterval(() => {
  store.dispatch(incrementByAmount());

}, 2000);

// console.log(store.getState());
