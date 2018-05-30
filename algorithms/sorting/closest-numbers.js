// https://www.hackerrank.com/challenges/closest-numbers/problem

function closestNumbers(arr) {
    const lastIndex = arr.length - 1;
    let result = [];
    let min;

    arr.sort((num1, num2) => num1 - num2);
    min = arr[lastIndex];

    for (let index = 0; index < lastIndex; index++) {
        let diff = arr[index + 1] - arr[index]
        if (diff < min) {
            min = diff;
            result = [arr[index], arr[index + 1]];
        }
        else if (diff === min) {
            result.push(arr[index]);
            result.push(arr[index + 1]);
        }
    }

    return result;
}