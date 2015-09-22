/**
 * Created by zhengguo.chen on 2015/9/17.
 */
import {bindActionCreators} from "./node_modules/redux/dist/redux";
import {INCREMENT, DECREMENT} from "./actionTypes";

//��ͨ��������������һ������
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

//�� store.dispatch ����������Ϊ�������Ըı� currentState �� action ����
export default store => bindActionCreators({
  addItem,
  minusItem
}, store.dispatch);

////�� actionCreator �� dispatch ����һ��
//let bindActionCreator = (actionCreator, dispatch) => {
//  return (...args) => dispatch(actionCreator(...args));
//}
////�� actionCreator �� dispatch ����һ��
//let bindActionCreators = (actionCreators, dispatch) => {
//  //����ǵ��� actionCreator����һ��
//  if (typeof actionCreators === "function") {
//    return bindActionCreator(actionCreators, dispatch);
//  }
//  //����һ��������ġ�������ϡ�
//  for(let key of Object.keys(actionCreators)) {
//    actionCreators[key] = bindActionCreator(actionCreators[key], dispatch);
//  }
//  return actionCreators;
//}
