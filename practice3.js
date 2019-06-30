//计算1到9的和
var a = 0;
for(var i = 1; i <= 10; i++) {
  a = a + i
}
console.log(a);

//判断一个数是否为素数只能被1和自身整除
function data(n) {
  if (n % 2 != 0 && n % 3 != 0) {
    return true
  } else {
    return false
  }
}
var a = data(11);
console.log(a)