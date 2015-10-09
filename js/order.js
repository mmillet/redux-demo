/**
 * Created by zhengguo.chen on 2015/9/16.
 */
import {createStore, combineReducers, applyMiddleware} from "../node_modules/redux/dist/redux";
import getAction from "./action";
import render from "./render";
import reducer from "./reducer";
import {logger, delay, thunk} from "./middleware";

//init order
export var initOrder = (initialState) => {
  // applyMiddleware takes createStore() and returns// a function with a compatible API.
  let createStoreWithMiddleware = applyMiddleware(
    logger,
    delay,
    thunk
  )(createStore);

  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  var store = createStoreWithMiddleware(reducer, initialState);
  //var store = createStore(reducer, initialState);

  // You can subscribe to the updates manually, or use bindings to your view layer.
  store.subscribe(() => {
    //render
    render(store.getState());
  });

  //initial dispatch
  store.dispatch({type: "INITIAL", meta: {delay: 20}});

  //actions
  let action = getAction(store);

  //bind events
  document.addEventListener("click", function(e) {
    let target = e.target;
    let className = target.className;
    if(className === "increment" || className === "decrement") {
      let index = parseInt(target.getAttribute("data-index"))
      className === "increment" ? action.addItem(index) : action.minusItem(index);
    }
  });
};
