const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    constructor() {
    this.arr = []
  }
  push( element ) {
    this.arr.splice(element.length - 1, 0, element)
  }

  pop() {
    let res = this.arr[0]
    this.arr = this.arr.slice(1)
    return res
  }

  peek() {
    return this.arr[0]
  }
}

const stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.arr)

module.exports = {
  Stack
};
