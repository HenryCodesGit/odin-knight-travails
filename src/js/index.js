/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import "../css/index.css";
import Board, {Position} from './chessBoard';
import Tree from './tree';

function knightMoves(startPosition, endPosition){
    console.log(`[${startPosition.row}, ${startPosition.col}] ||| [${endPosition.row}, ${endPosition.col}]`)

    //Initiate an empty tree
    let moveList = new Tree(startPosition);
    
    //Begin level-order traversal. Populate additional entries with the callback function
    let result = moveList.levelOrder(
        (currentNode) => {
            if(currentNode.value.row == endPosition.row && currentNode.value.col == endPosition.col){ return currentNode;}

            let validPositions = getValidPositions(currentNode.value);
            validPositions.forEach((position) => {moveList.insertAt(currentNode,position);})
    });

    //Once the node is found, run a depth function that also outputs the path to the node
    if(result){
        let output = result.getParents();
        console.log(`The path has been found! It will take ${output.length-1} moves.`)
        for(let i = output.length-1; i>=0; i--){
            console.log(output[i].value);
        }
    }
    
}

//Returns an array of valid moves for the knight, given the current position
function getValidPositions(position){
    let output = []
    //Knight can move 1 space in one direction, and 2 spaces in another direction
    output.push(
        new Position(position.row-1, position.col-2),
        new Position(position.row-1, position.col+2),
        new Position(position.row+1, position.col-2),
        new Position(position.row+1, position.col+2),
        new Position(position.row-2, position.col-1),
        new Position(position.row-2, position.col+1),
        new Position(position.row+2, position.col-1),
        new Position(position.row+2, position.col+1),
    );

    output = output.filter((position) => {
        return chessBoard.isValidPosition(position);
    })

    return output;
}

const SIZE = 8;

let chessBoard  = new Board(SIZE,SIZE);

let pos1 = chessBoard.getRandomPosition();
let pos2 = chessBoard.getRandomPosition();

knightMoves(pos1,pos2);