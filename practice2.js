//翻转数组
var num = [13, 12, 67, 78, 45];
for(var i = 0; i < num.length; i++) {
  for(var j = i + 1; j < num.length; j++) {
    if (num[i] > num[j]) {
      var a = num[i];
      num[i] = num[j];
      num[j] = a;
    }
  }
}
console.log(num)

//将数组中的数字从小到大排序
var number = [37, 29, 90, 11, 7, 100];
var count = 0;
for(var i = 0; i < number.length; i++) {
  var sort = true;
  count++;
  for(var j = i + 1; j < number.length; j++) {
    sort = false;
    count++;
    if (number[i] > number[j]) {
      var b = number[i];
      number[i] = number[j];
      number[j] = b;
    }
  }
}
console.log(number, count);

var number2 = [36, 19, 90, 21, 7, 110];
number2.sort(function(x ,y) {
  if (x < y) {
    return -1
  } else if (x > y)
  {
    return 1
  }
  return 0;
});
console.log(number2)

