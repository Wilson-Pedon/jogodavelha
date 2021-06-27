
document.addEventListener('DOMContentLoaded', ()=>{


  let quadrados = document.querySelectorAll(".quadrado");
  
      quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', clikado);
  })

})

function clikado(event) {

  let quadrado = event.target;
  let position = quadrado.id;

  if(movimentoDoJogador(position)) {
    console.log(vezdojogador);
    setTimeout(() => {
      if(vezdojogador == 1){
        alert("O vencedor é: O")
      }
      else{
        alert("O vencedor é: X ")
      }
    },10);

  }
  atualizaQuadrado(position);


}

function atualizaQuadrado(position){
    
  let quadrado = document.getElementById(position.toString());
  let simbolo = tabuleiro[position];
  quadrado.innerHTML = `<div class='${simbolo}'></div>`


}

function reset(){
  document.location.reload(true);
}
  
