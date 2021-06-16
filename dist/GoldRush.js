class GoldRush extends Matrix {
    constructor(row = 5, col = 5) {
        super()
        this.player1 = {}
        this.player2 = {}
        this.loadGame(row, col, "1", "2")
        this.playerTurn = 1
        this.rowMax = this.Matrix.length;
        this.colMax = this.Matrix[0].length;
    }

    generateMatrix(row, col) {
        let coin = "c"
        let counter = 1;
        for (let r = 0; r < row; r++) {
            let row_arr = []
            for (let c = 0; c < col; c++) {
                if (Math.floor(Math.random() * 10) % 2 === 0) {
                    row_arr.push(coin)

                } else {
                    row_arr.push(".")
                }
            }
            this.Matrix.push(row_arr)
        }
    }

    loadGame(row, col, p1, p2) {
        this.generateMatrix(row, col)
        this.alter(0, 0, p1);
        this.alter(row - 1, col - 1, p2)
        this.player1.row = 0;
        this.player1.col = 0;
        this.player1.mark = "1"
        this.player1.idf = "player1"
        this.player1.score = 0
        this.player2.row = row - 1;
        this.player2.col = col - 1
        this.player2.mark = "2"
        this.player2.score = 0
        this.player2.idf = "player2"
    }

    moveUp(player) {
        let playerIdf = player.idf
        let newRowPos = this[playerIdf].row - 1
        let newcolPos = this[playerIdf].col
        this.updatePlayerPos(newRowPos, newcolPos, playerIdf)

    }
    moveRight(player) {
        let playerIdf = player.idf
        let newRowPos = this[playerIdf].row
        let newcolPos = this[playerIdf].col + 1
        this.updatePlayerPos(newRowPos, newcolPos, playerIdf)

    }
    moveLeft(player) {
        let playerIdf = player.idf
        let newRowPos = this[playerIdf].row
        let newcolPos = this[playerIdf].col - 1
        this.updatePlayerPos(newRowPos, newcolPos, playerIdf)
    }
    moveDown(player) {
        let playerIdf = player.idf
        let newRowPos = this[playerIdf].row + 1
        let newcolPos = this[playerIdf].col
        this.updatePlayerPos(newRowPos, newcolPos, playerIdf)

    }

    movePlayer(player, direction) {
        let curentPlayer;
        if (player === 1) {
            curentPlayer = this.player1
        }
        else if (player === 2) {
            curentPlayer = this.player2
        }

        switch (direction) {
            case "up":
                this.moveUp(curentPlayer)
                break;
            case "down":
                this.moveDown(curentPlayer)
                break;
            case "right":
                this.moveRight(curentPlayer)
                break;
            case "left":
                this.moveLeft(curentPlayer)
                break;
            default:
            // code block
        }

    }
    updatePlayerPos(newRowPos, newcolPos, playerIdf) {

        if (this.isLegalMove(newRowPos, newcolPos, playerIdf)) {
            if (this.Matrix[newRowPos][newcolPos] === "c") {
                this[playerIdf].score+=10;
                console.log(playerIdf,"----score",this[playerIdf].score)
            }

            this.alter(this[playerIdf].row, this[playerIdf].col, ".")
            this.alter(newRowPos, newcolPos, this[playerIdf].mark)
            this[playerIdf].row = newRowPos;
            this[playerIdf].col = newcolPos;
            if (playerIdf === "player1") {
                this.playerTurn = 2
            } else if (playerIdf === "player2") {
                this.playerTurn = 1

            }

        } else {
            alert(' not legal')
        }

    }
    isLegalMove(row, col, player) {
        if (row < 0 || col < 0) {
            return false
        }

        else if (row > this.rowMax - 1 || col > this.colMax - 1) {
            return false
        }
        else if (player === "player1") {
            if (this.player2.row === row && this.player2.col === col) {
                return false
            }
        }
        else if ((player === "player2")) {
            if (this.player1.row === row && this.player1.col === col) {
                return false
            }
        }

        return true
    }

}


