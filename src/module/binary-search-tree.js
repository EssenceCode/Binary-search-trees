
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

    prettyPrint(node, prefix = "", isLeft = true){
      if (this.node === null) {
        return;
      }
      if (node.right !== null) {
        this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.left !== null) {
        this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
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
            
            return true;
          };

          node.data = node.left.data;
          node.left = null
          
          return true;
        };
        // right subtree
        if(binaryRoot.left === null) {
          if(node.right !== null) {
            node.data = node.right.data;
            node.right = node.right.right;
    
            return true;
          };

          node.data = node.right.data;
          node.right = null;
     
          return true;
        };
        // both subtree are not null
        if(binaryRoot.left !== null && binaryRoot.right !== null) {
          let predecessor = node;
          let successor = node.right;

          while(successor.left !== null) {
      
            predecessor = successor;
            successor = successor.left;
          };
          if(predecessor !== node) {
         
         
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

    find(value, queue = [  this.#root ]) {
      const current = queue[0];
    
      if(value === current.data) {
        // console.log("hello")
        return current;
      };


      if(current.left !== null) {

        queue.push(current.left);
      };

      if(current.right !== null) {

        queue.push(current.right);
      };

      queue.shift();

      if(queue.length === 0 && value !== current.data) {
        console.log("value does not exist")
        return false
      }

      if(queue.length) {

        return this.find(value, queue);
      };

      return current;
    };

    levelOrder(callback, queue = [this.#root], array = []) {
      if(typeof callback === "function") {

        const current = queue[0];
        
        callback(current)

        // array.push(callback(current))


        if(current.left !== null) {

          queue.push(current.left);
        };

        if(current.right !== null) {

          queue.push(current.right);
        };
        
        queue.shift();

        if(queue.length) {
          
          return this.levelOrder(callback, queue, array);
        }; 

        // return array;

        return true;
      };
      
      const current = queue[0];
      
      array.push(current.data);

      if(current.left !== null) {

        queue.push(current.left);
      };

      if(current.right !== null) {

        queue.push(current.right);
      };

      queue.shift();

      if(queue.length) {
        
        return this.levelOrder(callback, queue, array);
      }; 

      return array;
    };

    levelOrderIteration(callback, binaryRoot = this.#root) {
      if(binaryRoot === null) return null;

      if(typeof callback === "function") {
        const queue = [];
        // let array = [];
        queue.push(binaryRoot);

        while(queue.length) {
          const current = queue[0];
          // array = array.concat(callback(current.data));
          callback(current.data)

          if(current.left !== null) {

            queue.push(current.left);
          };

          if(current.right !== null) {
            
            queue.push(current.right);
          };

          queue.shift()
        };
        // return array
        return true;
      };

      const queue = [];
      const array = [];

      queue.push(binaryRoot);

      while(queue.length) {
        const current = queue[0];

        array.push(current.data);

        if(current.left !== null) {

          queue.push(current.left);
        };

        if(current.right !== null) {

          queue.push(current.right);
        };

        queue.shift();
      };


      return array;
    };

    inOrder(callback, binaryRoot =this.#root, array = []) {
      if(typeof callback === "function") {
        if(binaryRoot === null) {

          return binaryRoot;
        };

        this.inOrder(callback, binaryRoot.left, array);

        callback(binaryRoot);
        
        this.inOrder(callback, binaryRoot.right, array);

        return true;
      };

      
      if(binaryRoot === null) {
        
        return binaryRoot
      };
      
      this.inOrder(callback, binaryRoot.left, array);
    
      array.push(binaryRoot.data)

      this.inOrder(callback, binaryRoot.right, array);


      return array
    };

    preOrder(callback, binaryRoot = this.#root, array = []) {
      if(typeof callback === "function") {
        if(binaryRoot === null) {

          return binaryRoot;
        };

        callback(binaryRoot);

        this.preOrder(callback, binaryRoot.left, array);
        this.preOrder(callback, binaryRoot.right, array);

        return true;
      };

      if(binaryRoot === null) {
     
        return binaryRoot;
      };
      
      array.push(binaryRoot.data);

      this.preOrder(callback, binaryRoot.left, array);
      this.preOrder(callback, binaryRoot.right, array);

      return array;
    };

    postOrder(callback, binaryRoot = this.#root, array = []) {
      if(typeof callback === "function") {
        if(binaryRoot === null) {

          return binaryRoot;
        };

        this.postOrder(callback, binaryRoot.left, array);
        this.postOrder(callback, binaryRoot.right, array);

        callback(binaryRoot);

        return true
      };

      if(binaryRoot === null) {

        return binaryRoot;
      };

      this.postOrder(callback, binaryRoot.left, array);
      this.postOrder(callback, binaryRoot.right, array);

     
      array.push(binaryRoot.data);

      return array;
    };

    height(node) {
      if(node === null) {
        
        return - 1;
      };
      
      const left = this.height(node.left);
      const right = this.height(node.right);

      const calcHeight = Math.max(left, right) + 1;
      // console.log("node", node, "calcHeight", left);
      // console.log("node", node,"rightTree", right);
      // console.log("node", node, "height", calcHeight)
      
      return calcHeight;
    };

    // the depth of the given node is just the number of recursion it took to get there.
    depth(node, root = this.#root, maxDepth = 0) {
      if(root === null || node === false) {
        
        return - 1;
      };
     
      if(node === root) {
        // console.log(`depth of ${root.data} is ${maxDepth}`)

        return maxDepth;
      };
      // console.log(`depth of ${root.data} is ${maxDepth}`)
      // console.log("node", root, "depth", maxDepth)
      const left = this.depth(node, root.left, maxDepth + 1)
      const right = this.depth(node, root.right, maxDepth + 1)
     

      
      const calcDepth = Math.max(left, right);
    
      return calcDepth;
    };

    isBalanced(root = this.#root) {
      if(root === null) return true;
      const leftHeight= this.height(root.left);
      const rightHeight = this.height(root.right);

      const calcHeightDiff = Math.abs(leftHeight - rightHeight)
      console.log("root node", root)
      console.log("left node", root.left, "height",leftHeight)
      console.log("right node", root.right, "height", rightHeight,)
      
      console.log("difference", calcHeightDiff)

      if(calcHeightDiff > 1) {
    
        
        return false
      };

    const left = this.isBalanced(root.left);
    const right = this.isBalanced(root.right);
  
 

    
    if(left === false || right === false) {
      console.log("node", root)
 
      return false;
    };


    return true;
    };

  
};

