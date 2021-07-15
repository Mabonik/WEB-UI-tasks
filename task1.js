//Task #178(г)

function solution(array){
  const result = [];
  for(let i = 0; i < array.length; i++){
    const k = array[i];
    const previous = array[i - 1] || 0;
    const next = array[i + 1] || 0;
    if(k < (previous + next) / 2){
        result.push(k)
    }
  }
  return result
}

console.log(solution([1,8,3,4,5]));//expecteed result [1,3]
console.log(solution([1,13,3,87,5]));//expecteed result [1,3,5]
console.log(solution([6,8,3,7,53]));//expecteed result [3,7]



