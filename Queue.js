const _Node = require('./_Node-Queue');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

function peek(queue) {
  return queue.first.value;
}

function isEmpty(queue) {
  return queue.first === null;
}

function size(queue) {
  let size = 0;
  let currNode = queue.first;

  while (currNode) {
    size++;
    currNode = currNode.next;
  }
  return size;
}

function display(queue) {
  let currNode = queue.first;

  while (currNode.next !== queue.last) {
    console.log(currNode);
    currNode = currNode.next;
  }
  console.log(queue.last);
}

module.exports = { 
  Queue,
  peek,
  isEmpty,
  display,
  size,
};