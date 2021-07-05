//559  Дано натуральное число n. Найти все меньшие n числа Мерсена. (Простое число называется числом Мерсена, если оно может быть представлено  в виде 2p - 1, где p - тоже простое число )

const mersennePrimes = (n) => {
  const mersennePrimesArray = [];
  const primeArray = (n) => {
    const checkIfPrime = (prime) => {
      if (prime < 2) return false;
      for (let i = 2; i < prime; i++) if (!(prime % i)) return false;
      return true;
    };

    return Array.from({ length: n }, (_, i) => ++i).reduce(
      (acc, v) => (checkIfPrime(v) ? acc.push(v) : acc, acc),
      []
    );
  };

  const findAllMersennePrimes = (n) => {
    for (let k = 2; (1 << k) - 1 <= n; k++) {
      mersennePrimesArray.push((1 << k) - 1);
    }
  };

  findAllMersennePrimes(n);

  const filteredArray = mersennePrimesArray.filter((value) =>
    primeArray(n).includes(value)
  );
  return filteredArray;
};

console.log(mersennePrimes(1000));
