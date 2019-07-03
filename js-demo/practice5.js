// 作用域链
var num = 10;
function f1() {
  var num = 20;
  function f2() {
    var num = 30;
    function f3() {
      var num = 40;
      console.log(num)
    }
    f3()
  }
  f2()
}
f1()

//作用域
function f1() {
  number = 100;
}
f1()
console.log(number);
var num1 = 10;
var num2 = 20;
delete num1;
delete num2;
console.log(typeof num1);
console.log(num1 + 10);
console.log(num2)

//求两个数中的最大值
function compare(a, b)  {
  return a > b ? a : b
}
console.log(compare(100, 200))

//求三个数的大小
function abs(a, b, c) {
  return a > b ? (a > c ? a : c) : (b > c ? b : c)
}
console.log(abs(100, 2, 300))

//求一组数组中的最大值
function getArrayMax(array) {
  var max = array[0];
  for(var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i]
    }
  }
  return max
}
console.log(getArrayMax([100, 200, 21, 232, 500]))