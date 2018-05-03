/* --- Directions
Given a string, return a new string with the reversed
order of characters
--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/

function reverse(str) {
    return str.split('')
        .reduce((rev, char) => {
            return char + rev;
        }, ''); // initial value
}

/*
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
*/

/*
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}
*/

/*
function reverse(str) {
    const strLength = str.length;
    let reversed = '';

    for (let i = strLength - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}
*/

/*
function reverse(str) {
    return str.split('').reverse().join('');
}
*/

module.exports = reverse;
