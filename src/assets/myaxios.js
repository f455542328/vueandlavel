import Axios from 'axios'
//直接将axios对象添加到vue原型中 ,并不建议这样的使用方式
//建议将axios封装成vue插件引入
//ES6严格模式中变量必须声明才可以使用
//为了让代码简洁,将封装的插件写入另外的插件然后引入
let myplingin = {}
myplingin.install = (vue) => {
  vue.prototype.myaxios = Axios;
}
//导出对象
export default myplingin;
