const quickSort = require('./index');

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe('Quick sort', () => {
  test('sorts an array', () => {
    expect(quickSort(getArray(), 0, getArray().length - 1)).toEqual(getSortedArray());
  });
});
