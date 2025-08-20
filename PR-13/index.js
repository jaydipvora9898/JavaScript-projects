// Write a program to implement binary search to find the index of a target element in a sorted array.
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// // Example
// const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const targetElement = 89;
// const result = binarySearch(sortedArray, targetElement);

// if (result !== -1) {
//     console.log(`Element ${targetElement} found at index ${result}`);
// } else {
//     console.log(`Element ${targetElement} not found in the array`);
// }

// output is =>  Element 89 not found in the array




// write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.

function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

function upperBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            result = mid;
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

function countOccurrences(arr, target) {
    const firstOccurrence = lowerBound(arr, target);
    const lastOccurrence = upperBound(arr, target);

    if (firstOccurrence == -1 || lastOccurrence == -1) {
        return 0;
    }

    return lastOccurrence - firstOccurrence + 1;
}

// Example usage:
const sortedArray2 = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10];
const targetElement2 = 5;
const count = countOccurrences(sortedArray2, targetElement2);
console.log(`Count of occurrences of ${targetElement2}: ${count}`);

// output is => Count of occurrences of 5: 3



// Write a program to find the pivot index where the rotation occurs in a rotated sorted array.
// function findPivotIndex(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] > arr[right]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }

//     return left;
// }

// // Example usage:
// const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
// const pivotIndex = findPivotIndex(rotatedArray);
// console.log(`Pivot index: ${pivotIndex}`);

// output is => Pivot index: 4


