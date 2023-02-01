//Script para a primeira caixa de texto
function enviar(){
    var dado = document.getElementById("input1").value;

    if(dado == "Mateus"){
        alert("Sabiamos que era voce. Fique avontade, Sr")
    }
    else{
        alert("Bem vindo, "+dado);
    }
}

//Scritp para validar a idade;
function validador(){
    var pessoa = parseInt(document.getElementById("input1").value);

    if(pessoa >= 18){
        alert("Sai dai pirraia, tem idade pra nada otaro!");
    }
    else{
        alert("Menores de idade nao sao permitidos. Seus responsaveis serao contatdos.")
    }
}

//checando se os cookies de uma pagina estao ativados;
function checaCookie(){
    if(navigator.cookieEnabled == true){
        alert("Cookies permitidos")
    }
    else {
        alert("Cookies bloqueados")
    }
}