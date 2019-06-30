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

//封装一个Jsonp
function jsonp({url, params, callback}) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    window[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    }
    params = [...params, callback]
    let arrs = [];
    for(let key in params) {
      arrs.push(`${key} = ${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}
jsonp({
  url: 'http://localhost:3000/say',
  params: {wd: 'ILoveYou'},
  callback: 'show'
}).then(data => {
  console.log(data)
})