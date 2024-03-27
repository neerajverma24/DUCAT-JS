// Closure

/*
function teacher() {
    var x = "javascript";
    function student() {
        console.log(x)
    }
student()   // this is called "CLOSURE.."
}
teacher();



// default parameter

function abc(a, b) {

    console.log("Hello Students");
    console.log(a + b)
}
abc(2, 4) ;


// using default parameter..

// default b=1
// case 1
function abc(a, b = 1) {

    console.log("Hello Students");
    console.log(a + b)
}
abc(2);


// case 2
// interpretating value b=0;
function abc(a, b = 0) {

    console.log("Hello Students");
    console.log(a + b)
}
abc(2, 1);


//================

// Rest parameter
function abc(a, b, ...restData) {

    console.log(a, b);
    console.log(a + b)
    console.log(restData);

    const [, , getData] = restData;
    console.log(getData);
}
abc(1, 2, 5, 4, 7, 8, 9);


// parameter destructuring
// case 1 ============================
var objData = {
    name: "Neeraj Verma",
    branch: "MERN",
    mobile: 1234567890,
    email: "neeraj@gmail.com"
}
function abc(getName) {
    console.log("Hello abc");
    console.log(getName)
}
abc(objData.name)
abc(objData.email)


// case 2 =====================
var objData = {
    name: "Neeraj Verma",
    branch: "MERN",
    mobile: 1234567890,
    email: "neeraj@gmail.com"
}
function abc(getObjData) {
    console.log(getObjData.name);
    console.log(getObjData.email);
}
abc(objData)


// case 3 ======================

var objData = {
    name: "Neeraj Verma",
    branch: "MERN",
    mobile: 1234567890,
    email: "neeraj@gmail.com"
}
function abc({ name, email }) {
    console.log("hello")
    console.log(name);
    console.log(email);
}
abc(objData)


//================

// callback function

const def = function () {
    return "def function"  // use return instead console.log
}
function abc(getDef) {
    console.log(2 + 5);
    // console.log(getDef);  // poori ki poori function return kar dega aese

    console.log(getDef());

}
abc(def);
*/
