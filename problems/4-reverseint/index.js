/* --- Directions
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9
*/

function reverseInt(n) {
    let reversed = 0;

    while (n != 0) {
        reversed = reversed * 10 + n % 10;
        n = parseInt(n / 10);
    }

    return reversed;
}

/*
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}
*/

/*
function reverseInt(n) {
    const reversed = n < 0 ? '-' : '';

    return parseInt(reversed + n.toString().split('').reverse().join(''));
}
*/

module.exports = reverseInt;
