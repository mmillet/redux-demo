/**
 * Created by zhengguo.chen on 2015/9/17.
 */
import {bindActionCreators} from "./node_modules/redux/dist/redux";
import {INCREMENT, DECREMENT} from "./actionTypes";

//普通工厂函数，返回一个对象
let addItem = index => ({
  type: INCREMENT,
  index
});

var minusItem = index => {
  return {
    type: DECREMENT,
    index
  };
};

//跟 store.dispatch 绑定起来，成为真正可以改变 currentState 的 action 函数
export default store => bindActionCreators({
  addItem,
  minusItem
}, store.dispatch);

////将 actionCreator 跟 dispatch 绑定在一起
//let bindActionCreator = (actionCreator, dispatch) => {
//  return (...args) => dispatch(actionCreator(...args));
//}
////将 actionCreator 跟 dispatch 绑定在一起
//let bindActionCreators = (actionCreators, dispatch) => {
//  //如果是单个 actionCreator，绑定一次
//  if (typeof actionCreators === "function") {
//    return bindActionCreator(actionCreators, dispatch);
//  }
//  //返回一个改造过的「函数组合」
//  for(let key of Object.keys(actionCreators)) {
//    actionCreators[key] = bindActionCreator(actionCreators[key], dispatch);
//  }
//  return actionCreators;
//}
