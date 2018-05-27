// https://www.hackerrank.com/challenges/time-conversion/problem


// logic
// if hour is 12 make it 00
// if hour is falling in pm add 12

function timeConversion(s) {
    const timeState = s.substr(8);
    let hour = (s.substr(0, 2) === '12') ? '00' : s.substr(0, 2);
    let militaryFormat = (timeState === 'PM') ? parseInt(hour) + 12 : hour;

    militaryFormat += s.substr(2, 6);

    return militaryFormat;
}