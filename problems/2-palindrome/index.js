/* --- Directions
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false
*/

function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1];
    });
}

/*
function palindrome(str) {
    var a = 0;
    var res = false;

    str.split('').every((char, index) => {
        a++;

        if (str.length / 2 === index) {
            return false;
        }

        console.log(a);
        res = char === str[str.length - index - 1];

        return res;
    });

    return res;
}
*/

/*
function palindrome(str) {
    return str === str.split('').reverse().join('');
}
*/

module.exports = palindrome;
