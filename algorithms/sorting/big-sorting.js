// https://www.hackerrank.com/challenges/big-sorting/problem

// first do lexical sort
// then sort according to lengths
// if 2 items have same length check which one is greater
function bigSorting(unsorted) {
    unsorted.sort();
    unsorted.sort(function (item1, item2) {
        if (item1.length < item2.length) {
            return -1;
        }
        else if (item1.length > item2.length) {
            return 1;
        }
        else {
            if (item1 > item2) {
                return 1;
            }
            else if (item1 < item2) {
                return -1;
            }
            else {
                return 0;
            }
        }
    });

    return unsorted;
}
