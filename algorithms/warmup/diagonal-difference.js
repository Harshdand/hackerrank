// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    const arrayLength = arr.length;
    let diagonalIndex = arrayLength - 1;
    let diff = 0;

    for (let index = 0; index < arrayLength; index++) {
        diff += (arr[index][index] - arr[index][diagonalIndex--]);
    }

    return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

/*
function diagonalDifference(arr) {
    const arrayLength = arr.length;
    let diagonalIndex = arrayLength - 1;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let index = 0; index < arrayLength; index++) {
        firstDiagonalSum += arr[index][index];
        secondDiagonalSum += arr[index][diagonalIndex--];
    }

    return Math.abs(firstDiagonalSum - secondDiagonalSum);
}
*/