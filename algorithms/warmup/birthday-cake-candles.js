// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(arr) {
    let max = arr[0];
    let count = 0;

    for (let item of arr) {
        if (item > max) {
            max = item;
            count = 0;
        }

        if (item === max) {
            count++;
        }
    }

    return count;
}