// 87 даны натуральное n, m Получить сумму m последних цифр числа n

const getSum = (number, value) => {
  let sum;

  for (
    sum = 0;
    number > 0, value != 0;
    sum += number % 10, number = parseInt(number / 10), value--
  );

  return sum;
};

console.log(getSum(12345, 4));
