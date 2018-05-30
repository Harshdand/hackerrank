// https://www.hackerrank.com/challenges/camelcase/editorial

function camelcase(s) {
    let counter = 1;

    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            counter++;
        }
    }

    return counter;
}