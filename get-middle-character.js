// get middle character
// My solution
function getMiddle(s) {
  var l = s.length
  if (l % 2 == 0) {
    result = s.charAt(l / 2 - 1) + s.charAt(l / 2)
  } else {
    result = s.charAt(Math.floor(l / 2))
  }
  return result
}

// method2
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// method3
function getMiddle(s) {
  var middle = s.length / 2
  return (s.length % 2) ? s.charAt(Math.floor()) : s.slice(middle - 1, middle + 1)
}

console.log(getMiddle("lkjkloiu"))
