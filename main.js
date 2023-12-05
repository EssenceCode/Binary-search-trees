/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/binary-search-tree.js":
/*!******************************************!*\
  !*** ./src/module/binary-search-tree.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-sort */ "./src/module/merge-sort.js");



function Node(data = null, left = null, right = null) {
    return {
        data,
        left,
        right
    };
};

class Tree {
    #root;

    constructor(array) {
        this.#root = Tree.buildTree(array);
    };
    
    get root() {
      return this.#root;
    };

    static buildTree(array, filteredSortedArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_0__["default"])(array), start = 0, end = filteredSortedArray.length - 1) { 
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



/***/ }),

/***/ "./src/module/merge-sort.js":
/*!**********************************!*\
  !*** ./src/module/merge-sort.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MergeSort)
/* harmony export */ });
function merge(leftArr, rightArr, mergeArr) {
    let leftArrIndex = 0;
    let rightArrIndex = 0;
    let mergeArrIndex = 0;

    const leftArrLength = leftArr.length;
    const rightArrLength = rightArr.length;



    while (leftArrIndex < leftArrLength && rightArrIndex < rightArrLength) {
        if(leftArr[leftArrIndex] < rightArr[rightArrIndex]) {
            mergeArr.splice(mergeArrIndex,1, leftArr[leftArrIndex]);
            
            mergeArrIndex += 1;
            leftArrIndex += 1;
        }
       
        else {
            mergeArr.splice(mergeArrIndex,1, rightArr[rightArrIndex]);
           
            mergeArrIndex += 1;
            rightArrIndex += 1;
        }
    }

    while(leftArrIndex < leftArrLength) {
        mergeArr.splice(mergeArrIndex,1, leftArr[leftArrIndex]);
       
        mergeArrIndex += 1;
        leftArrIndex += 1;
    }
    while(rightArrIndex < rightArrLength) {
        mergeArr.splice(mergeArrIndex,1, rightArr[rightArrIndex]);
        
        mergeArrIndex += 1;
        rightArrIndex += 1;
    }
    
    return mergeArr;
}

function sort(arr) {
    const start = 0;
    const end = arr.length;
    const mergeArr = [];

    if(end === 1) return arr;


    const mid = Math.ceil((start + end) / 2);

    const leftSlice = arr.slice(start, mid);
    const rightSlice = arr.slice(mid, end);

   
    sort(leftSlice);

    sort(rightSlice);

    merge(leftSlice,rightSlice, arr);
   
    return mergeArr.concat(arr);
}


function MergeSort(arr) {
    
    return sort(arr).filter((value, index, array) => array.indexOf(value) === index);
};

/***/ }),

/***/ "./src/module/tree-driver.js":
/*!***********************************!*\
  !*** ./src/module/tree-driver.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ testTree)
/* harmony export */ });
/* harmony import */ var _binary_search_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binary-search-tree */ "./src/module/binary-search-tree.js");


function testTree(arrayLength) {
    const array = Array.from(({length: arrayLength}), () => Math.floor(Math.random() * 100))

    const binaryTree = new _binary_search_tree__WEBPACK_IMPORTED_MODULE_0__["default"](array)

    console.log(binaryTree.prettyPrint(binaryTree.root));

    console.log("is balance:", binaryTree.isBalanced());

    console.log("levelOrder", binaryTree.levelOrder());
    console.log("preOrder", binaryTree.preOrder());
    console.log("postOrder", binaryTree.postOrder());
    console.log("inOrder", binaryTree.inOrder());

    console.log("====================");

    binaryTree.insert(200)
    binaryTree.insert(201)


    console.log("is balance:", binaryTree.isBalanced());

    console.log(binaryTree.prettyPrint(binaryTree.root));

    console.log("====================");


    console.log("rebalance", binaryTree.reBalance())

    console.log("is balance:", binaryTree.isBalanced());


    console.log("levelOrder", binaryTree.levelOrder());
    console.log("preOrder", binaryTree.preOrder());
    console.log("postOrder", binaryTree.postOrder());
    console.log("inOrder", binaryTree.inOrder());

    console.log(binaryTree.prettyPrint(binaryTree.root));
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_tree_driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/tree-driver */ "./src/module/tree-driver.js");


console.log((0,_module_tree_driver__WEBPACK_IMPORTED_MODULE_0__["default"])(12))

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCx1REFBUztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTyxFQUFFLHlCQUF5QjtBQUMxRTtBQUNBLHFCQUFxQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNuRTtBQUNBLHVDQUF1QyxPQUFPLEVBQUUseUJBQXlCO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixPQUFPOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxXQUFXLEtBQUssU0FBUzs7QUFFNUQ7QUFDQTtBQUNBLGlDQUFpQyxXQUFXLEtBQUssU0FBUztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdGVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRXdDOztBQUV6QjtBQUNmLCtCQUErQixvQkFBb0I7O0FBRW5ELDJCQUEyQiwyREFBSTs7QUFFL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUMsWUFBWSwrREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvbW9kdWxlL2JpbmFyeS1zZWFyY2gtdHJlZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL21vZHVsZS9tZXJnZS1zb3J0LmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvbW9kdWxlL3RyZWUtZHJpdmVyLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE1lcmdlU29ydCBmcm9tIFwiLi9tZXJnZS1zb3J0XCI7XG5cbmZ1bmN0aW9uIE5vZGUoZGF0YSA9IG51bGwsIGxlZnQgPSBudWxsLCByaWdodCA9IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRhLFxuICAgICAgICBsZWZ0LFxuICAgICAgICByaWdodFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcbiAgICAjcm9vdDtcblxuICAgIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgICAgIHRoaXMuI3Jvb3QgPSBUcmVlLmJ1aWxkVHJlZShhcnJheSk7XG4gICAgfTtcbiAgICBcbiAgICBnZXQgcm9vdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiNyb290O1xuICAgIH07XG5cbiAgICBzdGF0aWMgYnVpbGRUcmVlKGFycmF5LCBmaWx0ZXJlZFNvcnRlZEFycmF5ID0gTWVyZ2VTb3J0KGFycmF5KSwgc3RhcnQgPSAwLCBlbmQgPSBmaWx0ZXJlZFNvcnRlZEFycmF5Lmxlbmd0aCAtIDEpIHsgXG4gICAgICBpZihzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7IFxuICAgICBcbiAgICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgY29uc3Qgcm9vdCA9IE5vZGUoZmlsdGVyZWRTb3J0ZWRBcnJheVttaWRdKTtcbiAgICBcbiAgICAgIFxuICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5idWlsZFRyZWUoYXJyYXksIGZpbHRlcmVkU29ydGVkQXJyYXksIHN0YXJ0LCBtaWQgLSAxKTtcbiAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmJ1aWxkVHJlZShhcnJheSwgZmlsdGVyZWRTb3J0ZWRBcnJheSwgbWlkICsgMSwgZW5kKTtcbiAgXG4gICAgICByZXR1cm4gcm9vdDtcbiAgfTtcblxuICAgIHByZXR0eVByaW50KG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpe1xuICAgICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpbnNlcnQodmFsdWUsIHJvb3QgPSB0aGlzLiNyb290KSB7XG4gICAgICBjb25zdCBub2RlID0gcm9vdDtcblxuICAgICAgaWYocm9vdC5kYXRhICE9PSB2YWx1ZSkge1xuXG4gICAgICBpZihyb290LmxlZnQgPT09IG51bGwgJiYgcm9vdC5kYXRhID4gdmFsdWUpIHsgICAgICAgXG4gICAgICAgIG5vZGUubGVmdCA9IE5vZGUodmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcblxuICAgICAgaWYocm9vdC5yaWdodCA9PT0gbnVsbCAmJiByb290LmRhdGEgPCB2YWx1ZSkge1xuICAgICAgICBub2RlLnJpZ2h0ID0gTm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZihyb290LmRhdGEgPiB2YWx1ZSkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLmxlZnQpO1xuICAgICAgfTtcbiAgXG4gICAgICBpZihyb290LmRhdGEgPCB2YWx1ZSkge1xuICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKGAke3ZhbHVlfSBhbHJlYWR5IGV4aXN0IGluIHRoZSB0cmVlYClcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfTtcblxuICAgIHJlbW92ZSh2YWx1ZSwgcm9vdCA9IHRoaXMuI3Jvb3QpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSByb290O1xuICAgIFxuICAgICAgaWYocm9vdCAhPT0gbnVsbCAmJiByb290LmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICAgIC8vIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGxlYWYgbm9kZVxuICAgICAgICBpZihyb290LmxlZnQgPT09IG51bGwgJiYgcm9vdC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgIG5vZGUuZGF0YSA9IG51bGw7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gaWYgdGhlIGdpdmVuIHZhbHVlcyByaWdodCBzdWJ0cmVlIGlzIG51bGxcbiAgICAgICAgaWYocm9vdC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIGlmIHRoZSBub2RlJ3MgbGVmdCBzdWJ0cmVlcyBsZWZ0IGFyZSBub3QgbnVsbFxuICAgICAgICAgIC8vIHBvaW50IGl0IHRvIGFzIHRoZSBuZXcgbm9kZSdzIGxlZnRcbiAgICAgICAgICBpZihub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IG5vZGUubGVmdC5kYXRhO1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbm9kZS5sZWZ0LmxlZnRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIG5vZGUuZGF0YSA9IG5vZGUubGVmdC5kYXRhO1xuICAgICAgICAgIG5vZGUubGVmdCA9IG51bGxcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmlnaHQgc3VidHJlZVxuICAgICAgICBpZihyb290LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICBpZihub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBub2RlLnJpZ2h0LmRhdGE7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gbm9kZS5yaWdodC5yaWdodDtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBub2RlLmRhdGEgPSBub2RlLnJpZ2h0LmRhdGE7XG4gICAgICAgICAgbm9kZS5yaWdodCA9IG51bGw7XG4gICAgIFxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAvLyBib3RoIHN1YnRyZWUgYXJlIG5vdCBudWxsXG4gICAgICAgIGlmKHJvb3QubGVmdCAhPT0gbnVsbCAmJiByb290LnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgbGV0IHByZWRlY2Vzc29yID0gbm9kZTtcbiAgICAgICAgICBsZXQgc3VjY2Vzc29yID0gbm9kZS5yaWdodDtcblxuICAgICAgICAgIHdoaWxlKHN1Y2Nlc3Nvci5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBcbiAgICAgICAgICAgIHByZWRlY2Vzc29yID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgc3VjY2Vzc29yID0gc3VjY2Vzc29yLmxlZnQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZihwcmVkZWNlc3NvciAhPT0gbm9kZSkge1xuICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgICAgIHByZWRlY2Vzc29yLmxlZnQgPSBzdWNjZXNzb3IucmlnaHQ7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBzdWNjZXNzb3IuZGF0YTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfTtcbiAgICAgICBcbiAgICAgICAgICBwcmVkZWNlc3Nvci5yaWdodCA9IHN1Y2Nlc3Nvci5yaWdodDtcbiAgICAgICAgICBub2RlLmRhdGEgPSBzdWNjZXNzb3IuZGF0YTtcblxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgIH07XG5cbiAgICAgIC8vIHJlY3Vyc2lvbiB0byB0cmF2ZXJzZSB0aGUgdHJlZSB0aWxsIHdlIHJlYWNoIHRoZSBnaXZlbiB2YWx1ZTtcbiAgICAgIGlmKHJvb3QgIT09IG51bGwpIHtcbiAgICAgICAgaWYocm9vdC5kYXRhID4gdmFsdWUpIHtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZSh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIGlmKHJvb3QuZGF0YSA8IHZhbHVlKSB7XG4gIFxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZSh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGAke3ZhbHVlfSBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdHJlZS5gKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfTtcblxuICAgIGZpbmQodmFsdWUsIHF1ZXVlID0gWyAgdGhpcy4jcm9vdCBdKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gcXVldWVbMF07XG4gICAgXG4gICAgICBpZih2YWx1ZSA9PT0gY3VycmVudC5kYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICB9O1xuXG5cbiAgICAgIGlmKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xuXG4gICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5sZWZ0KTtcbiAgICAgIH07XG5cbiAgICAgIGlmKGN1cnJlbnQucmlnaHQgIT09IG51bGwpIHtcblxuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpO1xuICAgICAgfTtcblxuICAgICAgcXVldWUuc2hpZnQoKTtcblxuICAgICAgaWYocXVldWUubGVuZ3RoID09PSAwICYmIHZhbHVlICE9PSBjdXJyZW50LmRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBkb2VzIG5vdCBleGlzdFwiKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYocXVldWUubGVuZ3RoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZCh2YWx1ZSwgcXVldWUpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfTtcblxuICAgIGxldmVsT3JkZXIoY2FsbGJhY2ssIHJvb3QgPSB0aGlzLiNyb290KSB7XG4gICAgICBpZihyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uc3QgcXVldWUgPSBbXTtcbiAgICAgICAgLy8gbGV0IGFycmF5ID0gW107XG4gICAgICAgIHF1ZXVlLnB1c2gocm9vdCk7XG5cbiAgICAgICAgd2hpbGUocXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudCA9IHF1ZXVlWzBdO1xuICAgICAgICAgIC8vIGFycmF5ID0gYXJyYXkuY29uY2F0KGNhbGxiYWNrKGN1cnJlbnQuZGF0YSkpO1xuICAgICAgICAgIGNhbGxiYWNrKGN1cnJlbnQuZGF0YSlcblxuICAgICAgICAgIGlmKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQubGVmdCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmKGN1cnJlbnQucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcXVldWUucHVzaChjdXJyZW50LnJpZ2h0KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcXVldWUuc2hpZnQoKVxuICAgICAgICB9O1xuICAgICAgICAvLyByZXR1cm4gYXJyYXlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBxdWV1ZSA9IFtdO1xuICAgICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgICAgcXVldWUucHVzaChyb290KTtcblxuICAgICAgd2hpbGUocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZVswXTtcblxuICAgICAgICBhcnJheS5wdXNoKGN1cnJlbnQuZGF0YSk7XG5cbiAgICAgICAgaWYoY3VycmVudC5sZWZ0ICE9PSBudWxsKSB7XG5cbiAgICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQubGVmdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoY3VycmVudC5yaWdodCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgcXVldWUucHVzaChjdXJyZW50LnJpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgfTtcblxuXG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuICAgIGxldmVsT3JkZXJSZWN1cnNpb24oY2FsbGJhY2ssIHF1ZXVlID0gW3RoaXMuI3Jvb3RdLCBhcnJheSA9IFtdKSB7XG4gICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZVswXTtcbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKGN1cnJlbnQpXG5cbiAgICAgICAgLy8gYXJyYXkucHVzaChjYWxsYmFjayhjdXJyZW50KSlcblxuXG4gICAgICAgIGlmKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgcXVldWUucHVzaChjdXJyZW50LmxlZnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmKGN1cnJlbnQucmlnaHQgIT09IG51bGwpIHtcblxuICAgICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5yaWdodCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgIGlmKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiB0aGlzLmxldmVsT3JkZXIoY2FsbGJhY2ssIHF1ZXVlLCBhcnJheSk7XG4gICAgICAgIH07IFxuXG4gICAgICAgIC8vIHJldHVybiBhcnJheTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZVswXTtcbiAgICAgIFxuICAgICAgYXJyYXkucHVzaChjdXJyZW50LmRhdGEpO1xuXG4gICAgICBpZihjdXJyZW50LmxlZnQgIT09IG51bGwpIHtcblxuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQubGVmdCk7XG4gICAgICB9O1xuXG4gICAgICBpZihjdXJyZW50LnJpZ2h0ICE9PSBudWxsKSB7XG5cbiAgICAgICAgcXVldWUucHVzaChjdXJyZW50LnJpZ2h0KTtcbiAgICAgIH07XG5cbiAgICAgIHF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAgIGlmKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubGV2ZWxPcmRlcihjYWxsYmFjaywgcXVldWUsIGFycmF5KTtcbiAgICAgIH07IFxuXG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuICAgIGluT3JkZXIoY2FsbGJhY2ssIHJvb3QgPXRoaXMuI3Jvb3QsIGFycmF5ID0gW10pIHtcbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmKHJvb3QgPT09IG51bGwpIHtcblxuICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5PcmRlcihjYWxsYmFjaywgcm9vdC5sZWZ0LCBhcnJheSk7XG5cbiAgICAgICAgY2FsbGJhY2socm9vdCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmluT3JkZXIoY2FsbGJhY2ssIHJvb3QucmlnaHQsIGFycmF5KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIFxuICAgICAgaWYocm9vdCA9PT0gbnVsbCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJvb3RcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMuaW5PcmRlcihjYWxsYmFjaywgcm9vdC5sZWZ0LCBhcnJheSk7XG4gICAgXG4gICAgICBhcnJheS5wdXNoKHJvb3QuZGF0YSlcblxuICAgICAgdGhpcy5pbk9yZGVyKGNhbGxiYWNrLCByb290LnJpZ2h0LCBhcnJheSk7XG5cblxuICAgICAgcmV0dXJuIGFycmF5XG4gICAgfTtcblxuICAgIHByZU9yZGVyKGNhbGxiYWNrLCByb290ID0gdGhpcy4jcm9vdCwgYXJyYXkgPSBbXSkge1xuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYocm9vdCA9PT0gbnVsbCkge1xuXG4gICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsbGJhY2socm9vdCk7XG5cbiAgICAgICAgdGhpcy5wcmVPcmRlcihjYWxsYmFjaywgcm9vdC5sZWZ0LCBhcnJheSk7XG4gICAgICAgIHRoaXMucHJlT3JkZXIoY2FsbGJhY2ssIHJvb3QucmlnaHQsIGFycmF5KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIGlmKHJvb3QgPT09IG51bGwpIHtcbiAgICAgXG4gICAgICAgIHJldHVybiByb290O1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgYXJyYXkucHVzaChyb290LmRhdGEpO1xuXG4gICAgICB0aGlzLnByZU9yZGVyKGNhbGxiYWNrLCByb290LmxlZnQsIGFycmF5KTtcbiAgICAgIHRoaXMucHJlT3JkZXIoY2FsbGJhY2ssIHJvb3QucmlnaHQsIGFycmF5KTtcblxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG5cbiAgICBwb3N0T3JkZXIoY2FsbGJhY2ssIHJvb3QgPSB0aGlzLiNyb290LCBhcnJheSA9IFtdKSB7XG4gICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBpZihyb290ID09PSBudWxsKSB7XG5cbiAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBvc3RPcmRlcihjYWxsYmFjaywgcm9vdC5sZWZ0LCBhcnJheSk7XG4gICAgICAgIHRoaXMucG9zdE9yZGVyKGNhbGxiYWNrLCByb290LnJpZ2h0LCBhcnJheSk7XG5cbiAgICAgICAgY2FsbGJhY2socm9vdCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG5cbiAgICAgIGlmKHJvb3QgPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucG9zdE9yZGVyKGNhbGxiYWNrLCByb290LmxlZnQsIGFycmF5KTtcbiAgICAgIHRoaXMucG9zdE9yZGVyKGNhbGxiYWNrLCByb290LnJpZ2h0LCBhcnJheSk7XG5cbiAgICAgXG4gICAgICBhcnJheS5wdXNoKHJvb3QuZGF0YSk7XG5cbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuXG4gICAgaGVpZ2h0KG5vZGUpIHtcbiAgICAgIGlmKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAtIDE7XG4gICAgICB9O1xuICAgICAgXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy5oZWlnaHQobm9kZS5sZWZ0KTtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5oZWlnaHQobm9kZS5yaWdodCk7XG5cbiAgICAgIGNvbnN0IGNhbGNIZWlnaHQgPSBNYXRoLm1heChsZWZ0LCByaWdodCkgKyAxO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJub2RlXCIsIG5vZGUsIFwiY2FsY0hlaWdodFwiLCBsZWZ0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZVwiLCBub2RlLFwicmlnaHRUcmVlXCIsIHJpZ2h0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZVwiLCBub2RlLCBcImhlaWdodFwiLCBjYWxjSGVpZ2h0KVxuICAgICAgXG4gICAgICByZXR1cm4gY2FsY0hlaWdodDtcbiAgICB9O1xuXG4gICAgLy8gdGhlIGRlcHRoIG9mIHRoZSBnaXZlbiBub2RlIGlzIGp1c3QgdGhlIG51bWJlciBvZiByZWN1cnNpb24gaXQgdG9vayB0byBnZXQgdGhlcmUuXG4gICAgZGVwdGgobm9kZSwgcm9vdCA9IHRoaXMuI3Jvb3QsIG1heERlcHRoID0gMCkge1xuICAgICAgaWYocm9vdCA9PT0gbnVsbCB8fCBub2RlID09PSBmYWxzZSkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIC0gMTtcbiAgICAgIH07XG4gICAgIFxuICAgICAgaWYobm9kZSA9PT0gcm9vdCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgZGVwdGggb2YgJHtyb290LmRhdGF9IGlzICR7bWF4RGVwdGh9YClcblxuICAgICAgICByZXR1cm4gbWF4RGVwdGg7XG4gICAgICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coYGRlcHRoIG9mICR7cm9vdC5kYXRhfSBpcyAke21heERlcHRofWApXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm5vZGVcIiwgcm9vdCwgXCJkZXB0aFwiLCBtYXhEZXB0aClcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmRlcHRoKG5vZGUsIHJvb3QubGVmdCwgbWF4RGVwdGggKyAxKVxuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmRlcHRoKG5vZGUsIHJvb3QucmlnaHQsIG1heERlcHRoICsgMSlcbiAgICAgXG5cbiAgICAgIFxuICAgICAgY29uc3QgY2FsY0RlcHRoID0gTWF0aC5tYXgobGVmdCwgcmlnaHQpO1xuICAgIFxuICAgICAgcmV0dXJuIGNhbGNEZXB0aDtcbiAgICB9O1xuXG4gICAgaXNCYWxhbmNlZChyb290ID0gdGhpcy4jcm9vdCkge1xuICAgICAgaWYocm9vdCA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgICBjb25zdCBsZWZ0SGVpZ2h0PSB0aGlzLmhlaWdodChyb290LmxlZnQpO1xuICAgICAgY29uc3QgcmlnaHRIZWlnaHQgPSB0aGlzLmhlaWdodChyb290LnJpZ2h0KTtcblxuICAgICAgY29uc3QgY2FsY0hlaWdodERpZmYgPSBNYXRoLmFicyhsZWZ0SGVpZ2h0IC0gcmlnaHRIZWlnaHQpXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJvb3Qgbm9kZVwiLCByb290KVxuICAgICAgLy8gY29uc29sZS5sb2coXCJsZWZ0IG5vZGVcIiwgcm9vdC5sZWZ0LCBcImhlaWdodFwiLGxlZnRIZWlnaHQpXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJpZ2h0IG5vZGVcIiwgcm9vdC5yaWdodCwgXCJoZWlnaHRcIiwgcmlnaHRIZWlnaHQsKVxuICAgICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImRpZmZlcmVuY2VcIiwgY2FsY0hlaWdodERpZmYpXG5cbiAgICAgIGlmKGNhbGNIZWlnaHREaWZmID4gMSkge1xuICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9O1xuXG4gICAgY29uc3QgbGVmdCA9IHRoaXMuaXNCYWxhbmNlZChyb290LmxlZnQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5pc0JhbGFuY2VkKHJvb3QucmlnaHQpO1xuICBcbiAgICBpZihsZWZ0ID09PSBmYWxzZSB8fCByaWdodCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZVwiLCByb290KVxuIFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cblxuICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICByZUJhbGFuY2Uocm9vdCA9IHRoaXMuI3Jvb3QpIHtcbiAgICAgIGlmKHRoaXMuaXNCYWxhbmNlZCgpID09PSB0cnVlKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmVlIGlzIGJhbGFuY2VkLlwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGdldEFsbE5vZGVzID0gdGhpcy5pbk9yZGVyKHJvb3QpO1xuICAgICAgXG4gICAgICB0aGlzLiNyb290ID0gVHJlZS5idWlsZFRyZWUoZ2V0QWxsTm9kZXMpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInRyZWUgaXMgbm90IGJhbGFuY2VkLCByZWJhbGFuY2luZy5cIik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59O1xuXG4iLCJmdW5jdGlvbiBtZXJnZShsZWZ0QXJyLCByaWdodEFyciwgbWVyZ2VBcnIpIHtcbiAgICBsZXQgbGVmdEFyckluZGV4ID0gMDtcbiAgICBsZXQgcmlnaHRBcnJJbmRleCA9IDA7XG4gICAgbGV0IG1lcmdlQXJySW5kZXggPSAwO1xuXG4gICAgY29uc3QgbGVmdEFyckxlbmd0aCA9IGxlZnRBcnIubGVuZ3RoO1xuICAgIGNvbnN0IHJpZ2h0QXJyTGVuZ3RoID0gcmlnaHRBcnIubGVuZ3RoO1xuXG5cblxuICAgIHdoaWxlIChsZWZ0QXJySW5kZXggPCBsZWZ0QXJyTGVuZ3RoICYmIHJpZ2h0QXJySW5kZXggPCByaWdodEFyckxlbmd0aCkge1xuICAgICAgICBpZihsZWZ0QXJyW2xlZnRBcnJJbmRleF0gPCByaWdodEFycltyaWdodEFyckluZGV4XSkge1xuICAgICAgICAgICAgbWVyZ2VBcnIuc3BsaWNlKG1lcmdlQXJySW5kZXgsMSwgbGVmdEFycltsZWZ0QXJySW5kZXhdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbWVyZ2VBcnJJbmRleCArPSAxO1xuICAgICAgICAgICAgbGVmdEFyckluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXJnZUFyci5zcGxpY2UobWVyZ2VBcnJJbmRleCwxLCByaWdodEFycltyaWdodEFyckluZGV4XSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgbWVyZ2VBcnJJbmRleCArPSAxO1xuICAgICAgICAgICAgcmlnaHRBcnJJbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUobGVmdEFyckluZGV4IDwgbGVmdEFyckxlbmd0aCkge1xuICAgICAgICBtZXJnZUFyci5zcGxpY2UobWVyZ2VBcnJJbmRleCwxLCBsZWZ0QXJyW2xlZnRBcnJJbmRleF0pO1xuICAgICAgIFxuICAgICAgICBtZXJnZUFyckluZGV4ICs9IDE7XG4gICAgICAgIGxlZnRBcnJJbmRleCArPSAxO1xuICAgIH1cbiAgICB3aGlsZShyaWdodEFyckluZGV4IDwgcmlnaHRBcnJMZW5ndGgpIHtcbiAgICAgICAgbWVyZ2VBcnIuc3BsaWNlKG1lcmdlQXJySW5kZXgsMSwgcmlnaHRBcnJbcmlnaHRBcnJJbmRleF0pO1xuICAgICAgICBcbiAgICAgICAgbWVyZ2VBcnJJbmRleCArPSAxO1xuICAgICAgICByaWdodEFyckluZGV4ICs9IDE7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBtZXJnZUFycjtcbn1cblxuZnVuY3Rpb24gc29ydChhcnIpIHtcbiAgICBjb25zdCBzdGFydCA9IDA7XG4gICAgY29uc3QgZW5kID0gYXJyLmxlbmd0aDtcbiAgICBjb25zdCBtZXJnZUFyciA9IFtdO1xuXG4gICAgaWYoZW5kID09PSAxKSByZXR1cm4gYXJyO1xuXG5cbiAgICBjb25zdCBtaWQgPSBNYXRoLmNlaWwoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuXG4gICAgY29uc3QgbGVmdFNsaWNlID0gYXJyLnNsaWNlKHN0YXJ0LCBtaWQpO1xuICAgIGNvbnN0IHJpZ2h0U2xpY2UgPSBhcnIuc2xpY2UobWlkLCBlbmQpO1xuXG4gICBcbiAgICBzb3J0KGxlZnRTbGljZSk7XG5cbiAgICBzb3J0KHJpZ2h0U2xpY2UpO1xuXG4gICAgbWVyZ2UobGVmdFNsaWNlLHJpZ2h0U2xpY2UsIGFycik7XG4gICBcbiAgICByZXR1cm4gbWVyZ2VBcnIuY29uY2F0KGFycik7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVyZ2VTb3J0KGFycikge1xuICAgIFxuICAgIHJldHVybiBzb3J0KGFycikuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xufTsiLCJpbXBvcnQgVHJlZSBmcm9tIFwiLi9iaW5hcnktc2VhcmNoLXRyZWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdFRyZWUoYXJyYXlMZW5ndGgpIHtcbiAgICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oKHtsZW5ndGg6IGFycmF5TGVuZ3RofSksICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkpXG5cbiAgICBjb25zdCBiaW5hcnlUcmVlID0gbmV3IFRyZWUoYXJyYXkpXG5cbiAgICBjb25zb2xlLmxvZyhiaW5hcnlUcmVlLnByZXR0eVByaW50KGJpbmFyeVRyZWUucm9vdCkpO1xuXG4gICAgY29uc29sZS5sb2coXCJpcyBiYWxhbmNlOlwiLCBiaW5hcnlUcmVlLmlzQmFsYW5jZWQoKSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImxldmVsT3JkZXJcIiwgYmluYXJ5VHJlZS5sZXZlbE9yZGVyKCkpO1xuICAgIGNvbnNvbGUubG9nKFwicHJlT3JkZXJcIiwgYmluYXJ5VHJlZS5wcmVPcmRlcigpKTtcbiAgICBjb25zb2xlLmxvZyhcInBvc3RPcmRlclwiLCBiaW5hcnlUcmVlLnBvc3RPcmRlcigpKTtcbiAgICBjb25zb2xlLmxvZyhcImluT3JkZXJcIiwgYmluYXJ5VHJlZS5pbk9yZGVyKCkpO1xuXG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PVwiKTtcblxuICAgIGJpbmFyeVRyZWUuaW5zZXJ0KDIwMClcbiAgICBiaW5hcnlUcmVlLmluc2VydCgyMDEpXG5cblxuICAgIGNvbnNvbGUubG9nKFwiaXMgYmFsYW5jZTpcIiwgYmluYXJ5VHJlZS5pc0JhbGFuY2VkKCkpO1xuXG4gICAgY29uc29sZS5sb2coYmluYXJ5VHJlZS5wcmV0dHlQcmludChiaW5hcnlUcmVlLnJvb3QpKTtcblxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT1cIik7XG5cblxuICAgIGNvbnNvbGUubG9nKFwicmViYWxhbmNlXCIsIGJpbmFyeVRyZWUucmVCYWxhbmNlKCkpXG5cbiAgICBjb25zb2xlLmxvZyhcImlzIGJhbGFuY2U6XCIsIGJpbmFyeVRyZWUuaXNCYWxhbmNlZCgpKTtcblxuXG4gICAgY29uc29sZS5sb2coXCJsZXZlbE9yZGVyXCIsIGJpbmFyeVRyZWUubGV2ZWxPcmRlcigpKTtcbiAgICBjb25zb2xlLmxvZyhcInByZU9yZGVyXCIsIGJpbmFyeVRyZWUucHJlT3JkZXIoKSk7XG4gICAgY29uc29sZS5sb2coXCJwb3N0T3JkZXJcIiwgYmluYXJ5VHJlZS5wb3N0T3JkZXIoKSk7XG4gICAgY29uc29sZS5sb2coXCJpbk9yZGVyXCIsIGJpbmFyeVRyZWUuaW5PcmRlcigpKTtcblxuICAgIGNvbnNvbGUubG9nKGJpbmFyeVRyZWUucHJldHR5UHJpbnQoYmluYXJ5VHJlZS5yb290KSk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRlc3RUcmVlIGZyb20gXCIuL21vZHVsZS90cmVlLWRyaXZlclwiO1xuXG5jb25zb2xlLmxvZyh0ZXN0VHJlZSgxMikpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=