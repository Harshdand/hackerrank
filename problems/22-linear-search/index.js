/* --- Directions
Given an array and an item to search
return the position of the item in array or -1 if not found
--- Examples
  search([1,2,3,4,5], 3) === 2
  search([1,2,3,4,5], 10) === -1
  
  Time Complexity: O(n)
*/

function search(arr, searchTerm) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchTerm) {
            return i;
        }
    }

    return -1;
}

module.exports = search;