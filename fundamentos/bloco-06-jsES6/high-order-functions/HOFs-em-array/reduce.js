const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = () => {
    return arrays.reduce((acumulador, elementos) => acumulador.concat(elementos), []);
};

console.log(flatten());