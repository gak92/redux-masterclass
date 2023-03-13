import axios from 'axios';

// action name constant (Type)
// const INIT = "account/initialize";
export const INC = "account/increment";
export const DEC = "account/decrement";
export const INCBYAMOUNT = "account/incrementByAmount";

export const GET_USER_ACC_PENDING = "account/getUserAccount/pending";
export const GET_USER_ACC_FULFILLED = "account/getUserAccount/fulfilled";
export const GET_USER_ACC_REJECTED = "account/getUserAccount/rejected";
 
export const INCBONUS = "bonus/increment";


// Action Creator
export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending());

      const { data } = await axios.get(`http://localhost:8080/accounts/${id}`);
      // console.log(data);
      dispatch(getUserAccountFulfilled(data.amount));
    }
    catch(error) {
      dispatch(getUserAccountRejected(error.message));
    }
  };
}

export function getUserAccountFulfilled(val) {
  return { type: GET_USER_ACC_FULFILLED, payload: val };
}

export function getUserAccountRejected(error) {
  return { type: GET_USER_ACC_REJECTED, error: error };
}

export function getUserAccountPending() {
  return { type: GET_USER_ACC_PENDING };
}

export function increment() {
  return { type: INC };
}

export function decrement() {
  return { type: DEC };
}

export function incrementByAmount(val) {
  return { type: INCBYAMOUNT, payload: val };
}

export function incrementBonus() {
  return { type: INCBONUS}
}
