/* --- Directions
Given a string, return the character that is most
commonly used in the string.
--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
*/

// create a char map for the solution
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        // chars[char] = chars[char] + 1 || 1;
        charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }

    console.log(charMap);

    for (let char in charMap) {
        if (charMap[char] > max) {
            maxChar = char;
            max = charMap[char];
        }
    }

    return maxChar;
}

module.exports = maxChar;