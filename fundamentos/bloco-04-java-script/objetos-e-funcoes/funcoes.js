//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo (string) {
    let verificador = true;
    let arrayDeLetras = string.split('');
    if (string === arrayDeLetras.reverse().join('')) {
        verificador;
    }else {
        verificador = false;
    }
    return verificador;
}
console.log(palindromo('arara'));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayTeste =  [2, 3, 6, 7, 10, 1]

function indexDoMaior (array) {
    let max = Math.max(...array);
    let pegandoIndex = array.indexOf(max);
    return pegandoIndex;
}
console.log(indexDoMaior(arrayTeste));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayTeste =  [2, 4, 6, 7, 10, 0, -3]

function indexDoMenor (array) {
      for (let i of array) {
        if (i < 0) {
            let index = array.indexOf(i);
            let removendoItem = array.splice(index, 1);
        }else {
            let min = Math.min(...array);
            let pegandoIndex = array.indexOf(min);
            return pegandoIndex;
        }
    }
}
console.log(indexDoMenor(arrayTeste));



   
