var botao = document.getElementById("botao");
botao.addEventListener("Click", alertar, false);
var nome =  document.getElementById("nome");

function alertar(event){
    alert("Você clicou no botão!!!!" + nome.value);
}
