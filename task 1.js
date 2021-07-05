//Дано натуральное число n. Сколько цифр в числе n.
function findNumber(num) {
    let separate = String(num).split("");
    return separate.length;
}
console.log('Amount of numbers:');
console.log(findNumber(12345));

//Чему равна сумма его цифр?
function findSum(num) {
    return String(num).split('').reduce(function(a,b){ return +a+ +b; });
}
console.log('Sum of numbers:');
console.log(findSum( 12356));

//Получить все совершенные числа, меньшие n.
let findPerfect = (num) => {
    const res = [];
    for(let i = 2; i <= num; i++){//3
        let start = 0;//1
        for(let j = 1; j <= Math.floor(i / 2); j++){//2
            // if(!(i % j))
            if(i % j===0)
                start += j;
        }
        if (i == start)
            res.push(i);
    }
    return res;
}
console.log('Perfect numbers:')
console.log(findPerfect(10000));
