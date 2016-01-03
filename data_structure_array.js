//数据结构与算法JAVASCRIPT语言描述版
//2016-01-01

//创建数组的三种方式
//方法一：使用[]操作符
var numbers = [1,2,3,4,5];

//调用Array构造函数创建数组
var numbers = new Array(1,2,3,4,5);
var numbers = new Array(10);    //指定长度为10的数组。
print(numbers.length);
print(numbers);

//JS数组中的元素不必是同一种数据类型
var objects = [1, "Joe", true, null];

var numbers = 3;
var arr = [7,4,1776];
print(Array.isArray(numbers));
print(Array.isArray(arr));

//由字符串生成数组
//split 和 join函数对应
var sentence = "the quick brown fox jumped over"
var words = sentence.split(" ");
for (var i = 0; i<words.length; ++i){
    print("word "+i+":"+words[i]);
}

//数组复制默认的为浅复制
var nums = [1,2,4,5,6]
var nums2 = nums;
nums2[0] = 6;
print(nums[0]);

//自定义深复制函数
function copy(arr1, arr2){
    for(var i = 0; i < arr1.length; ++i){
        arr2[i] = arr1[i];
    }
}

var nums = [1,2,4,5,6]
copy(nums, nums2);
nums2[0] = 6;
print(nums[0]);

//存取函数
//indexOf()
var names = ["Liu", "Li", "Wang"];
putstr("Enter the last name:");
var name = readline();
var position = names.indexOf(name);
var position1 = names.lastIndexOf(name);
if (position >= 0){
    print("Found " + name + " at position " + position);
}
else{
    print(name = " not found in array.");
}

if (position1 >= 0){
    print("Found " + name + " at position " + position1);
}
else{
    print(name = " not found in array.");
}

// concat()和splice()函数对应
var nums = [1,2,3,7,8,9];
var newEle = [4,5,6];
nums.splice(3, 0, newEle);
print(nums);
nums.splice(3, 3);
print(nums);

// 使用 push()和unshift()函数为数组添加元素，分别添加到尾和头
// 使用 pop()和shift()函数为数组删除元素，分别删除末尾和开头，返回值为删除的元素
// reverse()和sort()函数为数组排序和逆序

// 迭代器方法
// 不生成新数组的：forEach(), every(), some(), reduce(), reduceRight(), map(), filter(), 
function square(num){
    print(num, num*num);
}
function isEven(num){
    return num % 2 == 0;
}
function add(runningTotal, currentValue){
    return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6];
nums.forEach(square);
var even = nums.every(isEven);
if(even){
    print("all numbers are even");
}
else{
    print("not all numbers are even");
}
var someEven = nums.some(isEven);
if(someEven){
    print("some numbers are even");
}
else{
    print("no numbers are even");
}
var sum = nums.reduce(add);
print(sum);

function curve(grade){
    return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
print(newgrades);

function isEven(num){
    return num % 2 == 0;
}
function isOdd(num){
    return num % 2 != 0;
}
var nums = [];
for (var i = 0; i < 20; ++i){
    nums[i] = i+1;
}
var evens = nums.filter(isEven);
print("Even numbers: ");
print(evens);
var odds = nums.filter(isOdd);
print("Odd numbers: ");
print(odds);






