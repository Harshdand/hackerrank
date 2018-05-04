/* --- Directions
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

/*
function chunk(array, size) {
    const chunked = [];

    for (let item of array) {
        const last = chunked[chunked.length - 1];

        if (last && last.length < size) {
            last.push(item);
        }
        else {
            chunked.push([item]);
        }
    }

    return chunked;
}
*/

/*
function chunk(array, size) {
    const chunked = [];

    array.forEach(item => {
        let chunkedLast = chunked.length - 1;
        if (chunked[chunkedLast] && chunked[chunkedLast].length < size) {
            chunked[chunkedLast].push(item);
        }
        else {
            chunked.push([item]);
        }
    });

    return chunked;
}
*/

/*
function chunk(array, size) {
    const chunked = [];

    array.forEach(item => {
        if (!chunked[chunked.length - 1]) {
            chunked.push([item]);
        }
        else {
            if (chunked[chunked.length - 1].length < size) {
                chunked[chunked.length - 1].push(item);
            }
            else {
                chunked.push([item]);
            }
        }
    });

    return chunked;
}
*/

module.exports = chunk;
