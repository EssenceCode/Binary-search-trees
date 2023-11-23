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
      const binaryTree = binaryRoot;
      const leftIsEqualsToNullAndDataIsLessThanData = binaryRoot.left === null && binaryRoot.data > value;
      const rightIsEqualsToNullAndDataIsGreaterThanData = binaryRoot.right === null && binaryRoot.data < value;
     
      if(binaryRoot.data === value) {
        alert("value already existed.")
        
        return false
      };  
      
      if(leftIsEqualsToNullAndDataIsLessThanData) {       
        binaryTree.left = Node(value);

        return true;
      };

      if(rightIsEqualsToNullAndDataIsGreaterThanData) {
        binaryTree.right = Node(value);

        return true;
      };

      if(binaryRoot.data) {
        
        if(binaryRoot.data > value) {
        
          return this.insert(value, binaryTree.left)
        };
  
        if(binaryRoot.data < value) {
  
          return this.insert(value, binaryTree.right)
        };
      };
      
      return binaryTree
    };

};

