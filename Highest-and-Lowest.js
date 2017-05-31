// 输出最大值和最小值
function highAndLow(numbers) {
  var arr = numbers.split(' ')
  return `${Math.max.call(null, ...arr)} ${Math.min.apply(null, arr)}`
}
console.log(highAndLow("1 2 -4 5"))
