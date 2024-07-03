
/*function boasVindas(nome) { document.write(`<h1>Bem-vindo(a), ${nome}!</h1>`); } // Chamando a função com diferentes nomes 
boasVindas("Gleidson"); boasVindas("Márcio"); boasVindas("Alessandro"); boasVindas("Sarah");*/

//function exibirNome(nome) { document.write(`<h1>Nome: ${nome}</h1>`); } exibirNome(); // Nome será undefined

function somar(numero1, numero2) { let resultado = numero1 + numero2; return resultado; }
let resultadoSoma = somar(10, 20); 
document.write(`<h1>O resultado da soma é: ${resultadoSoma}</h1>`);

// Função mutável
let contador = 0; function incrementar() { contador++; } incrementar(); document.write(`<h1>Contador: ${contador}</h1>`);

// Função Estática
function calcularDobro(num) { return num * 2; } let valor = 5; let dobro = calcularDobro(valor); document.write(`<h1>Dobro de ${valor} é: ${dobro}</h1>`);

// Função para preencher select
/*function preencherSelect(tag, limite) { for (let i = 1; i < limite; i++) { tag.innerHTML += `<option>${i}</option>`; } } 
let dia = document.getElementById('dia'); 
let mes = document.getElementById('mes'); 
preencherSelect(dia, 32); // Preenche o select de dias (1 a 31) 
preencherSelect(mes, 13); // Preenche o select de meses (1 a 12)*/

let elemento = document.getElementById("meuElemento"); 
elemento.innerHTML = "Texto atualizado"; 
console.log(document.ELEMENT_NODE);

localStorage.setItem("nome", "Fulano");

let nome = localStorage.getItem("nome");
console.log(nome);

function mostrarHora() { let agora = new Date(); document.getElementById("relogio").innerHTML = agora.toLocaleTimeString(); }
setInterval(mostrarHora, 1000);
