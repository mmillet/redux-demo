/**
 * Created by zhengguo.chen on 2015/9/21.
 */
//logger middleware
var logger = store => next => action => {
  console.log('dispatching', action);
  let n = next(action);
  console.log('next state', store.getState());
  return n;
};

//delay middleware
var delay = store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }
  let intervalId = setTimeout(() => next(action), action.meta.delay);
  return function cancel() {
    clearInterval(intervalId);
  };
};

const thunk = store => next => action => {
  return typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action);
};

////logger middleware ES5
//var logger = function(store) {
//  return function(next) {
//    return function(action) {
//      console.log('dispatching', action);
//      var result = next(action);
//      console.log('next state', store.getState());
//      return result;
//    }
//  }
//};

export {
  logger,
  delay,
  thunk
}