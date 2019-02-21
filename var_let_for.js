// 《ES6标准入门》(第3版)

// 结果是10，因为i共用
var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]()

// 输出为6
var a = []
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]()

// for 循环的特别处：设置循环变量的部分是父作用域，而循环内部是单独的子作用域
for (let i = 0; i < 3; i++) {
  let i = 'abc'
  console.log(i)
}

// var 声明的变量可能在声明前使用，值为undefined；let 和 const 声明的变量不能，使用时会抛出错误，在语法上称为“暂时性死区” (temporal dead zone TDZ); let 对它所在的块级代码起作用
// var tmp = 123
// if (true) {
//   tmp = 'abc'
//   let tmp
// }
// 抛出错误，因为在大括号内tmp被重新声明成let型了，所以块内不能提前使用

var tmp = new Date()
function f () {
  console.log(tmp)
  if (false) {
    var tmp = 'hello world'
  }
}
// 输出为undefined，变量被覆盖但又被重新赋值
f()

var s = 'hello'
for (var i = 0; i < s.length; i ++) {
  console.log(s[i])
}
console.log(i) // 5 变量泄露成了全局变量

function f1 () {
  let n = 5
  if (true) {
    let n = 10
  }
  console.log(n) // 5
}

// IIFE 立即执行匿名函数的写法不再必要，如：
// IIFE 写法
(function () {
  var tmp = 'asd'
}())
// 块级作用域写法
{
  let tmp = 'asd'
}

// ES5中，顶层对象的属性和全局变量是等价的；ES6后，为保持兼容，var命令和function命令声明的全局变量仍然是顶层对象(window或global)的属性；另一方面，let、const、class命令声明的全局变量不再是顶层对象的属性，全局变量将逐步与顶层对象的属性隔离。
var a = 1
// Node的REPL环境，可以写成global.a，通用写法可写成this.a
// console.log(window.a)
console.log(global.a)
let b = 1
// console.log(window.b)
console.log(global.b)

// 新值严格等于===undefined时，默认值不生效
let [x = 1] = [undefined]
// x 值为1
// 新值不严格等于===undefined时，默认值生效
let [y = 1] = [null]
// y 值为null

let { log, sin, cos } = Math
let { length: len  } = 'hello'
let len = 'hello'.length
// 直接取数组对象的length属性
