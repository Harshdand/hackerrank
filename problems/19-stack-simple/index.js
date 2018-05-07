// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// stack based on indexes, does'nt remove the items
class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
    }

    push(record) {
        this.data[++this.top] = record;
    }

    pop() {
        return this.data[this.top--];
    }

    peek() {
        return this.data[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }
}

module.exports = Stack;
