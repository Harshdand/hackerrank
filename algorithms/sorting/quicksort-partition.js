// https://www.hackerrank.com/challenges/quicksort1/problem

function quickSort(arr) {
    let pivot = arr[0];
    let pIndex = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] <= pivot) {
            let temp = arr[index];
            arr[index] = arr[pIndex];
            arr[pIndex] = temp;

            pIndex++;
        }
    }

    let temp1 = arr[--pIndex];
    arr[pIndex] = arr[0];
    arr[0] = temp1;

    return arr;
}