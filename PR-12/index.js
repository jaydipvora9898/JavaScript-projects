// WAP for Circular Linklist Operation (Insert, delete, display)

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//     }
//     insert(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             newNode.next = this.head;
//         } else {
//             let current = this.head;
//             while (current.next !== this.head) {
//                 current = current.next;
//             }
//             current.next = newNode;
//             newNode.next = this.head;
//         }
//     }

//     display() {
//         if (!this.head) return "List is empty";
//         let result = [];
//         let current = this.head;
//         do {
//             result.push(current.data);
//             current = current.next;
//         } while (current !== this.head);
//         return result.join(" -> ");
//     }
// }
// const cll = new CircularLinkedList();
// cll.insert(10);
// cll.insert(20);
// cll.insert(30);
// cll.insert(40);
// cll.insert(50);
// cll.insert(60);

// console.log(cll.display()); 
// Output: 10 -> 20 -> 30 -> 40 -> 50 -> 60


// 2.WAP for Reverse Singly Linklist

// class SinglyNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//     }
//     insert(data) {
//         const newNode = new SinglyNode(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     reverse() {
//         let prev = null;
//         let current = this.head;
//         while (current) {
//             const nextNode = current.next;
//             current.next = prev;
//             prev = current;
//             current = nextNode;
//         }
//         this.head = prev;
//     }

//     display() {
//         let result = [];
//         let current = this.head;
//         while (current) {
//             result.push(current.data);
//             current = current.next;
//         }
//         return result.join(" -> ");
//     }
// }
// const sll = new SinglyLinkedList();
// sll.insert(10);
// sll.insert(20);
// sll.insert(30);
// sll.insert(40);
// sll.insert(50);
// sll.insert(60);
// console.log("Before reversing:", sll.display());
// sll.reverse();
// console.log("After reversing:", sll.display());

// output =>Before reversing: 10 -> 20 -> 30 -> 40 -> 50 -> 60
//          After reversing: 60 -> 50 -> 40 -> 30 -> 20 -> 10


// 3. WAP for check linklist is palindrome or not.

class PalindromeNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class PalindromeLinkedList {
    constructor() {
        this.head = null;
    }
    insert(data) {
        const newNode = new PalindromeNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    isPalindrome() {
        let slow = this.head;
        let fast = this.head;
        let stack = [];

        while (fast && fast.next) {
            stack.push(slow.data);
            slow = slow.next;
            fast = fast.next.next;
        }

        if (fast) { // Odd length
            slow = slow.next;
        }

        while (slow) {
            if (stack.pop() !== slow.data) {
                return false;
            }
            slow = slow.next;
        }
        return true;
    }
}
const pll = new PalindromeLinkedList();
pll.insert(1);
pll.insert(2);  
pll.insert(3);
pll.insert(5);
pll.insert(1);  
console.log("Is Palindrome:", pll.isPalindrome()); 

// Output: true

