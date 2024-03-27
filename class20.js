// topic :  class ===============================

// synatx=============
/*
class Abc {
    constructor() {

    }
    methodA() {

    }
    methodB() {

    }
    methodC() {

    }
    methodD() {

    }
}
//Here constructor is working ==============================
class Abc {
    constructor() {
        console.log("constructor is working")
    }
    methodA() {
        console.log("methodA is working")
    }
    methodB() {
        console.log("methodB is working")
    }
    methodC() {
        console.log("methodC is working")
    }
    methodD() {
        console.log("methodD is working")
    }
}

new Abc; // output : constructor is working


// Here consturctor + methods are working ======================================

class Abc {
    constructor() {
        console.log("constructor is working")
    }
    methodA() {
        console.log("methodA is working")
    }
    methodB() {
        console.log("methodB is working")
    }
    methodC() {
        console.log("methodC is working")
    }
    methodD() {
        console.log("methodD is working")
    }
}

const getAbcData = new Abc();
console.log(typeof getAbcData)   // object


getAbcData.methodA(); // output  : methodA is working
getAbcData.methodB();  // output  : methodB is working
getAbcData.methodC();  // output  : methodC is working
getAbcData.methodD();  // output  : methodD is working


// construtor by providing an argument  ============================================================

class Abc {
    constructor(Name, Course, Mobile, Address) {
       
        console.log("constructor is working")
        console.log(Name, Course, Mobile, Address)
    }
    methodA() {
        console.log("methodA is working")
    }
    methodB() {
        console.log("methodB is working")
    }
    methodC() {
        console.log("methodC is working")
    }
    methodD() {
        console.log("methodD is working")
    }
}
const getAbcData = new Abc("Neeraj", "MERN Stack", 1234567890, "South Ex");

getAbcData.methodA(); // methodA is working
getAbcData.methodB();  // methodB is working
getAbcData.methodC();  // methodC is working
getAbcData.methodD();  // methodD is working


// ===============================================

// here using this keyword , so we can print argument and parameter in the methods also..

class User {
    constructor(getName, getCourse, getMobile, getAddress) {
        console.log("constructor is working")
        // using this keyword ======

        this.getName = getName;  // here, we are using this keyword beacause it will work for methods also.... if we dont use this.. we will get nothing...
    }
    methodA() {
        console.log(this.getName);
    }
    methodB() {
        console.log("methodB is working")
    }
    methodC() {
        console.log("methodC is working")
    }
    methodD() {
        console.log("methodD is working")
    }
}
getUserData = new User("Neeraj", "MERN", 1234567890, "South Ex");
getUserData.methodA();  // output : Neeraj
getUserData.methodB();  // output : methodB is working




// example by displacing the parameters...
class Abc {
    constructor(Name, Mobile, Course, Address) {
        console.log("constructor is working")
        console.log(Name, Course, Mobile, Address)      // output : Neeraj 1234567890 MERN Stack South Ex  (it is work on the bases of passing parameters in which values : see line no. 136)
    }
    methodA() {
        console.log("methodA is working");
    }
    methodB() {
        console.log("methodB is working");
    }
    methodC() {
        console.log("methodC is working");
    }
    methodD() {
        console.log("methodD is working");
    }
}
const getAbcData = new Abc("Neeraj", "MERN Stack", 1234567890, "South Ex");

getAbcData.methodA(); // output :  methodA is working
getAbcData.methodB();  // output :  methodB is working
getAbcData.methodC();  // output :  methodC is working
getAbcData.methodD(); // output :  methodD is working

*/