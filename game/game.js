function Game() {
    this.board = undefined

    this.init()
}

Game.prototype.init = function(){
    this.makeBoard()
    this.makeHeli()
}

Game.prototype.makeHeli = function(){}

Game.prototype.makeBoard = function(){
    var board = document.createElement('div')
    board.className = 'board'
    board.style.backgroundColor = 'black'
    board.style.width = '50vw'
    board.style.height = '50vw'
    board.style.position = 'fixed'
    board.style.left = '50%'
    board.style.top = '50%'
    board.style.transform = 'translate(-50%, -50%)'
    board.style.minWidth = '320px'
    board.style.minHeight = '320px'

    this.board = board

    var body = document.querySelector('body')
    body.appendChild(board)
}
