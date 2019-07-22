// 产生随机数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
var c = getRandom(0, 100);

// 随机产生rgb颜色
function getRandom(min ,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function getRGB(min, max) {
  var col1 = getRandom(min, max);
  var col2 = getRandom(min, max);
  var col3 = getRandom(min, max);
  return 'rgb('+ col1 + ',' + col2 + ',' + col3 + ')'
}
var d = getRGB(0, 255)
