// 1. Write a simple javascript program to print expected output using the following array

// let myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.join(","));

// expected output: Red,Green,White,Black;

// console.log(myColor.join("+"));
// expected output: Red+Green+White+Black;

// myColor.pop();
// console.log(myColor.join(","));
// expected output: Red,Green,White;

// console.log(myColor.shift(""));
// expected output: Red;

// console.log(myColor.join(","));
// expected output: Green,White;

// myColor.unshift("Red");
// myColor.push("Black, Orange");
// console.log(myColor.join(","));
// expected output: Red,Green,White,Black, Orange;


// 2.Write a javascript program to get the sum of all array element using for loop and forEach loop

// let arr = [11, 22, 33, 44, 55];
// let i,sum = 0;

// for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// expected output: 165;



// arr.forEach(element => {
//     sum += element;
// });
// console.log(sum);

// expected output: 165;

// 3. Write a javascript program to print a maxmimum and mimimum value of given array.(using function and logic)
// let data = [99, 22, 33, 44, 55];

// function MinMax(arr) {
//     if (arr.length === 0) {
//         console.log("Array is empty.");
//     }
//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) 
//         {
//             min = arr[i];
//         }
//         if (arr[i] > max) 
//         {
//             max = arr[i];
//         }
//     }
//     console.log("Minimum value: ",min);
//     console.log("Maximum value: ", max);
// }

// MinMax(data);

// expected output
// Minimum value:  22
// Maximum value:  99


// 4.  write a javascript program to convert all array element into ASCII values.

// let data = ["a", "B", "c", "d", "e"];

// data.forEach(element => {
//     console.log(element.charCodeAt(0));
// });

// expected output
// 97
// 66
// 99
// 100
// 101


// 5. Write a javascript program to remove nagative values using the filter array function.

// let Num =[-23,-20,-17,-12,-5,0,1,5,12,19,20]
// let positiveNum = Num.filter(element => element >= 0);
// console.log(positiveNum);
// expected output
// [0, 1, 5, 12, 19, 20]


// 6. Write a javascript program using array map() method and return the square of the array element.

// let arr = [2,5,6,3,8,9]
// let square = arr.map(element => element ** 2);
// console.log(square);
// expected output
// [4, 25, 36, 9, 64, 81]


// 7. Write a javascript program for sorting an array element in ascending and descending order.
// let numbers = [23,20,17,12,5,0,1,5,12,19,20];

// function sortAscending(arr) {
//     return numbers.slice().sort((a, b) => a - b);
// }
// function sortDescending(arr) {
//     return numbers.slice().sort((a, b) => b - a);
// }

// console.log("Ascending Order:", sortAscending(numbers));
// console.log("Descending Order:", sortDescending(numbers));

// expected output
// Ascending Order: [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]
// Descending Order: [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]

// let myColor = ["Red", "Green", "White", "Black"];

// function sortAscending(arr) {
//     return arr.sort();
// }
// function sortDescending(arr) {
//     return arr.sort().reverse();
// }

// console.log("Ascending Order:", sortAscending(myColor));
// console.log("Descending Order:", sortDescending(myColor));

// expected output

// Ascending Order: [ 'Black', 'Green', 'Red', 'White' ]
// Descending Order: [ 'White', 'Red', 'Green', 'Black' ]


// 8. write a javascript program which filters out any string which is less then 8 characters.

// let words = ['Python' , 'Javascript' , 'Go' , 'Java', 'PHP' , 'Ruby'];

// let filterWords = words.filter(word => word.length > 8);

// console.log(filterWords);

// expected output

// [ 'Javascript']


// 9. Write a javascript program to print expected output for the following string.
// let X = "A New Java Book"; 
// let output = X.toLowerCase();
// console.log(output);
// expected output: a new java book

// let output = X.toUpperCase();
// console.log(output);
// expected output: A NEW JAVA BOOK


// let X = "oxoxoxox";
// let output = X.split('').map((char, i) => i % 2 === 1 ? char.toUpperCase() : char).join('');
// console.log(output);
// expected output: oXoXoXoX


// let X = "airplane";
// let result = X.charAt(2);
// console.log(result);

// expected output: r



// 10. Write a javascript program arrayreverse.

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let reverse = arr.reverse();
// console.log(reverse);

// expected output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]



// 11. Write javascript program to check if a value is found or not ?

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let found = arr.includes(9);
// console.log(found);

// expected output: true



// 12. Write a javascript program to print name and write the number of total character.

// let name = "Jaydip Vora";
// console.log(name); // Print the name
// console.log(name.length); // Print number of characters

// Expected output:
// Jaydip Vora 
// 11



// 13. write a JavaScript program given this output using replace concept.

// let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// let output = input.replaceAll("dog", "cat");
// console.log(output);

// Expected output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"


// 14. write a JavaScript program convert string to array.

// let str = "Hire the top 1% freelance developers";
// let arr = str.split(" ").slice(0, 4);
// console.log(arr);

// Expected output: ["Hire", "the", "top", "1%"]


// 15. write a JavaScript program to convert an array to string.

// let arr = ['5', 32, 'Daniel'];
// let str = arr.join(',');
// console.log(str);

// Expected output: 5,32,Daniel
