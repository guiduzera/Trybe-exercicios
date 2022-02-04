//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let contagem of numbers) {
    console.log(contagem)
}

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0;

for(let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let resultado = 0;

for(let i = 0; i < numbers.length; i += 1) {
    resultado += numbers[i] / numbers.length
}

console.log(resultado);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let resultado = 0;

for(let i = 0; i < numbers.length; i += 1) {
    resultado += numbers[i] / numbers.length
}

if (resultado > 20) {
    console.log('numero maior que 20');
}
else {
    console.log('numero menor ou igual a 20');
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let maior = Math.max(...numbers);
console.log(maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let contador = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 1) {
        console.log(contador += 1);
    }
    else {
        console.log('ERRO');
    }
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let menor = Math.min(...numbers);
console.log(menor);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado

let array = []

for (let i = 1; i < 26; i += 1) {
    array.push(i);
}
   console.log(array);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = []

for (let i = 1; i < 26; i += 1) {
    array.push(i);
}

for (let divisao of array) {
    console.log(divisao / 2);
}


