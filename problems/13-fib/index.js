// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// recursive solution with memoization
function memoize(fn) {
    const cache = {};

    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

/*
// recursive solution - exponential
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}
*/

/*
function fib(n) {
    const result = [0, 1];

    for (let index = 2; index <= n; index++) {
        result.push(result[index - 1] + result[index - 2]);
    }

    return result[n];
}
*/

/*
function fib(n) {
    const result = [0, 1];

    for (let index = 2; index <= n; index++) {
        const a = result[index - 1];
        const b = result[index - 2];

        result.push(a + b);
    }

    return result[n];
}
*/

/*
function fib(n) {
    const series = [0, 1];
    let firstNumber = 0;
    let secondNumber = 1;
    let temp;

    while (series.length <= n) {
        temp = secondNumber;
        secondNumber = firstNumber + secondNumber;
        firstNumber = temp;

        series.push(secondNumber);
    }

    return series[n];
}
*/

module.exports = fib;
