/**
 * Created by zhengguo.chen on 2015/9/17.
 */
export default (state) => {
  let tmpl = __inline("./order.tmpl");
  document.getElementById("order").innerHTML = tmpl(state);
}