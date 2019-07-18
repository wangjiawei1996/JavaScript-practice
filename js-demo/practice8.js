// 产生随机数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
var c = getRandom(0, 100);
