// 1.Write a program for Circular Queue.

// class CircularQueue {
//     constructor(size) {
//         this.size = size;
//         this.queue = new Array(size);
//         this.front = -1;
//         this.rear = -1;
//     }

//     // Enqueue operation
//     enqueue(element) {
//         if ((this.rear + 1) % this.size === this.front) {
//             console.log("Queue is full");
//             return;
//         }

//         if (this.front === -1) {
//             this.front = 0;
//         }

//         this.rear = (this.rear + 1) % this.size;
//         this.queue[this.rear] = element;
//         console.log(`Inserted: ${element}`);
//     }

//     dequeue() {
//         if (this.front === -1) {
//             console.log("Queue is empty (Underflow)");
//             return null;
//         }

//         const removedElement = this.queue[this.front];
//         if (this.front === this.rear) {
//             this.front = -1;
//             this.rear = -1;
//         } else {
//             this.front = (this.front + 1) % this.size;
//         }
//         console.log(`Removed: ${removedElement}`);
//         return removedElement;
//     }

//     display() {
//         if (this.front === -1) {
//             console.log("Queue is empty");
//             return;
//         }

//         let i = this.front;
//         let result = [];

//         while (true) {
//             result.push(this.queue[i]);
//             if (i === this.rear) break;
//             i = (i + 1) % this.size;
//         }

//         console.log("Queue contents:", result.join(" => "));
//     }
// }

// Example usage:

// const result = new CircularQueue(5);

// result.enqueue(10);
// result.enqueue(20);
// result.enqueue(30);
// result.enqueue(40);
// result.enqueue(50); 

// result.display();

// result.dequeue();
// result.dequeue();

// result.display();

// result.enqueue(60);
// result.enqueue(70); 

// result.display();

// output:
// Inserted: 10
// Inserted: 20
// Inserted: 30
// Inserted: 40
// Inserted: 50
// Queue contents: 10 -> 20 -> 30 -> 40 -> 50
// Removed: 10
// Removed: 20
// Queue contents: 30 -> 40 -> 50
// Inserted: 60
// Inserted: 70
// Queue contents: 30 -> 40 -> 50 -> 60 -> 70



// 2.write a program Queue using two stacks.

// class twoStacks {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     enqueue(element) {
//         this.stack1.push(element);
//         console.log("Enqueue:", element);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null;
//         }

//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 let temp = this.stack1.pop();
//                 this.stack2.push(temp);
//             }
//         }

//         let removed = this.stack2.pop();
//         console.log("Dequeued:", removed);
//         return removed;
//     }
//     front() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null;
//         }

//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 let temp = this.stack1.pop();
//                 this.stack2.push(temp);
//             }
//         }

//         return this.stack2[this.stack2.length - 1];
//     }

//     isEmpty() {
//         return this.stack1.length === 0 && this.stack2.length === 0;
//     }

//     display() {
//         let queueElements = [];

//         for (let i = this.stack2.length - 1; i >= 0; i--) {
//             queueElements.push(this.stack2[i]);
//         }

//         for (let i = 0; i < this.stack1.length; i++) {
//             queueElements.push(this.stack1[i]);
//         }

//         if (queueElements.length === 0) {
//             console.log("Queue is empty");
//         } else {
//             console.log("Queue contents:", queueElements.join(" => "));
//         }
//     }
// }


// let queue = new twoStacks();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// queue.display();

// queue.dequeue();
// queue.display();

// queue.enqueue(40);
// queue.enqueue(50);

// queue.display();

// console.log("Front element:", queue.front());

// output:
// Enqueue: 10
// Enqueue: 20
// Enqueue: 30
// Queue contents: 10 => 20 => 30
// Dequeued: 10
// Queue contents: 20 => 30
// Enqueue: 40
// Enqueue: 50
// Queue contents: 20 => 30 => 40 => 50
// Front element: 20





// 3.write a program check first string swap can make strings equal.

// function canBeEqual(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
    
//     if (str1 === str2) {
//         return true;
//     }
    
//     const diffPositions = [];
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== str2[i]) {
//             diffPositions.push(i);
//         }
        
//         if (diffPositions.length > 2) {
//             return false;
//         }
//     }
    
//     if (diffPositions.length === 2) {
//         const [pos1, pos2] = diffPositions;
//         return str1[pos1] === str2[pos2] && str1[pos2] === str2[pos1];
//     }
//     return false;
// }

// // Test cases
// const testCases = [
//     { str1: "ab", str2: "ba", expected: true },
//     { str1: "abc", str2: "acb", expected: true },
//     { str1: "abcd", str2: "abdc", expected: true },
//     { str1: "aa", str2: "aa", expected: true },
//     { str1: "ab", str2: "ab", expected: true },
//     { str1: "ab", str2: "cd", expected: false },
//     { str1: "abc", str2: "abd", expected: false },
//     { str1: "abcde", str2: "abfde", expected: false },
//     { str1: "a", str2: "b", expected: false },
//     { str1: "abc", str2: "ab", expected: false }
// ];

// console.log("Testing if strings can be made equal with one swap:\n");
// testCases.forEach((test, index) => {
//     const result = canBeEqual(test.str1, test.str2);
//     console.log(`Test ${index + 1}: '${test.str1}' and '${test.str2}' => ${result} (Expected: ${test.expected})`); 
//     console.log(`Result: ${result === test.expected ? 'PASS' : 'FAIL'}\n`);
// });

// output:
// Testing if strings can be made equal with one swap:

// Test 1: 'ab' and 'ba' => true (Expected: true)
// Result: PASS

// Test 2: 'abc' and 'acb' => true (Expected: true)
// Result: PASS

// Test 3: 'abcd' and 'abdc' => true (Expected: true)
// Result: PASS

// Test 4: 'aa' and 'aa' => true (Expected: true)
// Result: PASS

// Test 5: 'ab' and 'ab' => true (Expected: true)
// Result: PASS

// Test 6: 'ab' and 'cd' => false (Expected: false)
// Result: PASS

// Test 7: 'abc' and 'abd' => false (Expected: false)
// Result: PASS

// Test 8: 'abcde' and 'abfde' => false (Expected: false)
// Result: PASS

// Test 9: 'a' and 'b' => false (Expected: false)
// Result: PASS

// Test 10: 'abc' and 'ab' => false (Expected: false)
// Result: PASS
