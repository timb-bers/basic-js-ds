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

  root() {
    return this.first_root
  }

  add(data) {
    const NEW_NODE = new Node(data)
    if(!this.first_root) {
      this.first_root = NEW_NODE;
      return;
    }

    let currentNode = this.first_root;

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

  has() {
    if (this.find(data)) {
      return true;
    }
    return false;
  }

  find(data) {
    if(!this.first_root) {
      return null
    }

    let currentNode = this.first_root;
    let parentNode = null;
    
    while(currentNode) {
      if (data === currentNode.data) {
        this.parentNode = parentNode;
        return currentNode
      }
      else if (data > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      else {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }     
     }
    
    return currentNode
  }

  remove(data) {
    this.first_root = removeNode(this.first_root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    if(!this.first_root) {
      return null
    }

    let currentNode = this.first_root;
    
    while(currentNode.left) {
      currentNode = currentNode.left
  }
    return currentNode.data
  }

  max() {
    if(!this.first_root) {
      return null
    }

    let currentNode = this.first_root;
    
    while(currentNode.right) {
      currentNode = currentNode.right
  }
    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};