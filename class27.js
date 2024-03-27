// Static Methods and Properties

/*
// example 1 =========================

class Student {
    constructor() {
        console.log("Constructor is working..")
    }


    methodA() {
        console.log("Method A is working..")
    }

    static methodB() {
        console.log("Method B is working..")
    }
}

const getStudentData = new Student();
getStudentData.methodA();
// getStudentData.methodB(); // output : error {if we dont comment this, next code will not execute because javaScript is an interpretated programming language , which works from left to right , and top to bottom...}

Student.methodB(); // output : Method B is working..


// example 2 =====================

class Student {
    constructor(firstName, lastName) {
        console.log("Constructor is working..")

        // this = {}

        this.firstName = firstName;
        this.lastName = lastName;
    }


    getFullName() {
        console.log("getFullName is working..");

        console.log(`${this.firstName} ${this.lastName}`);
    }

    static getDetails(getCourse, getContact) {
        console.log("getDetails is working..")

        // console.log(`${this.firstName} ${this.lastName}`);  // output : undefined undefined

        console.log(getContact, getCourse);  // output : 123456 'JavaScipt'
    }
}

const getStudentData = new Student("Neeraj", "Kumar");

getStudentData.getFullName();
// getStudentData.getDetails();  // error

Student.getDetails("JavaScipt", 123456); // output : getDetails is working..




// PROPERTIES ======================================================

class Student {
    constructor(firstName, lastName) {
        console.log("Constructor is working..")

        // this = {}

        this.firstName = firstName;
        this.lastName = lastName;
    }


    getFullName() {
        console.log("getFullName is working..");

        console.log(`${this.firstName} ${this.lastName}`);
    }

    static getDetails(getCourse, getContact) {
        console.log("getDetails is working..")

        // console.log(`${this.firstName} ${this.lastName}`);

        console.log(getContact, getCourse);
    }
    static address = "New Delhi - India"   // property of statics

}

const getStudentData = new Student("Neeraj", "Kumar");

getStudentData.getFullName();
// getStudentData.getDetails();  // error

Student.getDetails("JavaScipt", 123456);

console.log(Student.address);

*/

// DOCUMENT OBJECT MODEL  ( DOM F)============================
