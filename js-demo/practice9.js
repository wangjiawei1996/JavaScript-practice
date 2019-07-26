// 模拟实现max()/min()
var MyMath = {
  max: function() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (max < arguments[i]) {
        max = arguments[i]
      }
    }
    return max;
  },
  min: function() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (min > arguments[i]) {
        min = arguments[i]
      }
    }
    return min;
  }
}
var a = MyMath.max(1, 2, 90, 70);
var b = MyMath.min(1, 2, 90, 70);