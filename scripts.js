var botao = document.getElementById("botao");
botao.addEventListener("Click",alertar, false);

function alertar(event){
    alert("Você clicou no botão!!!!"  + event);
    
}