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
/* harmony export */   buildTree: () => (/* binding */ buildTree),
/* harmony export */   "default": () => (/* binding */ Tree),
/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint)
/* harmony export */ });
/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-sort */ "./src/module/merge-sort.js");


function Node(data = null, left = null, right = null) {
    return {
        data,
        left,
        right
    };
};

function buildTree(array, filteredArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_0__["default"])(array), start = 0, end = filteredArray.length - 1) { 
    if(start > end){

        return null;
    };    
   
    const mid = Math.parseInt((start + end) / 2);
    const root = Node(filteredArray[mid]);
  
    
    root.left = buildTree(array, filteredArray, start, mid - 1);
    root.right = buildTree(array, filteredArray, mid + 1, end);

    return root;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

class Tree {
    #root;

    constructor(array) {
        this.#root = buildTree(array);
    };
    
    get root() {
        return this.#root;
    };
}



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
/* harmony import */ var _module_binary_search_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/binary-search-tree */ "./src/module/binary-search-tree.js");

// import { buildTree } from "./module/binary-search-tree";

// const arr =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,12312,19999]
// const arr =  [1, 2,3,4,5,6,7,8,9,10,11]
const arr2 =  [1, 2,3,4,5,6,7,8,9,10,11,12,13]




// const tree = buildTree(arr)
// const tree = new Tree(arr)
const tree2 = new _module_binary_search_tree__WEBPACK_IMPORTED_MODULE_0__["default"](arr2)





// console.log(prettyPrint(tree.root))
console.log((0,_module_binary_search_tree__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(tree2.root))








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sMENBQTBDLHVEQUFTO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2U7QUFDZjtBQUNBOzs7Ozs7VUNyRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rRDtBQUMvRCxZQUFZLFlBQVk7O0FBRXhCO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUFJOzs7Ozs7QUFNdEI7QUFDQSxZQUFZLHVFQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9tb2R1bGUvYmluYXJ5LXNlYXJjaC10cmVlLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvbW9kdWxlL21lcmdlLXNvcnQuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lcmdlU29ydCBmcm9tIFwiLi9tZXJnZS1zb3J0XCI7XG5cbmZ1bmN0aW9uIE5vZGUoZGF0YSA9IG51bGwsIGxlZnQgPSBudWxsLCByaWdodCA9IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRhLFxuICAgICAgICBsZWZ0LFxuICAgICAgICByaWdodFxuICAgIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5LCBmaWx0ZXJlZEFycmF5ID0gTWVyZ2VTb3J0KGFycmF5KSwgc3RhcnQgPSAwLCBlbmQgPSBmaWx0ZXJlZEFycmF5Lmxlbmd0aCAtIDEpIHsgXG4gICAgaWYoc3RhcnQgPiBlbmQpe1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07ICAgIFxuICAgXG4gICAgY29uc3QgbWlkID0gTWF0aC5wYXJzZUludCgoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgY29uc3Qgcm9vdCA9IE5vZGUoZmlsdGVyZWRBcnJheVttaWRdKTtcbiAgXG4gICAgXG4gICAgcm9vdC5sZWZ0ID0gYnVpbGRUcmVlKGFycmF5LCBmaWx0ZXJlZEFycmF5LCBzdGFydCwgbWlkIC0gMSk7XG4gICAgcm9vdC5yaWdodCA9IGJ1aWxkVHJlZShhcnJheSwgZmlsdGVyZWRBcnJheSwgbWlkICsgMSwgZW5kKTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUge1xuICAgICNyb290O1xuXG4gICAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICAgICAgdGhpcy4jcm9vdCA9IGJ1aWxkVHJlZShhcnJheSk7XG4gICAgfTtcbiAgICBcbiAgICBnZXQgcm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Jvb3Q7XG4gICAgfTtcbn1cblxuIiwiZnVuY3Rpb24gbWVyZ2UobGVmdEFyciwgcmlnaHRBcnIsIG1lcmdlQXJyKSB7XG4gICAgbGV0IGxlZnRBcnJJbmRleCA9IDA7XG4gICAgbGV0IHJpZ2h0QXJySW5kZXggPSAwO1xuICAgIGxldCBtZXJnZUFyckluZGV4ID0gMDtcblxuICAgIGNvbnN0IGxlZnRBcnJMZW5ndGggPSBsZWZ0QXJyLmxlbmd0aDtcbiAgICBjb25zdCByaWdodEFyckxlbmd0aCA9IHJpZ2h0QXJyLmxlbmd0aDtcblxuXG5cbiAgICB3aGlsZSAobGVmdEFyckluZGV4IDwgbGVmdEFyckxlbmd0aCAmJiByaWdodEFyckluZGV4IDwgcmlnaHRBcnJMZW5ndGgpIHtcbiAgICAgICAgaWYobGVmdEFycltsZWZ0QXJySW5kZXhdIDwgcmlnaHRBcnJbcmlnaHRBcnJJbmRleF0pIHtcbiAgICAgICAgICAgIG1lcmdlQXJyLnNwbGljZShtZXJnZUFyckluZGV4LDEsIGxlZnRBcnJbbGVmdEFyckluZGV4XSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1lcmdlQXJySW5kZXggKz0gMTtcbiAgICAgICAgICAgIGxlZnRBcnJJbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWVyZ2VBcnIuc3BsaWNlKG1lcmdlQXJySW5kZXgsMSwgcmlnaHRBcnJbcmlnaHRBcnJJbmRleF0pO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIG1lcmdlQXJySW5kZXggKz0gMTtcbiAgICAgICAgICAgIHJpZ2h0QXJySW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlKGxlZnRBcnJJbmRleCA8IGxlZnRBcnJMZW5ndGgpIHtcbiAgICAgICAgbWVyZ2VBcnIuc3BsaWNlKG1lcmdlQXJySW5kZXgsMSwgbGVmdEFycltsZWZ0QXJySW5kZXhdKTtcbiAgICAgICBcbiAgICAgICAgbWVyZ2VBcnJJbmRleCArPSAxO1xuICAgICAgICBsZWZ0QXJySW5kZXggKz0gMTtcbiAgICB9XG4gICAgd2hpbGUocmlnaHRBcnJJbmRleCA8IHJpZ2h0QXJyTGVuZ3RoKSB7XG4gICAgICAgIG1lcmdlQXJyLnNwbGljZShtZXJnZUFyckluZGV4LDEsIHJpZ2h0QXJyW3JpZ2h0QXJySW5kZXhdKTtcbiAgICAgICAgXG4gICAgICAgIG1lcmdlQXJySW5kZXggKz0gMTtcbiAgICAgICAgcmlnaHRBcnJJbmRleCArPSAxO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbWVyZ2VBcnI7XG59XG5cbmZ1bmN0aW9uIHNvcnQoYXJyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwO1xuICAgIGNvbnN0IGVuZCA9IGFyci5sZW5ndGg7XG4gICAgY29uc3QgbWVyZ2VBcnIgPSBbXTtcblxuICAgIFxuICAgIGlmKGVuZCA9PT0gMSkgcmV0dXJuIGFycjtcblxuXG4gICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKChzdGFydCArIGVuZCkgLyAyKTtcblxuICAgIGNvbnN0IGxlZnRTbGljZSA9IGFyci5zbGljZShzdGFydCwgbWlkKTtcbiAgICBjb25zdCByaWdodFNsaWNlID0gYXJyLnNsaWNlKG1pZCwgZW5kKTtcblxuICAgXG4gICAgc29ydChsZWZ0U2xpY2UpO1xuXG4gICAgc29ydChyaWdodFNsaWNlKTtcblxuICAgIG1lcmdlKGxlZnRTbGljZSxyaWdodFNsaWNlLCBhcnIpO1xuICAgXG4gICAgcmV0dXJuIG1lcmdlQXJyLmNvbmNhdChhcnIpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lcmdlU29ydChhcnIpIHtcbiAgICByZXR1cm4gc29ydChhcnIpLmZpbHRlcigodmFsdWUsIGluZGV4LCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVHJlZSx7ICBwcmV0dHlQcmludCB9ZnJvbSBcIi4vbW9kdWxlL2JpbmFyeS1zZWFyY2gtdHJlZVwiO1xuLy8gaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSBcIi4vbW9kdWxlL2JpbmFyeS1zZWFyY2gtdHJlZVwiO1xuXG4vLyBjb25zdCBhcnIgPSAgWzEsIDcsIDQsIDIzLCA4LCA5LCA0LCAzLCA1LCA3LCA5LCA2NywgNjM0NSwgMzI0LDEyMzEyLDE5OTk5XVxuLy8gY29uc3QgYXJyID0gIFsxLCAyLDMsNCw1LDYsNyw4LDksMTAsMTFdXG5jb25zdCBhcnIyID0gIFsxLCAyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTNdXG5cblxuXG5cbi8vIGNvbnN0IHRyZWUgPSBidWlsZFRyZWUoYXJyKVxuLy8gY29uc3QgdHJlZSA9IG5ldyBUcmVlKGFycilcbmNvbnN0IHRyZWUyID0gbmV3IFRyZWUoYXJyMilcblxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhwcmV0dHlQcmludCh0cmVlLnJvb3QpKVxuY29uc29sZS5sb2cocHJldHR5UHJpbnQodHJlZTIucm9vdCkpXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==