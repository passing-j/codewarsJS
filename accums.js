// T-Oo-Jjj-Hhhh-Aaaaa-Kkkkkk
// my
function accum(s) {
  var arr = s.toLowerCase().split('')
  var strArr = []
  for (let i = 0, l = arr.length; i < l; i++) {
    var item = ''
    for (let j = 0; j <= i; j++) {
      item += arr[i]
    }
    strArr.push(item)
  }
  strArr = strArr.map((cur) => cur.replace(cur.charAt(0), cur.charAt(0).toUpperCase()))
  return strArr.join("-")
}

// method2
function accum(s) {
  // map有返回值，forEach返回值是undefined
  // Array(3),创建一个数组[undefined, undefined, undefined]
  // Array.join()将数组处理成字符串
  return s.split('').map((value, index) => value.toUpperCase() + Array(index + 1).join(value.toLowerCase())).join('-')
}

console.log(accums('toJhak'))
