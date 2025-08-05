// 1.

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// let rows = matrix.length;
// let cols = matrix[0].length;


// console.log("Original Matrix:");
// for (let i = 0; i < rows; i++) {
//     let rowStr = "";
//     for (let j = 0; j < cols; j++) {
//         rowStr += matrix[i][j] + " ";
//     }
//     console.log(rowStr.trim());
// }


// let transpose = [];

// for (let i = 0; i < cols; i++) {
//     transpose[i] = [];
//     for (let j = 0; j < rows; j++) {
//         transpose[i][j] = matrix[j][i];
//     }
// }


// console.log("Transposed Matrix:");
// for (let i = 0; i < transpose.length; i++) {
//     let rowStr = "";
//     for (let j = 0; j < transpose[0].length; j++) {
//         rowStr += transpose[i][j] + " ";
//     }
//     console.log(rowStr.trim());
// }


// 2.

// function selectionSortDescending(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
        
//         let maxIndex = i;

        
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] > arr[maxIndex]) {
//                 maxIndex = j;
//             }
//         }

        
//         if (maxIndex !== i) {
//             let temp = arr[i];
//             arr[i] = arr[maxIndex];
//             arr[maxIndex] = temp;
//         }
//     }

//     return arr;
// }

// let arr = [64, 25, 12, 22, 11];

// console.log("Original Array:");
// console.log(arr.join(" "));

// let sorted = selectionSortDescending(arr);

// console.log("Sorted Array (Descending):");
// console.log(sorted.join(" "));



// 3. Array Ascending order sorting using Merge sort


// function merge(left, right) {
//     let result = [];
//     let i = 0, j = 0;

    
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

    
//     while (i < left.length) {
//         result.push(left[i]);
//         i++;
//     }

//     while (j < right.length) {
//         result.push(right[j]);
//         j++;
//     }

//     return result;
// }

// // Merge Sort function
// function mergeSort(arr) {
    
//     if (arr.length <= 1) {
//         return arr;
//     }

    
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);

    
//     return merge(mergeSort(left), mergeSort(right));
// }


// let array = [38, 27, 43, 3, 9, 82, 10];

// console.log("Original Array:");
// console.log(array.join(" "));

// let sortedArray = mergeSort(array);

// console.log("Sorted Array (Ascending):");
// console.log(sortedArray.join(" "));

