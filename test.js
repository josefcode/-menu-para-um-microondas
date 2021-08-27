
/*=======================
          Menu
=========================*/
/*=======================
| opçao 1 --- Pipoca     |
| opçao 2 --- Macarao    |
| opçao 3 --- Carne      |
| opçao 4 --- Feijao     |
| opçao 5 --- Brigadeiro |
=========================*/

let tempopipoca = 10;
let tempoMacarao = 8;
let tempoCarne = 15;
let tempofeijao = 12;
let tempoBrigadeiro = 8;
function escholeNoMenu(opcao, tempo) {
    if (opcao == 1)  { 
    return "pipoca" +" " + esquentarComida(tempopipoca, tempo)
    }else if (opcao == 2) {
        return "macarao" +" " + esquentarComida(tempoMacarao, tempo)
    }else if (opcao == 3){
        return "carne" +" " + esquentarComida(tempoCarne, tempo)
    }else if (opcao == 4){
        return "feijao" +" " + esquentarComida(tempofeijao, tempo)
    }else if (opcao == 5) {
        return "bregadeiro" +" " + esquentarComida(tempoBrigadeiro, tempo)
    }else {
        return "prato nao existe"
    }
}
 
function esquentarComida(tempopadrao, tempoEnformado) {
    if ((tempoEnformado > 2*tempopadrao) && (tempoEnformado < 3*tempopadrao)) {
        return "comida queimou";
    } else if (tempoEnformado < tempopadrao) {
        return "tempo insuficiente";
    } else if (tempoEnformado > 3*tempopadrao) {
        return "kabumm"
    } else if (tempoEnformado == tempopadrao){
        return "prato ao ponto"
    }else {
        return "passo ao ponto"
    }
}

console.log(escholeNoMenu(5,25) + " Prato pronto, bom apetite!!!")