// topics

/*
//1 types of console ========================
console.log('hii');
console.error("Hello")
console.warn("ok")


// topic : string =============================


var a = "Rain      "
console.log(typeof a)
console.log(a.length)

var b = a.trim()
console.log(a.trim())
console.log(b.length);


// topic :  calling function =======================

function myfun() {
    console.log('Hello World !')
}
myfun()


// working of variables in a function ==============

var a = 'Hello Students'
console.log(a);

const c = "Let variable";
console.log(c)

function myfunc1() {
    var b = "Hello World !"
    console.log(a)
    console.log(b)  // b is working here because it is a var variable....
    console.log(c)  // this will also work
}
myfunc1()


// topic :  working of variables in a block... =========================================

var a = 1;
let b = 2;
const c = 3;
{
    console.log(a)
    console.log(b)
    console.log(c)
}  // this will result all three

============================================
{
    var a1 = 1;
    let b1 = 2;
    const c1 = 3;
    console.log(a1)
    console.log(b1)
    console.log(c1)
}  // this will also result all the three values

===================================================
{
    var a2 = 1;
    let b2 = 2;
    const c2 = 3;
}
console.log(a2)
console.log(b2)
console.log(c2)  // only var variable will be print    // let and const throws an error...



let b = "Neeraj";
console.log(b);
b = "Rahul"
console.log(b);


//  closure example

// Definition :  Closure are functions that remember the variables from the scope in which they were created.

function outerFunc() {
    var a = "This is a function"
    function innerFunc() {
        console.log(a)
    }
    return innerFunc;
}
const closureExample = outerFunc();
closureExample();

*/


// bind method : 

// Create a simple object representing a person

const person = {
    firstName: "Neeraj",
    lastName: "Verma"
};

// A function that introduce a person
function introduce(greeting) {
    console.log(`${greeting} my name is ${this.firstName} ${this.lastName}`);
}

// Use bind() to create a new function with a specific context
const boundIntroduce = introduce.bind(person);

// Now, you can call the bound function with the desired greeting 
boundIntroduce("Hello !")   // output : "Hello ! my name is Neeraj Verma"

// The original function 'introduce' remains unchanged
introduce("Hii !")      // output :  "Hi, my name is undefined undefined."