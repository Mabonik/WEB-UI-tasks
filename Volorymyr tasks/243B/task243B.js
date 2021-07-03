function fumSqr (n) {
    let x, y;
    for (x = 1; x*x < n; x++) {
        for(y = 0; y*y < n; y++){
            if(x*x + y*y == n && x >= y) {
                console.log(`x = ${x}, y = ${y}`)
            }
        }
    }
}

fumSqr(100);