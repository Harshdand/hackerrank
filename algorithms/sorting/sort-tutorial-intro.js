// https://www.hackerrank.com/challenges/tutorial-intro/problem

function introTutorial(key, arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (key < arr[mid]) {
            high = mid - 1;
        }
        else if (key > arr[mid]) {
            low = mid + 1;
        }
        else {
            return mid;
        }
    }

    return -1;
}