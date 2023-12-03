
import MergeSort from "./merge-sort";

function Node(data = null, left = null, right = null) {
    return {
        data,
        left,
        right
    };
};

export default class Tree {
    #root;

    constructor(array) {
        this.#root = Tree.buildTree(array);
    };
    
    get root() {
      return this.#root;
    };

    static buildTree(array, filteredSortedArray = MergeSort(array), start = 0, end = filteredSortedArray.length - 1) { 
      if(start > end) return null; 
     
      const mid = Math.floor((start + end) / 2);
      const root = Node(filteredSortedArray[mid]);
    
      
      root.left = this.buildTree(array, filteredSortedArray, start, mid - 1);
      root.right = this.buildTree(array, filteredSortedArray, mid + 1, end);
  
      return root;
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

    insert(value, root = this.#root) {
      const node = root;

      if(root.data !== value) {

      if(root.left === null && root.data > value) {       
        node.left = Node(value);

        return true;
      };

      if(root.right === null && root.data < value) {
        node.right = Node(value);

        return true;
      };
      }

      if(root.data > value) {
        
        return this.insert(value, node.left);
      };
  
      if(root.data < value) {
  
        return this.insert(value, node.right);
      };

      console.log(`${value} already exist in the tree`)

      return false
    };

    remove(value, root = this.#root) {
      const node = root;
    
      if(root !== null && root.data === value) {
        // if the given value is a leaf node
        if(root.left === null && root.right === null) {
          node.data = null;

          return true;
        };
        // if the given values right subtree is null
        if(root.right === null) {
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
        if(root.left === null) {
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
        if(root.left !== null && root.right !== null) {
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
      if(root !== null) {
        if(root.data > value) {

          return this.remove(value, node.left);
        };
  
        if(root.data < value) {
  
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

    levelOrder(callback, root = this.#root) {
      if(root === null) return null;

      if(typeof callback === "function") {
        const queue = [];
        // let array = [];
        queue.push(root);

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

      queue.push(root);

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

    levelOrderRecursion(callback, queue = [this.#root], array = []) {
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

    inOrder(callback, root =this.#root, array = []) {
      if(typeof callback === "function") {
        if(root === null) {

          return root;
        };

        this.inOrder(callback, root.left, array);

        callback(root);
        
        this.inOrder(callback, root.right, array);

        return true;
      };

      
      if(root === null) {
        
        return root
      };
      
      this.inOrder(callback, root.left, array);
    
      array.push(root.data)

      this.inOrder(callback, root.right, array);


      return array
    };

    preOrder(callback, root = this.#root, array = []) {
      if(typeof callback === "function") {
        if(root === null) {

          return root;
        };

        callback(root);

        this.preOrder(callback, root.left, array);
        this.preOrder(callback, root.right, array);

        return true;
      };

      if(root === null) {
     
        return root;
      };
      
      array.push(root.data);

      this.preOrder(callback, root.left, array);
      this.preOrder(callback, root.right, array);

      return array;
    };

    postOrder(callback, root = this.#root, array = []) {
      if(typeof callback === "function") {
        if(root === null) {

          return root;
        };

        this.postOrder(callback, root.left, array);
        this.postOrder(callback, root.right, array);

        callback(root);

        return true
      };

      if(root === null) {

        return root;
      };

      this.postOrder(callback, root.left, array);
      this.postOrder(callback, root.right, array);

     
      array.push(root.data);

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
      // console.log("root node", root)
      // console.log("left node", root.left, "height",leftHeight)
      // console.log("right node", root.right, "height", rightHeight,)
      
      // console.log("difference", calcHeightDiff)

      if(calcHeightDiff > 1) {
    
        
        return false
      };

    const left = this.isBalanced(root.left);
    const right = this.isBalanced(root.right);
  
    if(left === false || right === false) {
      // console.log("node", root)
 
      return false;
    };


    return true;
    };

    reBalance(root = this.#root) {
      if(this.isBalanced() === true) {

        console.log("tree is balanced.");
        return false;
      };
      const getAllNodes = this.inOrder(root);
      
      this.#root = Tree.buildTree(getAllNodes);

      console.log("tree is not balanced, rebalancing.");

      return true;
    };
};

