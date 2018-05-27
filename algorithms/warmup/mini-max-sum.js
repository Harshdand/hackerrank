// https://www.hackerrank.com/challenges/mini-max-sum/problem


// by finding min and max O(n)
function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let item of arr) {
        sum += item;
        if (item < min) {
            min = item;
        }

        if (item > max) {
            max = item;
        }
    }

    console.log((sum - max) + ' '(sum - min));
}

// using sort O(nlogn)
function miniMaxSum(arr) {
    const sortedArr = arr.sort();
    const sum = sortedArr.reduce((sum, item) => sum + item, 0);
    console.log((sum - sortedArr[4]) + ' ' + (sum - sortedArr[0]));
}

// using sort O(nlogn)
function miniMaxSum(arr) {
    const sortedArr = arr.sort();

    console.log((sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3]) + ' ' +
        (sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4])
    );
}