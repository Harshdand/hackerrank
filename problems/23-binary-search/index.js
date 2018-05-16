/* --- Directions
Given an array and an item to search
return the position of the item in array or -1 if not found
--- Examples
  search([1,2,3,4,5], 3) === 2
  search([1,2,3,4,5], 10) === -1
  
  Time Complexity: O(logN) as array will keep getting half if element not found
*/

function search(arr, key) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (key < arr[mid]) {
            high = mid - 1;
        }
        else if (key > arr[mid]) {
            low = mid + 1;
        }
        else {
            return mid;
        }
    }

    return -1;
}

module.exports = search;