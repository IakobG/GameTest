const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const charactersLength = characters.length

function randomIndex() {
    return Math.random() * (charactersLength - 0) + 0;
}
function randomChar(){
    return characters.charAt(randomIndex())
}

//create 12by12 array
let board = new Array(12) 
for(let i = 0; i < board.length; i++){
    board [i] = new Array(12)
}

//fill array with random chars
for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board.length; j++){
        board[i][j] = randomChar()
    }
}

//insert words in array
console.log(board[5].length)






//draw game board
const gameBoard = document.getElementById('containerDiv')

for(let i = 0; i < board.length; i++)
    {
    const x = document.createElement('SECTION')
    x.classList.add(`x${i}`)
    gameBoard.append(x)

    for(let j = 0; j < board.length; j++)
        {
        const xContainer = document.querySelector(`.x${i}`)
        const y = document.createElement('DIV')
        y.setAttribute('id', `${i}.${j}`);
        y.classList.add(`box`)
        y.innerText = board[i][j]
        xContainer.append(y)
    }
}
