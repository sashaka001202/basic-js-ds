const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;

  }

  add( data ) {
    if (!root) {
      return new Node(data);
    } else {
      this.newRoot = addNewEl(this.newRoot, data);
    }

    function addNewEl(root, newData) {


      if (newData.data < root.data) {
        if (root.left === null) {
          root.left = newData;
        } else {
          this.insertNode(node.left, newData);
        }
      } else {
        if (root.right === null) {
          root.right = newData;
        } else {
          this.insertNode(node.right, newData);
        }
      }
      return node;
    }


  }

  has( data ) {
   
  }

  find( data ) {
  
  }

  remove( data ) {
    this.root1 = removeNode(this.root1, data);

    function removeNode(node, data) {

  }
  }

  min() {
   
  }

  max() {
  }  

}
module.exports = {
  BinarySearchTree
};