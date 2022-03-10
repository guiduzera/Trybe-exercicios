const pouhan = (array, verificadas, myFunc) => {
    const RIGHT_ANSWERS = array;
    const STUDENT_ANSWERS = verificadas;
    return myFunc(RIGHT_ANSWERS, STUDENT_ANSWERS);
};

const verificando = (lista1, lista2) => {
    let contador = 0;

    for (let i = 0; i < lista1.length; i += 1) {
        if (lista1[i] === lista2[i]) {
            contador += 1;
        } else if (lista1[i] === 'N.A' || lista2[i] === 'N.A') {
            contador += 0;
        } else {
            contador -= 0.5;
        };
    };
    return contador;
};

console.log(pouhan(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D'], verificando));