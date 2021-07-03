function sumSqr (n) {
    let x, y;
    for (x = 1; x*x < n; x++) {
        for(y = 0; y*y < n; y++){
            if(x*x + y*y == n) {
                console.log(`x = ${x}, y = ${y}`);
                return;
            }
        }
    }
}

sumSqr(25);