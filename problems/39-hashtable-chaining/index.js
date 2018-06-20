const LinkedList = require('./linked-list');

class HashTable {
    //keep limit as some prime number
    constructor(limit = 137) {
        this.table = new Array(limit);
    }

    put(item) {
        const cellItem = this.table[this.getHash(item)];

        if (cellItem) {
            cellItem.insertLast(item);
        }
        else {
            let ll = new LinkedList();
            ll.insertLast(item);
            this.table[this.getHash(item)] = ll;
        }
    }

    getHash(item) {
        let asciiSum = 0;

        for (let char of item) {
            asciiSum += char.charCodeAt(0);
        }

        return asciiSum % this.table.length;
    }

    find(item) {
        const hash = this.getHash(item);
        const list = this.table[hash];
        const listSize = list.size();

        if (!list)
            return;

        for (let index = 0; index < listSize; index++) {
            const node = list.getAt(index);
            if (node && node.data === item) {
                return node;
            }
        }

        return;
    }
}

module.exports = HashTable;