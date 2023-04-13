const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

/* 
  while (l.value === k) {
    l = l.next;
  }
  let newList = l;
  while (newList.next) {
    if (newList.next.value === k) {
      newList.next = newList.next.next;
    } else {
      newList = newList.next;
    }
  }
  return l;
*/
function removeKFromList(l, k) {
  if (!l) return null

  while (l && l.value === k) {
     l = l.next
  }

  let currentNode = l;
  if (currentNode) {
    while (currentNode.next) {
     if (currentNode.next.value === k) currentNode.next = currentNode.next.next
      else currentNode = currentNode.next; 
  }
}
  return l
}

module.exports = {
  removeKFromList
};
