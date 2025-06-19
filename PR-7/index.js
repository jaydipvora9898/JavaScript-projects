// 1.create a school class and create a students and faculty method.The students methods gives the students name, email and contact number as argument and prints all details the same as faculty using class & object.

// class School {
//     student(Name, Email, ContactNumber) {
//         console.log("Student Name =>", Name);
//         console.log("Student Email =>", Email);
//         console.log("Student ContactNumber =>", ContactNumber);
//     }
//     faculty(Name, Email, ContactNumber) {
//         console.log("Student Name =>", Name);
//         console.log("Student Email =>", Email);
//         console.log("Student ContactNumber =>", ContactNumber);
//     }
// }

// console.log("student details =>");

// let obj = new School();

// obj.student("Jaydipvora", "jaydipvora765@gmail.com", 9589225680);
// obj.student("Krishpajiwala", "krishpajiwala8914@gmail.com", 8796584125);

// console.log(" ");
// console.log(" ");
// console.log("faculty details =>");
// let obj1 = new School();
// obj1.faculty("Mr.Girish Sir", "girishgondaliya895@gmail.com", 8574963256);
// obj1.faculty("Mr.Chirag Sir Shiyani", "chiragshiyani458@gmail.com", 8759632492);

// Excepted output

// student details =>
//     Student Name => Jaydipvora
// Student Email => jaydipvora765@gmail.com
// Student ContactNumber => 9589225680
// Student Name => Krishpajiwala
// Student Email => krishpajiwala8914@gmail.com
// Student ContactNumber => 8796584125
  
  
//  faculty details =>
//     Student Name => Mr.Girish Sir
//  Student Email => girishgondaliya895@gmail.com
//  Student ContactNumber => 8574963256
//  Student Name => Mr.Chirag Sir Shiyani
//  Student Email => chiragshiyani458@gmail.com
//  Student ContactNumber => 8759632492


// 2.create a person class with argument name and age.Create an employee class through print out details of person

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// class Employee extends Person {
//     employeedata() {
//         console.log("Employee name", this.name, "And Employee age is", this.age);
//     }
// }
// let emp = new Employee("Jaydip Vora", 17);
// emp.Employeedata();

// Excepted output

// Employee name Jaydip Vora And Employee age is 17




// 3.Employee class creates a constructorcalled print a simple message

// class Employee {
//     constructor() {
//         console.log("Called By Constructor");
//     }
// }

// let Emp = new Employee();

// Excepted output

// Called By Constructor


// 4.create a shape class and create a rectangle and circle method find circle area and rectangle area using with argument

// class Shape {
//     circleArea(Radius) {
//         console.log("Area of circle is =>", 3.14 * Radius * Radius);
//     }
//     rectangleArea(Width, Height) {
//         console.log("Area of rectangle is =>", Width * Height)
//     }
// }
// let Shap = new Shape();

// Shap.circleArea(20);
// Shap.rectangleArea(15, 98);


// Excepted output

// Area of circle is => 1256
// Area of rectangle is => 1470