/* Operações Aritméticas 
let a = 10;
let b = 20;
let soma = a + b;
let subtr = a - b;
let mult = a*b;
let divi = a / b;
let modulo = a % b;

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtr}`);
console.log(`Multiplicação: ${mult}`);
console.log(`Divisão: ${divi}`);
console.log(`Módulo: ${modulo}`);


let numero = 10; 
let texto = "5"; 
let resultado1 = numero + texto; // "105" (concatenação) 
let resultado2 = numero - texto; // 5 (subtração após conversão) 
let resultado3 = numero * texto; // 50 (multiplicação após conversão) 
let resultado4 = numero / texto; // 2 (divisão após conversão) 
console.log(`Adição (concatenação): ${resultado1}`); 
console.log(`Subtração: ${resultado2}`); 
console.log(`Multiplicação: ${resultado3}`); 
console.log(`Divisão: ${resultado4}`);

let saudacao = "Olá, "; 
let nome = "Maria"; 
let mensagem = saudacao + nome + "! Seja bem-vinda."; 
console.log(mensagem); // "Olá, Maria! Seja bem-vinda."

let mensagem2 = `${saudacao}${nome}! Seja bem vinda.`;
console.log(mensagem2);
*/
 //Usando o prompt e o console

// Prompt - Solicita ao usuário que insira seu nome.

//let nome = prompt("Digite seu nome:");

//Isso exibirá o nome no console.

//console.log("Olá, " + nome + "!");

// console - utilizado para exibir mensagens no console do navegador, o que é útil para depuração e registro de informações.

// Declaração de variáveis 
//let a = 10; let b = 20; // Soma de duas variáveis 
//let soma = a + b; // Exibe o resultado da soma no console 
//console.log("A soma de " + a + " e " + b + " é: " + soma);

let strNumero1 = "42"; 
let strNumero2 = "3.14"; 
let intNumero = parseInt(strNumero1); 
let floatNumero = parseFloat(strNumero2); 
console.log("Número inteiro: " + intNumero); // 42 
console.log("Número de ponto flutuante: " + floatNumero); // 3.14

// Ou, de forma mais rápida com o operador unário
let strNumero = "50"; 
let numero = +strNumero; 
console.log("Número: " + numero); // 50

//Ou usando a função Number
let strNumero0 = "100";
let numero1 = Number(strNumero0);
console.log("Número: " + numero1);

document.write("O resultado dessas igualdades são: " + intNumero + ", " +floatNumero + ", " + numero + ", " + numero1);