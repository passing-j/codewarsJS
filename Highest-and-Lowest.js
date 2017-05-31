// 输出最大值和最小值
function highAndLow(numbers) {
  // 转成数值数组
  var arr = numbers.split(' ').map(Number)
  return `${Math.max.call(null, ...arr)} ${Math.min.apply(null, arr)}`
}
console.log(highAndLow("1 2 -4 5"))
