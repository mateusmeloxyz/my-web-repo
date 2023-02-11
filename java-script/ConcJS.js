//usando document write para colocar elementos dentro de uma tag

var nome = prompt("Digite seu nome"); //o prompt recebe os dados que o usuario digitar;
var idade = prompt("Digite sua idade");

document.write("<h2><u>Fala " + nome + " tudo bem?</h2></u>"); //inserindo a mensagem usando hardcode
document.write("Ta com "+ idade +" anos ae meu bom?");