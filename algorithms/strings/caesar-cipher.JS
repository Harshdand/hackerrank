// https://www.hackerrank.com/challenges/caesar-cipher-1/submissions/code/72107156

function caesarCipher(s, k) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let encrypted = '';

    for (char of s) {
        let index = alphabets.indexOf(char.toLowerCase());

        if (index !== -1) {
            let alphabet = alphabets[(index + k) % alphabets.length];
            encrypted += char.charCodeAt() < 91 ? alphabet.toUpperCase() : alphabet;
        }
        else {
            encrypted += char;
        }
    }

    return encrypted;
}