// find shortest word(s) length
// My solution
function findShort(s) {
  return Math.min(...s.split(' ').map(cur => cur.length))
}

// method2
function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(cur => cur.length))
}

// If we want to find shortest word(s) not the length, we can do like the following
function findShort(s) {
  var minList = []
  s.split(' ').map(cur => cur.length).map((cur, index, arr) => Math.min(...arr) === cur ?
   minList.push(s.split(' ')[index]) : 1)
  return minList
}


console.log(findShort("If we want to find shortest word(s) not the length, we can do like the following"))
