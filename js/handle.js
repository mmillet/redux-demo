/**
 * Created by zhengguo.chen on 2015/9/17.
 */
var increment = item => {
  if(item.cnt < item.limit) {
    item.cnt++;
    item.total = item.cnt * item.price;
  }
  return item;
};

var decrement = item => {
  if(item.cnt > 0) {
    item.cnt--;
    item.total = item.cnt * item.price;
  }
  return item;
};

export {
  increment,
  decrement
};