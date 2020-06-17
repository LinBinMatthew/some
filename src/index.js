import _ from 'lodash';
import './index.css';
import Icon from './icon.jpg';
import printMe from './print.js'

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['lodash', 'webpack'], '');  ////join将 array 中的所有元素转换为由''分隔的字符串 其它函数可以自己实践
  let myIcon = new Image();  //创建一个图片
  myIcon.src = Icon;  //src赋值

  element.appendChild(myIcon);  //追加图片

  let btn = document.createElement('button');  //创建按钮
  btn.innerHTML = 'Click me and check the console!';   //内容赋值
  btn.onclick = printMe;   //添加事件
  element.appendChild(btn);   //追加元素

  return element;
 }

 document.body.appendChild(component());