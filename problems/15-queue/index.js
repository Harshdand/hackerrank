// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.push(record);
    }

    remove() {
        return this.data.shift();
    }

    front() {
        return this.data[0];
    }

    isEmpty() {
        return this.data.length === 0
    }

    printQueue() {
        for (let record of this.data) {
            console.log(record);
        }
    }
}

module.exports = Queue;
