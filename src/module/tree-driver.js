import Tree from "./binary-search-tree";

export default function testTree(arrayLength) {
    const array = Array.from(({length: arrayLength}), () => Math.floor(Math.random() * 100))

    const binaryTree = new Tree(array)

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