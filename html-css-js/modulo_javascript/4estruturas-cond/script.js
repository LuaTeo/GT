let numero1 = 4; 
if (numero1 > 2) 
    { console.log("O número é maior que 2"); }
// Se numero1 é maior que 2, a mensagem "O número é maior que 2" aparecerá no console do navegador.

/* 
== : igual a
!= : diferente de
> : maior que
< : menor que
>= : maior ou igual a
<= : menor ou igual a
 */

console.log(2 + 2 == 4); // true
console.log(2 + 2 == 5); // false

// entre operações aritiméticas o retorno é um boleano.

let numero = parseInt(prompt("Digite um número:")); // parseInt converte uma string em um inteiro.
if (numero > 5)
    { console.log("O número é maior que 5"); }
else if (numero < 5) 
    {
    console.log("O número é menor que 5"); }
    else {
        console.log("O número é igual a 5");
    }