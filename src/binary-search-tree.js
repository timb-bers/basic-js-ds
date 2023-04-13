const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const NEW_NODE = new Node(data)

    if(!this.head) {
      this.head = NEW_NODE;
      return;
    }

    let currentNode = this.head;

    while(currentNode) {
      if(NEW_NODE.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = NEW_NODE;
          return;
        }
          currentNode = currentNode.left;
        }
          else {
            if(!currentNode.right) {
             currentNode.right = NEW_NODE;
             return;
            }
            currentNode = currentNode.right;
         }
      }
  }

  has(data) {
    if (this.find(data)) return true;

    return false;
  }

  find(data) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (data < currentNode.data) currentNode = currentNode.left;
      else if (data > currentNode.data) currentNode = currentNode.right;
      else return currentNode;
    }

    return null
  }

  remove(data) {
    function _remove(node, value) {

      if (!node) return null;

      if (value < node.data) {
        node.left = _remove(node.left, value);
        return node;
      }

      if (value > node.data) {
        node.right = _remove(node.right, value);
        return node;
      }

      if (value === node.data) {
        if (!node.left && !node.right) return null;
        if (!node.left || !node.right) return node.right || node.left;
        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = _remove(node.left, maxLeft.data);
        return node;
      }
    }
    this.head = _remove(this.head, data);
  }

  min() {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};