const sum = (...array) => {
  const soma = array.reduce((acc, elementos) => {
      return acc + elementos
  }, 0)
  return soma;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7))