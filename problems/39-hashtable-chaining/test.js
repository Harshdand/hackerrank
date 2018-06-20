const HashTable = require('./index');

test('HashTable is a class', () => {
    expect(typeof HashTable.prototype.constructor).toEqual('function');
});

describe('Put', () => {
    test('adds an item to the hash table', () => {
        const ht = new HashTable(11);
        ht.put('Mia');
        ht.put('Harsh');
        ht.put('Sue');
        expect(ht.table[4].getAt(0).data).toEqual('Mia'); //collision
        expect(ht.table[4].getAt(1).data).toEqual('Sue'); //collision
        expect(ht.table[7].getAt(0).data).toEqual('Harsh');
    });
});

describe('Find', () => {
    test('find an item in the hash table', () => {
        const ht = new HashTable(11);
        ht.put('Mia');
        ht.put('Harsh');
        ht.put('Sue');
        expect(ht.find('Harsh').data).toEqual('Harsh');
        expect(ht.find('Mia').data).toEqual('Mia');
    });
});
