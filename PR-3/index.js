// 1. Write a JAVASCRIPT Programs to display the multiplication table of a given integer using a while loop 

// N = Number(prompt("Enter a number: "));

// let i = 1;

// while (i <= 10) {
//     console.log(N + " x "+ i + ' = ' +  N * i);
//     i++;
// }

// Expected Output:
// User Enter Value Of 25
// 25 x 1 = 25
// 25 x 2 = 50
// 25 x 3 = 75
// 25 x 4 = 100
// 25 x 5 = 125
// 25 x 6 = 150
// 25 x 7 = 175
// 25 x 8 = 200
// 25 x 9 = 225
// 25 x 10 = 250



// 2. Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop 

// let num = Number(prompt("Enter a number: "));

// let i = 1;
// let factorial = 1;

// while (i <= num) {
//     factorial *= i;
//     i++;
// }
// console.log("Factorial of", num, "is", factorial);

// Expected Output:
// User Enter Value Of 5
// Factorial of 5 is 120


// 3. Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop

// let limit = Number(prompt("Enter the limit: "));
// let num = 1;

// do {
//     let sum = 0;
//     let temp = num;
//     let digits = 0;

//     let tempDigits = temp;
//     while (tempDigits > 0) {
//         digits++;
//         tempDigits = (tempDigits - (tempDigits % 10)) / 10;
//     }

//     temp = num;
//     while (temp > 0) {
//         let digit = temp % 10;
//         let power = 1;

//         for (let i = 0; i < digits; i++) {
//             power *= digit;
//         }

//         sum += power;
//         temp = (temp - (temp % 10)) / 10;
//     }

//     if (sum === num) {
//         console.log(num);
//     }

//     num++;
// } while (num <= limit);

// Expected Output:
// User Enter The Limit = 255;
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 153

// 4.Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop

// let num = Number(prompt("Enter a number: "));
// let i = 1;
// console.log("Palindrome numbers from 1 to User value are:");
// while (i <= num) {
//     let temp = i;
//     let reversed = 0;

//     while (temp > 0) {
//         let digit = temp % 10;
//         reversed = reversed * 10 + digit;
//         temp = Math.floor(temp / 10);
//     }
//     if (i === reversed) {
//         console.log(i);
//     }
//     i++;
// }  


// 5. Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while Loop. 

// let num = Number(prompt("Enter the number of terms for Fibonacci Series: "));
// let a = 0, b = 1, nextTerm;

// console.log("Fibonacci Series:");
// let count = 1;
// while (count <= num) {
//     console.log(a);
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
//     count++;
// }

// Expected Output:
// Enter Value of 25
// Fibonacci Series:
// 0
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144
// 233
// 377
// 610
// 987
// 1597
// 2584
// 4181
// 6765
// 10946
// 17711
// 28657
// 46368

// 6. Write JAVASCRIPT Program to add all the integers between 0 and 20 and display the total using do while 

// let total = 0 , i = 0;

// do {
//     total += i;
//     i++;
// } while (i <= 20);

// console.log("The total is:", total);

// Expected Output:
// The total is: 210

// 7. Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three print"fizz" instead of the number and for the multiples of five print "Buzz".
// For number Which are multiples of both three and tive print "FizzBuzz" using do while loop.

// let i = 1;
// do {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
//     i++;
// } while (i <= 100);


// Expected Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz
// Fizz
// 52
// 53
// Fizz
// Buzz
// 56
// Fizz
// 58
// 59
// FizzBuzz
// 61
// 62
// Fizz
// 64
// Buzz
// Fizz
// 67
// 68
// Fizz
// Buzz
// 71
// Fizz
// 73
//  74
//  FizzBuzz
//  76
//  77
//  Fizz
//  79
//  Buzz
//  Fizz
//  82
//  83
//  Fizz
//  Buzz
//  86
//  Fizz
//  88
//  89
//  FizzBuzz
//  91
//  92
//  Fizz
//  94
//  Buzz
//  Fizz
//  97
//  98
//  Fizz
//  Buzz



// 8. Write javascript program that displays 1-2-3-4-5-6-7-8-9-10 om one line using a for loop. Their will be nohyphen(-) at starting and Ending position

// let result = "";
// for (let i = 1; i <= 10; i++) {
//     result += i;
//     if (i < 10) {
//         result += "-";
//     }
// }
// console.log(result);

// Expected Output:
// 1-2-3-4-5-6-7-8-9-10



// 9.Write javascript program that displays 1+4+9+16+...+100 = 385 on one line using a for loop.

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i * i;
// }
// console.log("1+4+9+16+...+100 =", sum);

// Expected Output:
// 1+4+9+16+...+100 = 385


// 10. Write a javascript program that displays below patternusing nested For loop

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1


// let i , j;
// for (i = 5; i >= 1; i--) {
//     let row = '';
//     for (j = 5; j >= i; j--) {
//         row += j + ' ';
//     }
//     console.log(row);
// }

// Expected Output:
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1



// 11. Write a javascript program that displays below patternusing nested For loop

// 1
// 2 3
// 4 5 6 
// 7 8 9 10
// 11 12 13 14 15


// let num = 1,i,j;
// for (i = 1; i <= 5; i++) {
//     let row = "";
//     for (j = 1; j <= i; j++) {
//         row += num + " ";
//         num++;
//     }
//     console.log(row);
// }


// Expected Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


