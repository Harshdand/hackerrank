// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

function Queue() {
    this.data = [];
}

Queue.prototype.add = function (record) {
    this.data.push(record);
}

Queue.prototype.remove = function () {
    return this.data.shift();
}

module.exports = Queue;
