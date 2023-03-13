import {
  GET_USER_ACC_FULFILLED,
  GET_USER_ACC_REJECTED,
  GET_USER_ACC_PENDING,
  INC,
  DEC,
  INCBYAMOUNT,
} from "../actions";

export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case GET_USER_ACC_FULFILLED:
      return { amount: action.payload, pending: false };
    case GET_USER_ACC_REJECTED:
      return { ...state, error: action.error, pending: false };
    case GET_USER_ACC_PENDING:
      return { ...state, pending: true };
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
