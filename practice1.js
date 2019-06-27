//将字符串用！符合分隔
var a = ['棉裤', '裤衩', '刀', '剑'];
var b = '!';
var c = a[0];
for(var i = 1;i < a.length; i++) {
  c += b + a[i];
}
console.log(c)
