// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[\W]/g, '').toLowerCase().split('').sort().join('');
}

/*
function anagrams(stringA, stringB) {
    const charA = getCharMap(stringA);
    const charB = getCharMap(stringB);

    if (Object.keys(charA).length !== Object.keys(charB).length) {
        return false;
    }

    for (let char in charA) {
        if (charA[char] !== charB[char]) {
            return false;
        }
    }

    return true;
}

function getCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[\W]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
        // charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}
*/

module.exports = anagrams;
