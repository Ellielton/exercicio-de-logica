document.write("1 - Crie um programa que pede dois numeros ao usuaário e retorna o maior deles (usando if e else)");

//<<<<<<<<<<<<<<<<<Resposta A: >>>>>>>>>>>>>>>>>>>>>>>>>

//ENTRADA: 2 numeros
const numA = 8;
const numB = 3;
let processamento;

//PROCESSAMENTO: Comparar os números

if (numA > numB ) {
    processamento = "O maior número é: " + numA;
} else {
    processamento = "O maior número é: " + numB;
}

//SAIDA: exibir o maior entre os números
document.write(processamento +'</br>')


//<<<<<<<<<<<Resposta B: >>>>>>>>>>>>>>>>>>>>>>>>>
let resposta = numA > numB? numA : numB;

document.write("O maior número é: " + resposta);