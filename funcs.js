function isFive(num) {
  // Your code here
  if (num === 5) {
    return true
  } else {
    return false
  }
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') {
    throw new 'Error'
  }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  let array = [];
  // Your code here
  for (let i = min; i <= max; i += step) {
    array.push(i);
  }
  return array;
}


module.exports = { isFive, isOdd, myRange };
