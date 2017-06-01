// divide and add number
// method1
function digital_root(n) {
  var fn = function() {
    return String(n).split('').map(Number).reduce((pre, cur) => pre + cur)
  }
  return fn() > 9 ?digital_root(fn()) : fn()
}

// method2
function digital_root(n) {
  if (n < 10) {
    return n
  } else {
    return digital_root(n.toString().split('').map(Number).reduce((pre, cur) => pre + cur))
  }
}

// method3
function digital_root(n) {
  return (n - 1) % 9 + 1;
}


console.log(digital_root(123456))
