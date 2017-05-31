// 去掉相邻的重复项
// 方式一
var uniqueInOrder = function(iterable) {
  return [].filter.call(iterable, (cur, index) => iterable[index - 1] !== cur)
}
// 方式二
var uniqueInOrder = function(iterable) {
  var result = []
  var last
  for (let i = 0, l = iterable.length; i < l; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i])
    }
  }
  return result
}
// 方式三
var uniqueInOrder = function(iterable) {
  if (Array.isArray(iterable)) iterable = iterable.join('');
  return iterable.length == 0 ? [] : iterable.match(/(.)(?!\1+)/g).map(function(item) {
    return isNaN(parseInt(item)) ? item : parseInt(item);
  });
}
console.log(uniqueInOrder([2, 3, 3, 3, 2, 2, 3]))
console.log(uniqueInOrder(['a', 'a', 'A', 'A', 'a', 'a']))
console.log(uniqueInOrder('AABBCcDDAA'))
console.log(uniqueInOrder('AABBCcDDAAb'))
// 方式三适用
console.log(uniqueInOrder([11223334112]))
