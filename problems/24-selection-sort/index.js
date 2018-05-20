// --- Directions
// Implement selectionSort
//Time Complexity O(n^2)

function selectionSort(arr) {
    let arrLength = arr.length;

    for (let index = 0; index < arrLength - 1; index++) {
        let min = index;

        for (let indexTwo = index + 1; indexTwo < arrLength; indexTwo++) {
            if (arr[indexTwo] < arr[min]) {
                min = indexTwo;
            }
        }

        let temp = arr[index];
        arr[index] = arr[min];
        arr[min] = temp;
    }

    return arr;
}

module.exports = selectionSort;
