let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;
//从localStorage里获取字符串如果获取不到就获取0 如果获取到了就尝试将字符串转换为number 如果不能转换就为0

function createID() {
  id++;
  //把id存储到localStorage
  window.localStorage.setItem('_idMax',id.toString());
  return id;
}

export default createID;