/**
 * Created by zhengguo.chen on 2015/9/17.
 */
import {INCREMENT, DECREMENT} from "./constant";
var addItem = (index) => {
  return {
    type: INCREMENT,
    index: index
  };
};

var minusItem = (index) => {
  return {
    type: DECREMENT,
    index: index
  };
};

export {
  addItem,
  minusItem
};