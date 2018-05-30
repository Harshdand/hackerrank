// https://www.hackerrank.com/challenges/countingsort1/problem

function countingSort(arr) {
    const result = new Array(100).fill(0);
    let output = [];

    for (let index = 0; index < arr.length; index++) {
        result[arr[index]]++;
    }

    for (let index = 0; index < result.length; index++) {
        let items = new Array(result[index]).fill(index);

        output = output.concat(items);
    }

    return output;
}