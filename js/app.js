var bomb = true;
var turn = 1;
// 9 posiciones dentro del array
var arrayTic = new Array(9);
// creamos una variable celdas para que dentro tenga
// todas la celdas de la tabla.
var celds = document.getElementsByClassName('tic');

function ticTac(event){
    var celd = event.target;
    //idCeld selecciona las celdas con id
    var idCeld = event.target.id;
    //celdSelected inicializa las celdas desde 1
    var celdSelected = idCeld[1]-1; 
    if (bomb) {
        event.target.innerHTML = 'X';
        event.target.style.backgroundColor = 'gray';
        event.target.style.color = 'white';
        bomb = false;
        winPlayer('X');
        // al hacer clic el array vacio con 9 espacios
        // se empezara a llenar ya sea X o O
        arrayTic[celdSelected] = "X"
        } else {
        event.target.innerHTML = '0';
        event.target.style.backgroundColor = 'orange';
        event.target.style.color = 'white';
        bomb = true;
        arrayTic[celdSelected] = '0';
        winPlayer('0');
        //console.log(arrayTic);
    }
    if(turn == 9){ 
        var text = document.getElementById('winner');
        text.innerHTML = 'Empate'
    }

}

function chargeDocument(){
    //cambiar por for al final...
    var n = 0;
    while (n < celds.length){
        console.log(n,celds[n]);
        celds[n].addEventListener('click',ticTac);
        n++;
    }   
}
// player es el jugador ya sea X o O 
function winPlayer(player) {
// para que gane (X ó O) gane debera cumplir con una
// de las combinaciones (8).
    if(
        (arrayTic[0] == player && arrayTic[1] == player && arrayTic[2] == player) 
        || (arrayTic[3] == player && arrayTic[4] == player && arrayTic[5] == player) 
        || (arrayTic[6] == player && arrayTic[7] == player && arrayTic[8] == player)
        || (arrayTic[0] == player && arrayTic[3] == player && arrayTic[6] == player)
        || (arrayTic[1] == player && arrayTic[4] == player && arrayTic[7] == player)
        || (arrayTic[2] == player && arrayTic[5] == player && arrayTic[8] == player)
        || (arrayTic[0] == player && arrayTic[4] == player && arrayTic[8] == player)
        || (arrayTic[2] == player && arrayTic[4] == player && arrayTic[6] == player)
    )
    {
        var text = document.getElementById('winner');
        text.innerHTML = "Ganador " + player + ' Gana';
    }
}
window.addEventListener('load',chargeDocument);