import { INCBONUS, INCBYAMOUNT } from "../actions";

export function bonusReducer(state = { points: 0 }, action) {
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
