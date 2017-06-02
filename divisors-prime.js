// Find an integer's divisors
// My solution
function divisors(integer) {
  var arr = []
  for(let i = 2; i <= integer / 2; i++) {
    if (integer % i === 0) {
      arr.push(i)
    }
  }
  return arr.length ? arr : `${integer} is prime`
}
