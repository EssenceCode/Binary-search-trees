
import MergeSort from "./merge-sort";

function Node(data = null, left = null, right = null) {
    return {
        data,
        left,
        right
    };
};

export function buildTree(array, filteredSortedArray = MergeSort(array), start = 0, end = filteredSortedArray.length - 1) { 
    if(start > end) return null; 
   
    const mid = Math.floor((start + end) / 2);
    const root = Node(filteredSortedArray[mid]);
  
    
    root.left = buildTree(array, filteredSortedArray, start, mid - 1);
    root.right = buildTree(array, filteredSortedArray, mid + 1, end);

    return root;
};

export default class Tree {
    #root;

    constructor(array) {
        this.#root = buildTree(array);
    };
    
    get root() {
      return this.#root;
    };

    insert(value, binaryRoot = this.#root) {
      const node = binaryRoot;

      if(binaryRoot.data !== value) {

      if(binaryRoot.left === null && binaryRoot.data > value) {       
        node.left = Node(value);

        return true;
      };

      if(binaryRoot.right === null && binaryRoot.data < value) {
        node.right = Node(value);

        return true;
      };
      }

      if(binaryRoot.data > value) {
        
        return this.insert(value, node.left);
      };
  
      if(binaryRoot.data < value) {
  
        return this.insert(value, node.right);
      };

      console.log(`${value} already exist in the tree`)

      return false
    };

    remove(value, binaryRoot = this.#root) {
      const node = binaryRoot;
    
      if(binaryRoot !== null && binaryRoot.data === value) {
        // if the given value is a leaf node
        if(binaryRoot.left === null && binaryRoot.right === null) {
          node.data = null;

          return true;
        };
        // if the given values right subtree is null
        if(binaryRoot.right === null) {
          // if the node's left subtrees left are not null
          // point it to as the new node's left
          if(node.left !== null) {
            node.data = node.left.data;
            node.left = node.left.left
            // console.log("foo")
            return true;
          };

          node.data = node.left.data;
          node.left = null
          // console.log("bar")
          return true;
        };
        // right subtree
        if(binaryRoot.left === null) {
          if(node.right !== null) {
            node.data = node.right.data;
            node.right = node.right.right;
            // console.log("fizz");
            return true;
          };

          node.data = node.right.data;
          node.right = null;
          // console.log("buzz");
          return true;
        };
        // both subtree are not null
        if(binaryRoot.left !== null && binaryRoot.right !== null) {
          let predecessor = node;
          let successor = node.right;

          while(successor.left !== null) {
            console.log("predecessor", predecessor);
            console.log("successor", successor);

            predecessor = successor;
            successor = successor.left;
          };
          if(predecessor !== node) {
            console.log("yahallo")
         
            predecessor.left = successor.right;
            node.data = successor.data;

            return true;
          };
       
          predecessor.right = successor.right;
          node.data = successor.data;

          return true
        };

      };

      // recursion to traverse the tree till we reach the given value;
      if(binaryRoot !== null) {
        if(binaryRoot.data > value) {

          return this.remove(value, node.left);
        };
  
        if(binaryRoot.data < value) {
  
          return this.remove(value, node.right);
        }
      };
      
      console.log(`${value} does not exist in the tree.`)
      return false
    };
}

