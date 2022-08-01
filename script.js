const playerXStart = document.querySelector('#player-x');
const playerOStart = document.querySelector('#player-o');
const boardRow = document.querySelector('#rowNumber');
const game = document.querySelector('#game');
const game1 = document.querySelector('#game1')

const board = [];
let cell;
let allCells = [];
let allCellsIndexes = [];



playerXStart.addEventListener('click', createBoardX);
game.addEventListener('click', startGameX)
playerOStart.addEventListener('click', createBoardY);
game1.addEventListener('click', startGameY);



function createBoardX(event) {
    event.preventDefault();
    game.innerHTML = '';
    allCells = [];
    allCellsIndexes = [];
    playerXStart.setAttribute('disabled', 'true');
    playerOStart.setAttribute('disabled', 'true');

    
    game.style.setProperty('--grid-rows', +boardRow.value);
    game.style.setProperty('--grid-cols', +boardRow.value);
    
    if (+boardRow.value >= 3 && +boardRow.value <= 7) {
        for (let i = 0; i < +boardRow.value; i++) {
            board[i] = [];
            
             for (let j = 0; j < +boardRow.value; j++) {
                 board[i].push('');
                 cell = document.createElement('div');
                 cell.innerText = '-'
                 
     
                 cell.setAttribute('data-id', `${i}-${j}`);
                 
                 allCellsIndexes.push(cell.getAttribute('data-id'))
                 
                 allCells = document.getElementsByClassName('cell')
                 
                 game.appendChild(cell).className = "cell";
             }
         }
    }
    

    startGameX(event);

}

function startGameX(event) {
    event.preventDefault();

    if (event.target.innerHTML != '-') {
        return
    }

    if (event.target.className = 'cell') {
            event.target.innerHTML = 'X';
            event.target.style.backgroundColor = 'yellow';
            let strIndexOfX = event.target.getAttribute('data-id');
            let removableElem = allCellsIndexes.indexOf(strIndexOfX);
            let arrIndexOfX = strIndexOfX.split('-');
            let k = +arrIndexOfX[0];
            let j = +arrIndexOfX[1];
            board[k][j] = 'X';
            allCellsIndexes.splice(removableElem, 1);
    
    }

    checkWinner();

    let strIndexOfCells = getRandomIndex(0, allCellsIndexes.length);
    let strIndexOfO;
    let arrIndexOfO;
    let l;
    let m;
    setTimeout(abc, 800)
    
            function abc() {
                for (let i = 0; i < allCells.length; i++) {
               
                    if (allCells[i].getAttribute('data-id') === allCellsIndexes[strIndexOfCells]) {
                            allCells[i].innerHTML = 'O';
                            allCells[i].style.backgroundColor = 'green';
                            strIndexOfO = allCellsIndexes[strIndexOfCells];
                            let remEl = allCellsIndexes.indexOf(strIndexOfO);
                            allCellsIndexes.splice(remEl, 1);
                            arrIndexOfO = strIndexOfO.split('-');
                            l = +arrIndexOfO[0];
                            m = +arrIndexOfO[1];
                            board[l][m] = 'O'
                            checkWinner();
                            break;
                    }
                }
            }
            

}


function createBoardY(event) { 
    event.preventDefault();
    game1.innerHTML = '';
    allCells = [];
    allCellsIndexes = [];

    playerOStart.setAttribute('disabled', 'true');
    playerXStart.setAttribute('disabled', 'true')
    game1.style.setProperty('--grid-rows', +boardRow.value);
    game1.style.setProperty('--grid-cols', +boardRow.value);

    if (+boardRow.value >= 3 && +boardRow.value <= 7) {
        for (let i = 0; i < +boardRow.value; i++) {
            board[i] = [];
            
             for (let j = 0; j < +boardRow.value; j++) {
                 board[i].push('');
                 cell = document.createElement('div');
                 cell.innerText = '-'
                 
     
                 cell.setAttribute('data-id', `${i}-${j}`);
                 
                 allCellsIndexes.push(cell.getAttribute('data-id'))
                 
                 allCells = document.getElementsByClassName('cell')
                 
                 game1.appendChild(cell).className = "cell";
             }
             
     
     
         }


         let index = getRandomIndex(0, allCells.length);
        allCells[index].innerHTML = 'X';
        allCells[index].style.backgroundColor = 'pink';
        let strIndexOfX = allCellsIndexes[index];
        let arrIndexOfX = strIndexOfX.split('-');
        let k = +arrIndexOfX[0];
        let l = +arrIndexOfX[1];
        board[k][l] = 'X';

        let remElem = allCellsIndexes.indexOf(strIndexOfX);
        allCellsIndexes.splice(remElem, 1);
    }
    
  

    startGameY(event);

    //console.log(board)
    
}

function startGameY(event) {
    event.preventDefault();

    if(event.target.innerHTML != '-') {
        return
    }
    if (event.target.className = 'cell') {
        event.target.innerHTML = 'O';
        event.target.style.backgroundColor = 'lightblue';
        let strIndexOfO = event.target.getAttribute('data-id');
        let removableElem = allCellsIndexes.indexOf(strIndexOfO);
        let arrIndexOfO = strIndexOfO.split('-');
        let k = +arrIndexOfO[0];
        let j = +arrIndexOfO[1];
        board[k][j] = 'O';
        allCellsIndexes.splice(removableElem, 1);
    }
    checkWinner();
        let strIndexOfCells = getRandomIndex(0, allCellsIndexes.length);
        let strIndexOfX;
        let arrIndexOfX;
        let l;
        let m;
        setTimeout(abc, 800)
        //console.log(allCells)

        function abc() {
            for (let i = 0; i < allCells.length; i++) {
                       
                if (allCells[i].getAttribute('data-id') === allCellsIndexes[strIndexOfCells]) {
                        allCells[i].innerHTML = 'X';
                        allCells[i].style.backgroundColor = 'pink';
                        strIndexOfX = allCellsIndexes[strIndexOfCells];
                        let remEl = allCellsIndexes.indexOf(strIndexOfX);
                        allCellsIndexes.splice(remEl, 1);
                        arrIndexOfX = strIndexOfX.split('-');
                        l = +arrIndexOfX[0];
                        m = +arrIndexOfX[1];
                        board[l][m] = 'X';
                        checkWinner();
                        break;
                }
            }
        }
        
}



function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkWinner() {

   

    function checkRows() {
        for (let i = 0; i < board.length; i++) {
           if(board[i].every(elem => elem === 'X')) {
               alert('X wins');
               setTimeout(gameOver, 500)
               break;
           } else if (board[i].every(elem => elem === 'O')) {
               alert('O wins');
               setTimeout(gameOver, 500)
               break;
           }
        }

    }

    function checkCols() {
        let count1 = 0;
        let count2 = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[j][i] === 'X') {
                    count1++;
                }
 
                if (board[j][i] === 'O') {
                    count2++;
                }
            }
 
            if (count1 === board.length) {
             alert('X wins');
             setTimeout(gameOver, 500)
             break;
             } else if (count2 === board.length) {
             alert('O wins');
             setTimeout(gameOver, 500)
             break;
             } 
             count1 = 0;
             count2 = 0;
 
        }
 
        
    }
 

    function checkDiags() {
       
        //primary diagonal variables
  
          let count1 = 0;
          let count2 = 0;
  
  
         //secondary diagonal variables
  
         let counts1 = 0;
         let counts2 = 0;
         let len = board.length;
  
  
  
         for (let i = 0; i < len; i++) {
  
              //primary diag
              if (board[i][i] === 'X') {
                  count1++;
              }
      
              if (board[i][i] === 'O') {
                  count2++;
              }
  
              //secondary diag
             if (board[i][len - i - 1] === "X") {
                 counts1++
             }
  
             if(board[i][len - i - 1] === "O") {
                 counts2++;
             }
         }
         //primary
         if (count1 === board.length) {
          alert('X wins');
          setTimeout(gameOver, 500)
        
          } else if (count2 === board.length) {
          alert('O wins');
          setTimeout(gameOver, 500)
    
          }
          //secondary
         if (counts1 === board.length) {
          alert('X wins');
          setTimeout(gameOver, 500)
    
          
          } else if (counts2 === board.length) {
          alert('O wins');
          setTimeout(gameOver, 500)

          
          } 
          count1 = 0;
          count2 = 0;
          counts1 = 0;
          counts2 = 0;
     }
  
     if (allCellsIndexes.length === 0) {
        alert('Game Over')
         setTimeout(gameOver, 600)
     }


     return checkRows() || checkCols() || checkDiags();

}



function gameOver() {
    game.innerHTML = '';
    game1.innerHTML = '';
    playerOStart.removeAttribute('disabled');
    playerXStart.removeAttribute('disabled');
}