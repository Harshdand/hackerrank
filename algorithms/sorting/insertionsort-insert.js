// https://www.hackerrank.com/challenges/insertionsort1/problem

function insertionSort1(n, arr) {
    const item = arr[n - 1];
    let lastIndex = n - 1;

    for (let index = n - 2; index >= -1; index--) {
        if (item < arr[index]) {
            arr[lastIndex--] = arr[index];
            console.log(stringify(arr));
        }
        else {
            arr[lastIndex] = item;
            console.log(stringify(arr));
            break;
        }
    }
}

function stringify(arr) {
    return arr.toString().replace(/,/g, ' ');
}