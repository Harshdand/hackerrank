// https://www.hackerrank.com/challenges/simple-array-sum/problem

'use strict';

function simpleArraySum(ar) {
    var length = ar.length;
    var sum = 0;

    for (var i = 0; i < length; i++) {
        sum += ar[i];
    }

    return sum;
}