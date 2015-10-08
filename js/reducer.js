/**
 * Created by zhengguo.chen on 2015/9/18.
 */
import {combineReducers} from "./node_modules/redux/dist/redux";
import {INCREMENT, DECREMENT} from "./actionTypes";
import {increment, decrement} from "./handle";

let history = (state = [], action = {}) => {
  return [action, ...state].splice(0, 15);
};

let items = (state = [], action = {}) => {
  var newState = [...state];
  switch (action.type) {
    case INCREMENT:
      return increment(newState, action.index);
    case DECREMENT:
      return decrement(newState, action.index);
    default:
      return newState;
  }
};


//combine rootReducer
export default combineReducers({
  history,
  items
});