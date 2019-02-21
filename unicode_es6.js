// 《ES6标准入门》第3版
// 字符的Unicode表示法

console.log('\u20bb7')
console.log('\u{20bb7}')
console.log('\u{41}\u{42}\u{43}')

// Javascript共有6种方法可以表示一个字符
console.log('\z')
console.log('\172')
console.log('\x7A')
console.log('\u007A')
console.log('\u{7A}')


// JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。
// 对于需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是2个字符。
// charCodeAt 和 codePointAt 对比
let s = '中文english'
console.log(s.length)
console.log(s.charAt(0))
console.log(s.charAt(1))
console.log(s.charAt(5))
console.log(s.codePointAt(0))
console.log(s.codePointAt(1))
console.log(s.codePointAt(5))

// 设计codePointAt函数测试一个字符是2个字节还是4个字节
function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF
}
console.log(String.fromCodePoint(0x20bb7))
console.log(is32Bit(String.fromCodePoint(0x20bb7)))
console.log(is32Bit('a'))
// Point系列函数会自动分辨是否为4字节字符

// 字符串的新遍历器接口（能自动分辨是否为4字节字符）
let text = String.fromCodePoint(0x20BB7)
// ES5方法
for (let i = 0; i < text.length; i++) {
  console.log(text[i])
}
// ES6方法
for (let i of text) {
  console.log(text[i])
}

// 模板字符串
// 模板字符串(template string)是增强版的字符串，用反引号（`）标识。它可以当作普通字符串，
// 也可以定义多行字符串，重点是可以在字符串中嵌入变量、表达式、函数等任何要执行的JavaScript代码。
// 普通字符串
console.log(`In JavaScript '\n' is a line-feed`)
console.log(`In JavaScript ES5, multi line string
  is not supported?`)
let name = "Bob", time="today"
console.log(`Hello ${name}, how are you ${time}`)
let [x, y] = [1, 2]
console.log(`Hello ${x + y}, how are you ${console.log('console.log没有返回值')}`)
// 模板字符串还能嵌套
const tmp1 = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
    `).join('')}
  </table>
`
let addrs = [
  {first: 'a', last: 'b'},
  {first: 'c', last: 'd'}
]
console.log(tmp1(addrs))

// 标签模板
// alert`123` // 等同于alert(123)
// 用于过滤HTML字符串，防止用户输入恶意内容 或者多语言转换等
function SafeHTML(templateData) {
  var s = templateData[0]
  for (var i = 1; i < arguments.length; i ++) {
    var arg = String(arguments[i])
    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    // Don't escape special characters in the template
    s += templateData[i]
  }
  return s
}
let sender = 'alsdkfj'
let message = SafeHTML`<p>${sender} has sent you a message.</p>`
console.log(message)

