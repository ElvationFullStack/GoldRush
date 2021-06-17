
const GameBoard = new GoldRush()
GameBoard.print()

const renderer = new Renderer()
GameBoard.moveRight(GameBoard.player1)

renderer.renderBoard(GameBoard.matrix)
renderer.renderScore(GameBoard.players)

$(document).keypress(function (e) {
  
    console.log(" playe ",GameBoard.playerTurn)
    playerOne(e)

    // console.log("---------------------------")
    GameBoard.print()
    // console.log("---------------------------")
})


playerOne = function (e) {

    if (e.which == 119 || e.which == 105) {//up
        GameBoard.movePlayer(GameBoard.playerTurn, "up")
    }
    else if (e.which == 115 || e.which == 107) {//down
        GameBoard.movePlayer(GameBoard.playerTurn, "down")
    }
    else if (e.which == 97 || e.which == 106) {//left
        GameBoard.movePlayer(GameBoard.playerTurn, "left")
    }
    else if (e.which == 100 || e.which == 108) {//right
        GameBoard.movePlayer(GameBoard.playerTurn, "right")
    }
}
playerTwo = function (e) {
    if (e.which == 105) {//up
        GameBoard.movePlayer(GameBoard.playerTurn, "up")
    }
    else if (e.which == 107) {//down
        GameBoard.movePlayer(GameBoard.playerTurn, "down")
    }
    else if (e.which == 106) {//left
        GameBoard.movePlayer(GameBoard.playerTurn, "left")
    }
    else if (e.which == 108) {//right
        GameBoard.movePlayer(GameBoard.playerTurn, "right")
    }


}