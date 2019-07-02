// 求阶乘
function foo(n) {
  var a = 1;
  for (var i = 1; i < n; i++) {
    a *= i
  }
  return a
}
var v = foo(5);
console.log(v)

// 求1!+2！+3!+4!+5!的和
function getFoo(n) {
  var sum = 0;
  for(var i = 1; i <= n; i++) {
    let a = 1;
    for(var j = 1; j <= i; j++) {
      a *= j
    }
    sum += a
  }
  return sum;
}
var c = getFoo(5)
console.log(c)


