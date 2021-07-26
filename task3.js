//Task #555

function getPascalTriangleFlor(n) { 
  const basePacalTriangle = [[1]]; 
 
  for (let i = 1; basePacalTriangle.length < n; i++) { 
    const previosFloor = basePacalTriangle[i - 1]  
    basePacalTriangle[i] = []; 
    for (let j = 0; j < previosFloor.length + 1; j++) { 
      const sameIndexFromPreviosArray = previosFloor[j] || 0; 
      const previousIndexFromPreviosArray = previosFloor[j - 1] || 0; 
 
      basePacalTriangle[i][j] = sameIndexFromPreviosArray + previousIndexFromPreviosArray; 
    } 
  } 
 
  return basePacalTriangle[basePacalTriangle.length - 1]; 
 
} 
 
console.log(getPascalTriangleFlor(5)); // [1, 4, 6, 4, 1] 
console.log(getPascalTriangleFlor(10));  // [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]