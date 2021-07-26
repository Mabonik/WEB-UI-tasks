//Task #178(д)

function solution(array) {
  if(!Array.isArray(array)){
    return
  }
  const result = []; 
  for (let i = 0; i < array.length; i++) {
    const k = array[i]; 
    const inPow = Math.pow(2, i);
    const inFactorial = factorial(i);
    if (inPow < k < inFactorial) {
      result.push(k);
    }
  }
  return result;
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
}

console.log(solution([1, 8, 3, 4, 5])); //expected result [1, 3, 4, 5]
console.log(solution([11, 8, 3, 44, 5])); //expected result [3, 44, 5]
console.log(solution([1, 88, 31, 4, 5])); //expected result [1, 31, 4, 5]
