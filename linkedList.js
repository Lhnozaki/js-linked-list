/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;
  let node = function(value) {
    return {
      value: value,
      next: null
    };
  };

  let getHead = function() {
    //return the head node
    return head;
  };

  let getTail = function() {
    //return the tail node
    return tail;
  };

  let add = function(value) {
    //create new node
    let newNode = node(value);

    //If head does not exist, store the new node as the head and tail.
    //If head is already defined, keep head node and rewrite tail node. Then change the "next".
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    return newNode;
  };

  let remove = function(number) {
    //Get node from index using get().
    let currentNode = get(number);
    let previousNode = get(number - 1);

    //If null, return false.
    if (currentNode === false) {
      return false;
    } else if (number === 0) {
      //Check if node is the header
      head = currentNode.next;
    } else if (currentNode.next === null) {
      //Check if the node is the tail
      tail = previousNode;
      tail.next = null;
    } else {
      //If neither, point the previous node to the next node.
      previousNode.next = currentNode.next;
    }
  };

  let get = function(number) {
    //Get the head using getHead
    let currentNode = getHead();
    //Create a Counter
    let count = 0;
    //If number/index is 0, return the Head
    if (number === 0) {
      return currentNode;
    }
    // While count is less that the number/index, increment counter by 1 and then reference the head to the "next" pointer.
    while (count < number) {
      currentNode = currentNode.next;
      count++;
      if (currentNode === null) {
        return false;
      }
    }

    return currentNode;
  };

  let insert = function(value, number) {
    let insertedNode = node(value);
    let currentNode = get(number);
    let previousNode = get(number - 1);

    if (number < 0) {
      return false;
    } else if (currentNode === false) {
      return false;
    } else if (number === 0) {
      insertedNode.next = head;
      head = insertedNode;
      return head;
    } else {
      insertedNode.next = currentNode;
      previousNode.next = insertedNode;
    }
  };

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}
