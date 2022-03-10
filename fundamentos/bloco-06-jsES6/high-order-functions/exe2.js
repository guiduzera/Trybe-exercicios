const getRandomArbitrary = (aposta, myFunc) => {
    let sorteio = Math.random() * (5 - 1) + 1;
    let arredonda = Math.floor(sorteio);
    return myFunc(aposta, arredonda);
};

const checagem = (num, comp) => {
    if (num === comp) {
        return "Parabéns você ganhou!";
    };
    
    if(num !== comp) {
        return 'Tente Novamente!'
    };
};

console.log(getRandomArbitrary(3, checagem));
