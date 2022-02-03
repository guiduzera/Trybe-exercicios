//*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//*Adição (a + b)
//*Subtração (a - b)
//*Multiplicação (a * b)
//*Divisão (a / b)
//*Módulo (a % b)

let primeiroNumero = 2;
let segundoNumero = 2;

const adicao = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;
const divisao = primeiroNumero / segundoNumero;
const modulo = primeiroNumero % segundoNumero;

//*exemplo
console.log(adicao)

//*Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let firstNumber = 2;
let secondNumber = 4;

if (firstNumber > secondNumber) {
    console.log(firstNumber);
}
else {
    console.log(secondNumber);
}


//*Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let firstNumber;
let secondNumber;
let thirdNumber;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber);
}
else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(secondNumber);
}
else {
    console.log(thirdNumber);
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let primeroAngulo;
let segundoAngulo;
let terceiroAngulo;

if (primeroAngulo + segundoAngulo + terceiroAngulo === 180) {
    console.log(true);
}
else {
    console.log(false);
}



