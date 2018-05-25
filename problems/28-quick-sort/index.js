// --- Directions
// Implement quickSort

function quickSort(arr, start, end) {
    if (start < end) {
        let pIndex = partition(arr, start, end);
        quickSort(arr, start, pIndex - 1);
        quickSort(arr, pIndex + 1, end);
    }

    return arr;
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let pIndex = start;
  
    for (let index = start; index < end; index++) {
        if (arr[index] <= pivot) {
            let temp = arr[index];
            arr[index] = arr[pIndex];
            arr[pIndex] = temp;

            pIndex++;
        }
    }

    let temp1 = arr[pIndex];
    arr[pIndex] = arr[end];
    arr[end] = temp1;

    return pIndex;
}

// function swap(num1, num2) {
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
// }

module.exports = quickSort;
