// 通过原型继承创建一个新对象方法

// inherit()返回了一个继承自原型对象p的属性的新对象
// 这里使用EMCAScript 5中的Object.create()函数（如果存在的话）
// 如果不存在Object.create()，则退化使用其他方法
function inherit(p) {
  if (p === null) throw TypeError();  //p 必须是一个对象，不能是null
  if (Object.create)
    return Object.create(p);  // 如果Object.create()存在，直接使用它

  var t = typeof p;   // 否则进一步检测，创建构建函数创建对象
  if (t !== 'object' && t !== 'function') throw TypeError();
  function f() {};  // 定义一个空构造函数
  f.prototype = p;  // 将其原型属性设置为p
  return new f(); //  使用f()创建p的继承对象
}
