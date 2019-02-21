dt_str = '2018-10-09 23:00:03'

dt = new Date(dt_str)

console.log(dt.valueOf())
console.log(dt)
console.log(dt.getHours())

date_str = ' '
// date = date_str === ' ' ?  '1970-01-01' : date_str
date = date_str === ' ' ?  '1/1/1970' : date_str
dt_str1 = date + ' ' + '23:00:03'
console.log(dt_str1)

dt1 = new Date(dt_str1)

console.log(dt1.valueOf())
console.log(dt1.toLocaleString())
console.log(dt1.toLocaleDateString())
console.log(dt1.toDateString())


let a = 1
let b = a > 0 ? 2 : 3
console.log(b)
