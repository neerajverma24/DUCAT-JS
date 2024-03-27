// Topic : Call , apply and bind method...====================
/*
// call method  ===================================

const obj1 = {
    studentName: "Neeraj Verma",
    studentCourse: "JavaScript"
}

function abc(getData) {
    console.log("Hello Abc...")
    console.log(getData);  // output : Hello Students..   we get hello students because we had passed an argument...

    console.log(this.studentCourse); // output : JavaScript
    console.log(obj1.studentName);  // output :  Neeraj Verma

}
abc.call(obj1, "Hello Students..");     // passed data should be in the string form...



// apply method ==============================


const obj1 = {
    studentName: "Neeraj Verma",
    studentCourse: "JavaScript"
}

function abc(getData1, getData2, getData3) {
    console.log("Hello Abc...")
    console.log(getData1);  // output : Hello Students..   we get hello students because we had passed an argument...

    console.log(getData2);  // 9711330353
    console.log(typeof getData2);  // number

    console.log(this.studentCourse); // output : JavaScript
    console.log(obj1.studentName);  // output :  Neeraj Verma
}
abc.apply(obj1, ["Hello Students", 9711330353, "ReactJs"]);  // passed data should be in the string form...


// example 2  ================
const obj2 = {
    name: "Neeraj",
    email: "neeraj@gmail.com"
}

function myFunc(getMethods) {
    console.log(obj2.email);
    console.log(getMethods);
}
myFunc.call(obj2);
myFunc.call(obj2, ["This is Call Method..."])  // output :       ['This is Call Method...']   ( in the form of an array )
myFunc.apply(obj2, ["This is Call Method..."])  // output  :  This is Call Method...




// bind method ========================================

// in this method, an object will be borrow from another object..

const getBind = {
    name: "Neeraj",
    mobile: 9711330353,

    myFun: function () {
        // console.log(this.name);  // it will return 'undefined'    without using bind
        return `My Name Is ${this.name}`  // this will not return undefined..


    }
}
const getBindData = getBind.myFun.bind(getBind);
console.log(getBindData())



// bind method : ================================================

// Another way (chatgpt)

// Create a simple object representing a person

const person = {
    firstName: "Neeraj",
    lastName: "Verma"
};

// A function that introduce a person
function introduce(greeting) {
    console.log(`${greeting} my name is ${this.firstName} ${this.lastName}`);
}


const boundIntroduce = introduce.bind(person);        // Use bind() to create a new function with a specific context

// Now, you can call the bound function with the desired greeting 
boundIntroduce("Hello !")   // output : "Hello ! my name is Neeraj Verma"

// The original function 'introduce' remains unchanged
// introduce("Hii !")      // output :  "Hi, my name is undefined undefined."
// ?
*/