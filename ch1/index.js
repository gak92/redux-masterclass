import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// action name constant (Type)
const INIT = "account/initialize";
const INC = "account/increment";
const DEC = "account/decrement";
const INCBYAMOUNT = "incrementByAmount";

const INCBONUS = "bonus/increment";

// store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger.default, thunk.default)
);

const history = [];

// reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case INIT:
      return { amount: action.payload };
    case INC:
      return { amount: state.amount + 1 };
    case DEC:
      return { amount: state.amount - 1 };
    case INCBYAMOUNT:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case INCBONUS:
      return { points: state.points + 1};
    case INCBYAMOUNT:
      if(action.payload >= 100)
        return { points: state.points + 1 };
      else
        return state;
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
// Action Creator
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    // console.log(data);
    dispatch(initialize(data.amount));
  };
}
// getUser();

function initialize(val) {
  return { type: INIT, payload: val };
}

function increment() {
  return { type: INC };
}

function decrement() {
  return { type: DEC };
}

function incrementByAmount(val) {
  return { type: INCBYAMOUNT, payload: val };
}

function incrementBonus() {
  return { type: INCBONUS}
}

// dispatch an action
setTimeout(() => {
  // store.dispatch(getUser(2));
  store.dispatch(incrementBonus(7));
}, 2000);

// console.log(store.getState());
