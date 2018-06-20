const HashTable = require('./index');

test('HashTable is a class', () => {
    expect(typeof HashTable.prototype.constructor).toEqual('function');
});

describe('Put', () => {
    test('adds an item to the hash table', () => {
        const ht = new HashTable();
        ht.put('harsh');
        ht.put('hansa');
        expect(ht.table[123]).toEqual('harsh');
        expect(ht.table[112]).toEqual('hansa');
    });
});

describe('Find', () => {
    test('find an item in the hash table', () => {
        const ht = new HashTable();
        ht.put('harsh');
        ht.put('hansa');
        expect(ht.find('harsh')).toEqual({ key: 123, value: 'harsh' });
        expect(ht.find('hansa')).toEqual({ key: 112, value: 'hansa' });
    });
});
