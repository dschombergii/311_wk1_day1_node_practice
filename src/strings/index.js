const split = (str, delim) => {
  // write code for strings.split
  let newStr = str.split(delim)
  return newStr
}

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/..?/g)
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitArr = str.split("")
  return str.split("").reverse().join("")
}

module.exports = {
  split,
  pairs,
  reverse
}