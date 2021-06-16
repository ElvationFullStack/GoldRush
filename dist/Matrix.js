/* Write your code below */

class Matrix {
    constructor(row, col) {
        this.Matrix = [];
        this.generateMatrix(row, col)
    }
    generateMatrix(row, col) {
        let counter = 1;
        for (let r = 0; r < row; r++) {
            let row_arr = []
            for (let c = 0; c < col; c++) {
                row_arr.push(counter++)
            }
            this.Matrix.push(row_arr)
        }
    }
    print() {
        let str = ""
        for (let r = 0; r < this.Matrix.length; r++) {
            str+='\n'
            for (let c = 0; c < this.Matrix[0].length; c++) {
                c === (this.Matrix[0].length - 1) ? str += this.Matrix[r][c] : str += this.Matrix[r][c] + " => "

            }
            console.log(str)

        }
    }
    printColumn(col) {
        let MyCol = ""
        for (let r = 0; r < this.Matrix.length; r++) {
            r === (this.Matrix.length - 1) ? MyCol += this.Matrix[r][col] : MyCol += this.Matrix[r][col] + " , "
        }
        console.log(MyCol)

    }
    printRow(row) {
        let myRow = ""
        for (let c = 0; c < this.Matrix[row].length; c++) {
            c === (this.Matrix[row].length - 1) ? myRow += this.Matrix[row][c] : myRow += this.Matrix[row][c] + " , "

        }
        console.log(myRow)
    }
    get(row, col) {
        return this.Matrix[row][col]
    }
    alter(row,col,val){
        this.Matrix[row][col]=val

    }
    findCoordinate(val){
        for(let r=0;r<this.Matrix.length;r++){
            for(let c=0; c<this.Matrix[r].length;c++){
                if(this.Matrix[r][c]===val){
                    return{x:c,y:r}
                }
            }
        }
        return null
    }
    
}


/* Do not remove the exports below */
// module.exports = Matrix