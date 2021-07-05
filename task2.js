// 226 Даны натуральные числа m, n Получить все их общие кратные, меньшие mn

const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a / gcd(a, b)) * b;
const divisors = (integer) => {
  let res = [];
  for (let i = 1; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : [integer];
};
const findResult = (a, b) => {
  let val2 = lcm(a, b);
  let m = (a * b) / val2;

  let divisorsOfValues = divisors(m);
  return divisorsOfValues.map((val) => val * val2);
};

console.log(findResult(6, 18));
