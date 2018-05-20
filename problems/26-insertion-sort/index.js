// --- Directions
// Implement insertionSort
// Better than bubble and selection sort
// O(n^2)

function insertionSort(arr) {
    let arrLength = arr.length;

    for (let index = 1; index < arrLength; index++) {
        let value = arr[index];
        let hole = index;

        while (hole > 0 && arr[hole - 1] > value) {
            arr[hole] = arr[hole - 1];
            hole--;
        }

        arr[hole] = value;
    }

    return arr;
}

module.exports = insertionSort;
