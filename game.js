
let tabuleiro = ["","","","","","","","",""];
let vezdojogador = 0;
let simbolos = ['x','o'];
let gameOver = false;
let venceu = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function movimentoDoJogador(position){

  
  if (gameOver) {
    return;
  }

    if(tabuleiro[position] == ""){
      tabuleiro[position] = simbolos[vezdojogador];

      gameOver = vencedor();

    if(gameOver == false){
      if(vezdojogador == 0){
          vezdojogador = 1;
      }
      else{
        vezdojogador = 0;
      }
    }
  }

  return gameOver;

}



function vencedor() {

  for(let i=0; i < venceu.length; i++){
    let seq = venceu[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    

    if(tabuleiro[pos1] == tabuleiro[pos2] &&
       tabuleiro[pos1] == tabuleiro[pos3] &&
       tabuleiro[pos1] != '') {

        return true;

    }
  }

  return false;

}