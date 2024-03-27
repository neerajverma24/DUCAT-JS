// just explaination why do we need to use 'this' keyword...

/*
function abc() {
    console.log("Hello abc..")
}
// abc()

//console.log(abc());
console.log(window);
//console.log(window.abc());

console.log(window.alert('Hello World'));
window.alert('Hello Students');


document.write('Welcome to Js');    // we can write window also...
document.write('Welcome to Js 123');


// topic :  why we use console.log instead document.write=================

// to differentiate the data..
var a = ["A", "B", "C", "D"];
console.log(a);
alert(a);
document.write(a);


// ====================
var a1 = {
    name: "Neeraj",
    lastName: "Verma"
}

console.log(a1);
alert(a1);
document.write(a1);


// this ================================

// "use strict"     
function abc() {
    "use strict"         // this method always return 'undefined'..
    var course = "javaScript";
    console.log(this)
    console.log("Hello abc..")
}
abc()


// this example =====================
var userData = {
    name: "Neeraj Verma",
    breakfast: "Tea",
    email: "neeraj@gmail.com",
    mobile: 9711330353,
    getInfo: function () {
        // console.log(`${userData.name} - ${userData.breakfast} - ${userData.email}`)           
                 // output : Neeraj Verma - Tea - neeraj@gmail.com

        // console.log(`${this.name} - ${this.breakfast} ${this.email} ${userData2.brand}`)        
                // output : Neeraj Verma - Tea neeraj@gmail.com Samsung

        //  console.log(`${this.name} - ${this.breakfast} ${this.email} ${this.brand}`)                 
                // output :  Neeraj Verma - Tea neeraj@gmail.com undefined            
                    // undefined due to 'this.brand' exist outside the object............
    }
}

const userData2 = {
    mobile: "Samsung S11",
    brand: "Samsung"
}
userData.getInfo();

//====================
function abc() {

    var course = "javaScript";
    return this

}
const getData = abc();
console.log(getData);



// with new keyword ( importance of new keyword)================================

function abc() {

    var course = "javaScript";
    return this

}
const getData = new abc();
console.log(getData);        // output : abc {}


// example =====================================
function abc1() {

    this.course = "javaScript";
    return this

}
const getData1 = new abc1();
console.log(getData1.course);       // output : javaScript

*/







