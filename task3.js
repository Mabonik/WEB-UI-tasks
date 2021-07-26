//Task #555

//     1     //1 floor
//    1 1    //2 floor
//   1 2 1   //3 floor
//  1 3 3 1  //4 floor
// 1 4 6 4 1 //5 floor


function getPascalTriangleFloor(n) {
  const basePacalTriangle = [[1]];

  if (typeof n !== "number") {
    return
  }

  if (n <= 0) {
    return
  }

  if (n === 1) {
    return basePacalTriangle[0]
  }

  for (let i = 1; basePacalTriangle.length < n; i++) {
    const previosFloor = basePacalTriangle[i - 1]
    basePacalTriangle[i] = [];

    for (let j = 0; j < previosFloor.length + 1; j++) {
      const sameIndexValueFromPreviosArray = previosFloor[j] || 0;

      const previousIndexValueFromPreviosArray = previosFloor[j - 1] || 0;

      basePacalTriangle[i][j] = sameIndexValueFromPreviosArray + previousIndexValueFromPreviosArray;
    }
  }
  return basePacalTriangle[basePacalTriangle.length - 1];

}

console.log(getPascalTriangleFlor(5)); // [1, 4, 6, 4, 1]
console.log(getPascalTriangleFlor(10));  // [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]