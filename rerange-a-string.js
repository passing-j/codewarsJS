// Rerange a string
// 'rkqodlw' includes 'world'
// My solution
function scramble(str1, str2) {
  return Array.prototype.every.call(str2, function(value) {
    if (str1.includes(value)) {
      str1 = str1.replace(value, '')
    } else {
      return false
    }
    return true
  })
}
// method2
function scramble(str1, str2) {
  var map = {}
  for (let i in str1) {
    map[str1[i]] ? map[str1[i]] ++ : map[str1[i]] = 1
  }
  for (let i in str2) {
    if (!map[str2[i]]) {
      return false
    } else {
      map[str2[i]] --
    }
  }
  return true
}
console.log(scramble('rkqodlw', 'world'))
