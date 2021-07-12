//Task #178(г)

const array = [1,8,3,4,5];
const result = [];
for(let i = 0; i < array.length; i++){

  const k = array[i];
  const previous = array[i - 1] || 0;
  const next = array[i + 1] || 0;
  if(k < (previous + next) / 2){
      result.push(k)
  }
}

console.log(result);


