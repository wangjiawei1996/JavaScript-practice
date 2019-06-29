//将字符串用！符合分隔
var a = ['棉裤', '裤衩', '刀', '剑'];
var b = '!';
var c = a[0];
for(var i = 1;i < a.length; i++) {
  c += b + a[i];
}
console.log(c)

//编写一段数组将不为0的数字移动到一个新的数组当中
// 方法1
var arr = [0, 21, 34, 0, 100, 65, 101];
var newArr = [];
for(var i = 0;i < arr.length; i++) {
  if (arr[i] != 0) {
    newArr[newArr.length] = arr[i];
  }
}
console.log(newArr)
// 方法2
var r = arr.filter(function(x) {
  return x != 0;
})
console.log(r)

