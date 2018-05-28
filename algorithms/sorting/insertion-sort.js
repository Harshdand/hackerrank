// https://www.hackerrank.com/challenges/insertionsort2/problem

function insertionSort2(n, arr) {
    for (let index = 1; index < n; index++) {
        let value = arr[index];
        let hole = index;

        while (hole > 0 && value < arr[hole - 1]) {
            arr[hole] = arr[hole - 1];
            hole--;
        }

        arr[hole] = value;
        console.log(stringify(arr));
    }

    return arr;
}

function stringify(arr) {
    return arr.toString().replace(/,/g, ' ');
}