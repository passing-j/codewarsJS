// calculate desired money from bank
// My solution
function calculateYear(principal, interest, tax, desired) {
  var years = 0
  while(principal < desired) {
    principal += (principal * i) * (1 - tax)
    years ++
  }
  return years
}
console.log(calculateYear(10000, .00016, .05, 10100))
