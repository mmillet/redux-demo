/**
 * Created by zhengguo.chen on 2015/9/17.
 */
var increment = (items, index) => {
  var item = items[index];
  if(item.cnt < item.limit) {
    item.cnt++;
    item.total = item.cnt * item.price;
  }
  return items;
};

var decrement = (items, index) => {
  let item = items[index];
  if(item.cnt > 0) {
    item.cnt--;
    item.total = item.cnt * item.price;
  }
  return items;
};

export {
  increment,
  decrement
};