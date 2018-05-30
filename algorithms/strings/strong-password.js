// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
    const hasLowerCase = (password.match(/[a-z]/) || []).length;
    const hasUpperCase = (password.match(/[A-Z]/) || []).length;
    const hasNumbers = (password.match(/[0-9]/) || []).length;
    const hasSymbols = (password.match(/[!@#$%^&*()\-+]/) || []).length;
    const charsNeeded = !hasLowerCase + !hasUpperCase + !hasNumbers + !hasSymbols;

    return Math.max(0, charsNeeded, Math.max(0, 6 - password.length));
}