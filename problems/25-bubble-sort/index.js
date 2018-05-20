// --- Directions
// Implement bubbleSort

function bubbleSort(arr) {
    let arrLength = arr.length;

    for (let index = 0; index < arrLength; index++) {
        let flag = false;

        for (let indexTwo = 0; indexTwo < arrLength - index - 1; indexTwo++) {
            if (arr[indexTwo] > arr[indexTwo + 1]) {
                const temp = arr[indexTwo];
                arr[indexTwo] = arr[indexTwo + 1];
                arr[indexTwo + 1] = temp;
                flag = true;
            }
        }

        if (!flag) {
            break;
        }
    }

    return arr;
}

module.exports = bubbleSort;
