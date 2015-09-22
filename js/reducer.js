/**
 * Created by zhengguo.chen on 2015/9/18.
 */
import {combineReducers} from "./node_modules/redux/dist/redux";
import {INCREMENT, DECREMENT} from "./actionTypes";
import {increment, decrement} from "./handle";

//combine rootReducer
export default combineReducers({
  history(state = [], action = {}) {
    state.unshift(action);
    return state.splice(0, 15);
  },
  items(state = [], action = {}) {
    switch (action.type) {
      case INCREMENT:
        increment(state[action.index]);
        break;
      case DECREMENT:
        decrement(state[action.index]);
        break;
    }
    return state;
  }
});