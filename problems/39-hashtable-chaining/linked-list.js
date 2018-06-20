// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let currentNode = this.head;
        let counter = 0;

        while (currentNode) {
            counter++;
            currentNode = currentNode.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;

        while (currentNode && currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        let nextNode = this.head.next;

        while (nextNode.next) {
            currentNode = nextNode;
            nextNode = nextNode.next;
        }

        currentNode.next = null;
    }

    insertLast(data) {
        const lastNode = this.getLast();
        const newNode = new Node(data);

        if (lastNode) {
            lastNode.next = newNode;
        }
        else {
            this.head = newNode;
        }
    }

    getAt(index) {
        let i = 0;
        let currentNode = this.head;

        while (i < index && currentNode) {
            currentNode = currentNode.next;
            i++;
        }

        return currentNode;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let prevNode = this.getAt(index - 1);

        if (prevNode && prevNode.next) {
            prevNode.next = prevNode.next.next;
        }
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return
        }

        const prevNode = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(data, prevNode.next);
        prevNode.next = newNode;

    }

    forEach(fn) {
        let currentNode = this.head;

        while (currentNode) {
            fn(currentNode);
            currentNode = currentNode.next;
        }
    }
}

module.exports = LinkedList;
