function findTheBiggestK (m) {
    let k = 0;
    if (m <= 1) return;
    while (4**k < m){
        k++;
    }
    return k - 1;
}

console.log(findTheBiggestK(50));