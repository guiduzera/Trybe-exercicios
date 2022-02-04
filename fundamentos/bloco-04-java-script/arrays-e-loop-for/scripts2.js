//crie um algoritmo que retorne o fatorial de 10

let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let fatorial = 1;

for (let index = 0; index < numeros.length; index += 1) {
    fatorial *= numeros[index]
}
console.log(fatorial);

//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = 'banana';

let palavraInvartida = '';

for (let i = 0; i <= palavra.length; i++) {
    palavraInvartida += palavra.charAt(palavra.length - i)
}
console.log(palavraInvartida)

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.


let maiorNumero= 0;

for (let contador = 0; contador <= 50; contador ++) {
    let primo = true;
    for (let divisor = 2; divisor < contador; divisor++) {
        if(contador % divisor === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorNumero = contador
    }
}
console.log(maiorNumero);

