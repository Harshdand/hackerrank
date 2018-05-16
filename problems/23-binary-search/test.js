const search = require('./index');

test('Binary search function exists', () => {
  expect(search).toBeDefined();
});

test('Searches and gives the correct index', () => {
  expect(search([1, 2, 3, 4, 5], 3)).toEqual(2);
});

test('Searches and gives -1 if number is not found', () => {
  expect(search([1, 2, 3, 4, 5], 6)).toEqual(-1);
});
