// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

/*
//looping on string
function vowels(str) {
    let count = 0;
    const vowelsList = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (vowelsList.includes(char)) {
            count++;
        }
    }

    return count;
}
*/

/*
// looping on vowels
function vowels(str) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str = str.toLowerCase();

    vowelsList.forEach((vowel) => {
        if (str.indexOf(vowel) !== -1) {
            count++;
        }
    });

    return count;
}
*/

module.exports = vowels;
