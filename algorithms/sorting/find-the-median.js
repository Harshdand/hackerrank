// https://www.hackerrank.com/challenges/find-the-median/problem

function findMedian(arr) {
    arr.sort((num1, num2)=> num1 - num2);

    return arr[Math.floor(arr.length / 2)];
}