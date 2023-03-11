import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

// reducer
function reducer(state={amount:1}, action) {
  if(action.type === "increment") {
    return {amount: state.amount + 1};
  }
  return state;
}

// global state
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);

// });

// dispatch an action
setInterval(() => {
  store.dispatch({type: "increment"});

}, 2000);

// console.log(store.getState());
