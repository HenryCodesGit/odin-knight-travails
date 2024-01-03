export default class Board{

    #maxRows;
    get maxRows(){ return this.#maxRows};

    #maxCols;
    get maxCols(){ return this.#maxCols};

    #pieces;

    isValidPosition(pos){
        if(Object.getPrototypeOf(pos) !== Position.prototype) throw 'Both arguments must be of the "Position" class';
        return (pos.row >= 1) && (pos.row <= this.maxRows) && (pos.col >= 1)&& (pos.col <= this.maxCols);
    }

    getRandomPosition(){
        return new Position(parseInt(Math.random()*this.maxRows+1),parseInt(Math.random()*this.maxCols+1));
    }

    constructor(maxRows,maxCols){
        this.#maxRows = maxRows;
        this.#maxCols = maxCols;
    }
}

export class Position {
    constructor(row, column){
        this.row = row;
        this.col = column;
    }
}

function test(){
    let a = new Board(8,8);

    // Test positions
    // console.log(a.isValidPosition(new Position(9,9)));
    // console.log(a.isValidPosition(new Position(9,8)));
    // console.log(a.isValidPosition(new Position(8,9)));
    // console.log(a.isValidPosition(new Position(8,8)));
    // console.log(a.isValidPosition(new Position(1,1)));
    // console.log(a.isValidPosition(new Position(0,1)));
    // console.log(a.isValidPosition(new Position(1,0)));
    // console.log(a.isValidPosition(new Position(0,0)));
}
