class HashTable {
    //keep limit as some prime number
    constructor(limit = 137) {
        this.table = new Array(limit);
    }

    put(item) {
        this.table[this.getHash(item)] = item;
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
        const value = this.table[hash];

        if (!value)
            return;

        return { key: hash, value: value };
    }

    print() {
        for (let index = 0; index < this.table.length; index++) {
            if (this.table[index]) {
                console.log(index + ' : ' + this.table[index]);
            }
        }
    }
}

module.exports = HashTable;