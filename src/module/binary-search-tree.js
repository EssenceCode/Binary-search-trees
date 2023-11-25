
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
     
      if(binaryRoot.data === value) {
        
        return false;
      };  
      
      if(binaryRoot.left === null && binaryRoot.data > value) {       
        node.left = Node(value);

        return true;
      };

      if(binaryRoot.right === null && binaryRoot.data < value) {
        node.right = Node(value);

        return true;
      };

      if(binaryRoot.data > value) {
        
        return this.insert(value, node.left);
      };
  
      if(binaryRoot.data < value) {
  
        return this.insert(value, node.right);
      };
      
      return node
    };

    remove(value, binaryRoot = this.#root) {
      const node = binaryRoot;
      
      if(binaryRoot !== null) {
      // if there is no children, means a leaf node 
        if(binaryRoot.left === null && binaryRoot.right === null) {
          node.data = null;
  
          return true;
        };
      // if if there is only children in the left subtree
        if(binaryRoot.left === null && binaryRoot.data === value) {
          node.data = node.right.data;
          node.right = null;
  
          return true;
        };
      // if if there is only children in the right subtree
        if(binaryRoot.right === null && binaryRoot.data === value) {
          node.data = node.left.data;
          node.left = null;
          // console.log(node)
  
          return true;
        };
        // if there are two children
        if(binaryRoot.left !== null && binaryRoot.right !== null && binaryRoot.data === value) {
          let predecessor = node;
          let successor = node.right;
  
          while(successor.left !== null) {
            
            predecessor = successor;
            successor = successor.left;
          };
          if(predecessor !== node) {
  
            predecessor.left = successor.right;
          };
  
          predecessor.right = successor.left;
  
          node.data = successor.data;
  
          return node
        };
        // recursion
        if(binaryRoot.data > value) {

          return this.remove(value, node.left);
        };
  
        if(binaryRoot.data < value) {
          
          return this.remove(value, node.right);
        };

        return true;
      };

     if(binaryRoot === null) {
      console.log("value does not exist")
      return false
     };
      
     
      return node;
    }
};

