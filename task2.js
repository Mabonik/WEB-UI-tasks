//Task #178(д)

const result2= [];

for(let i = 0; i < array.length; i++){

  const k = array[i];
  const inPow = Math.pow(2, i);
  const inFactorial = factorial(i)

  if(inPow < k < inFactorial){
    result2.push(k)
  }
}

function factorial(n){
  if(n === 0 || n === 1){
      return 1;
  }else{
      return n * factorial(n-1);
  }
}

console.log(result2);