const botoes = document.querySelectorALL("buttont");

botoes.array.forEach(function (botao){
    let curtiu = false;
    botao.addEventListener("click, botaoClicado");
    funtion botaoClicado(){
    console.log("fui clicado");
    let texto = botao.querySelector("span");
    ife (curtiu == false){
    texto.textContent--;
    curtiu =  true;
    } else {
        texto.textContent--;
        curtiu = false;
      }
    }
})