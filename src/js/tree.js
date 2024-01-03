import { Position } from './chessBoard';

export default class Tree{
    #root;
    get root() {
        return this.#root;
    }

    //Build the tree from a root node
    constructor(rootPosition){
        this.#root = new Node(rootPosition);
    }

    //Level-order traversal of the tree and run the callback as it traverses
    levelOrder(callback) {
        let index = 0;
        let queue = [this.#root];

        //Start traversing from the inputted root node
        while(index < queue.length){
            let currentNode = queue[index];

            //Run any callbacks if needed
            //If the callback returns anything then stop the levelorder and return the callback's return
            if(callback){
                let stopCondition = callback(currentNode);
                if(stopCondition) return stopCondition;
            }

            //Add all children of this node to the queue
            if(currentNode.children.length > 0){
                currentNode.children.forEach((child)=>{
                    queue.push(child);
                })
            }
            index += 1;
        }
    }

    insertAt(node, value){
        let newNode = new Node(value,node);
        node.children.push(newNode);
    }

}

class Node{
    value;
    parent;
    children = [];

    constructor(val, parent, children = []){
        this.value = val;
        this.children = children;
        this.parent = parent;
    }

    addChild(child){
        this.children.push(child);
    }

    getParents(output = [this]){
        if(!(this.parent)) return output;

        output.push(this.parent);
        this.parent.getParents(output);

        return output;
    }
}
