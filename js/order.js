/**
 * Created by zhengguo.chen on 2015/9/16.
 */
import {createStore, combineReducers} from "./node_modules/redux/dist/redux";
import getAction from "./action";
import render from "./render";
import reducer from "./reducer";

//init order
export var initOrder = (initialState) => {
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  var store = createStore(reducer, initialState);

  // You can subscribe to the updates manually, or use bindings to your view layer.
  store.subscribe(() => {
    //render
    render(store.getState());
  });

  //initial dispatch
  store.dispatch({type: "INITIAL"});

  //actions
  let action = getAction(store);
  console.log(action);

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
