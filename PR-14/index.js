// Write a program for Stack Operation Program (Insert, Delete, isEmpty, Length)


// class Stack {
//     constructor() {
//         this.stack = [];
//     }
//     push(element) {
//         this.stack.push(element);
//     }
//     pop() {
//         if (this.stack.length == 0)
//             return "Stack is empty";
//         return this.stack.pop();
//     }
//     isEmpty() {
//         return this.stack.length == 0;
//     }
//     length() {
//         return this.stack.length;
//     }
//     printStack() {
//         let str = "";
//         for (let i = 0; i < this.stack.length; i++)
//             str += this.stack[i] + " ";
//         return str;
//     }
// }

// let stack = new Stack();

// (Insert, Delete, isEmpty, Length)operation

// stack.push(100);
// stack.push(200);
// stack.push(300);

// stack.printStack()
// console.log("Is stack empty?", stack.isEmpty());

// console.log("Stack stack:", stack.stack);

// console.log("Stack length:", stack.length());
// stack.pop()
// console.log("Stack after pop:", stack.printStack());

// output:
// Is stack empty? false
// Stack stack: [ 100, 200, 300 ]
// Stack length: 3
// Stack after pop: 100 200 





// Write a program for Next Greater Element using Stack.

// function nextGreaterElement(arr) {
//     let n = arr.length;
//     let result = new Array(n).fill(-1);
//     let stack = [];
    
//     for (let i = n - 1; i >= 0; i--) {
//         while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//             stack.pop();
//         }
        
//         if (stack.length > 0) {
//             result[i] = stack[stack.length - 1];
//         }
        
//         stack.push(arr[i]);
//     }
    
//     return result;
// }

// // Example usage
// let arr = [4, 5, 2, 25, 7, 8];
// let result = nextGreaterElement(arr);

// console.log("Original Array:", arr);
// console.log("Next Greater Elements:", result);

// output:

// Original Array: [ 4, 5, 2, 25, 7, 8 ]
// Next Greater Elements: [ 5, 25, 25, -1, 8, -1 ]






// Write a program for a reverse string using Stack.

// function reverseString(str) {
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }
//     let reverseStr = "";
//     while (stack.length > 0) {
//         reverseStr += stack.pop();
//     }
//     return reverseStr;
// }

// Example usage

// let str = "jaydip_vora";
// let reverseStr = reverseString(str);
// console.log("Original String:", str);
// console.log("Reversed String:", reverseStr);

// output:
// Original String: jaydip_vora
// Reversed String: arov_pidyaj
