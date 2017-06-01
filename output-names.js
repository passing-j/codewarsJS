// output names who likes something
// My solution
function likes(names) {
  var l = names.length
  console.log(l);
  var s = ''
  if (l === 0) {
    s = `no one likes this`
  } else if (l === 1) {
    s = `${names[0]} likes this`
  } else if (l === 2) {
    s = `${names[0]} and ${names[1]} like this`
  } else if (l === 3) {
    s = `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    s = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  return s
}

// method2

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)]
}



console.log(likes(["Lily", "Peter", "Alan", "Zelas"]))
