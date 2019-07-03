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