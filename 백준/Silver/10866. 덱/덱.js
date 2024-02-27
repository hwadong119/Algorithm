const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(item) {
    const newNode = new Node(item);
    if (this.getSize() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  pushBack(item) {
    const newNode = new Node(item);
    if (this.getSize() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  popFront() {
    if (this.getSize() === 0) {
      return -1;
    } else if (this.getSize() === 1) {
      const popedItem = this.head.item;
      this.head = null;
      this.tail = null;
      this.size--;
      return popedItem;
    } else if (this.getSize() === 2) {
      const popedItem = this.head.item;
      this.head = this.head.next;
      this.tail.prev = null;
      this.size--;
      return popedItem;
    } else if (this.getSize() > 2) {
      const popedItem = this.head.item;
      this.head.next.prev = null;
      this.head = this.head.next;
      this.size--;
      return popedItem;
    }
  }

  popBack() {
    if (this.getSize() === 0) {
      return -1;
    } else if (this.getSize() === 1) {
      const popedItem = this.tail.item;
      this.head = null;
      this.tail = null;
      this.size--;
      return popedItem;
    } else if (this.getSize() === 2) {
      const popedItem = this.tail.item;
      this.tail = this.tail.prev;
      this.head.next = null;
      this.size--;
      return popedItem;
    } else if (this.getSize() > 2) {
      const popedItem = this.tail.item;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.size--;
      return popedItem;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.getSize() ? 0 : 1;
  }

  getFront() {
    return this.getSize() ? this.head.item : -1;
  }

  getBack() {
    return this.getSize() ? this.tail.item : -1;
  }
}

const deque = new Deque();
let answer = [];
for (let i = 0; i < input.length; i++) {
  const [command, item] = input[i].split(" ");
  switch (command) {
    case "push_front": deque.pushFront(item); break;
    case "push_back": deque.pushBack(item); break;
    case "pop_front": answer.push(deque.popFront()); break;
    case "pop_back": answer.push(deque.popBack()); break;
    case "size": answer.push(deque.getSize()); break;
    case "empty": answer.push(deque.isEmpty()); break;
    case "front": answer.push(deque.getFront()); break;
    case "back": answer.push(deque.getBack()); break;
    default: break;
  }
}

console.log(answer.join("\n"));
