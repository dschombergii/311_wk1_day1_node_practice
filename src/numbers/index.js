const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
  return sum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i in arr) {
    for (let j in arr) {
      if (i + j == sum) {
        return true
      } else {
        return false
      }
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}