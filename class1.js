// JavaScript is case sensitive language... which means it reads things exactly as it is written


// javascipt ko body me isliye istemaal karte hai kyuki ye website ki performance ko increase karta hai,   kaise karta hai increase ? Js ek Interpretated programming language hai isliye , agar hum isko head me daal denge to ye head ke content ko hi read karta rahega...


//

// Types of console ============================
/*
console.log("Hello JavaScript 😊");
console.error("Hello World !");
console.warn("This needs to be edited..");


// String written in quotes.. ==================
console.log("Neeraj")
console.log('Verma')
*/


// to store this data of string we need to make a container which contains data

/* there are three types of container/ variables
var
let
const    // this is also called constant value..


//================================================
// camelCase is neerajKumarVerma (readable format)
// snake_case == neeraj_kumar_verma
// normalcase == neerajkumar

//syntax ============================
var a = "neerajKumar";

let b = "javaScript";

const c = "Hello students..";

console.log(a);
console.log(b);
console.log(c);


// length of string ===========================
var a = "neerajKumar";

let b = "javaScript";

const c = "Hello students..";

console.log(a.length);
console.log(b.length);
console.log(c.length);


//===================
var a = "neerajKumar";

let b = "javaScript";

const c = "Hello students..";

console.log("Length of a : ", a.length);
console.log("Length of b : ", b.length);
console.log("Length of c : ", c.length);


// trim() method   =======================

var studentName = "  Neeraj Kumar   ";

console.log("before using trim : ", studentName.length);    // it will count spaces also, result is 17

// to not count these extra spaces we need to use trim() method = trimStart() and trimEnd() also..

var getData = studentName.trim();  // it will trim spaces at the beginning and ending of string

console.log("actual data : ", getData);  // it will print full name with space between

console.log("after using the trim : ", getData.length);   //

//============================================

()  // parenthsis bracket
{} // curly bracket
[] // square brackets/ array bracket
<> // angle bracket

//  BLOCK===========================================

{
    // this is called block
}


function anyName() {
    console.log('this function does something 1');
    console.log('this function does something 2');
    console.log('this function does something 3');
}
anyName();  // calling function with its name..
anyName();
anyName(); // 3X3.. CALLING FUNCTION 3 TIMES RESULTS 3 OUTPUT OF EACH..


//===============================================
// working of variables in a block

var a = 2;
let b = 4;
const c = 5;
{
    console.log("value of a : ", a);
    console.log("value of b : ", b);
    console.log("value of c : ", c);
}


//===================================

// case 1
var a = 2;
let b = 4;
const c = 5;
{
    console.log("value of a : ", a);
    console.log("value of b : ", b);
    console.log("value of c : ", c);
}

// case 2

{
    var a = 2;
    let b = 4;
    const c = 5;
    console.log("value of a : ", a);
    console.log("value of b : ", b);
    console.log("value of c : ", c);
}

// case 3
{
    var a = 2;
    let b = 4;
    const c = 5;

    console.log("value of b : ", b); // results b, beacuse it is in the block...
}
console.log("value of a : ", a);        // results is only this
console.log("value of b : ", b);        // b and c has no value here , results error..
console.log("value of c : ", c);


// the value of let and const is not accessible outside the block



//=================================================

// same case in the function

// case 1:  this is outside the block
var a = 2;
let b = 4;
const c = 5;

function abc() {
    console.log("value of a : ", a);
    console.log("value of b : ", b);
    console.log("value of c : ", c);
}
abc();

// case 2 : this is inside the block
function abc() {
    var a = 2;
    let b = 4;
    const c = 5;
    console.log("value of a : ", a);
    console.log("value of b : ", b);
    console.log("value of c : ", c);
}
abc();



// variables are inside the block and here all three variables results error...
function abc() {
    var a = 2;          // here var will not work, because it is either global scope / or function scope.
    let b = 4;
    const c = 5;
}
console.log("value of a : ", a);
console.log("value of b : ", b);
console.log("value of c : ", c);
abc();

*/


// reDeclaration ===================

/*
var a = "Neeraj";
var a = "Rahul";
console.log(a);
//it will result rahul only 

var a = "Neeraj";
console.log(a); 
var a = "Rahul";
console.log(a);
//it will result both the name


//======= performing with let variable
let b = "Neeraj";
let b = "Rahul";        (here we will get the syntax error)
console.log(b);     


let b = "Neeraj";
console.log(b);
let b = "Rahul";
console.log(b);   ///// errorr....

// this will shows error because b already has been declared...




// again with let ===========
let b = "Neeraj";
console.log(b);
b = "Rahul"
console.log(b);  // we cannot use let  keyword twice but we can perform the changes by just using variable name...
//  it will result both the names at the line number 238 and 240...

// again with let variable =================
let b = "Neeraj";
console.log(b)
b = "Rahul"         // it will result Neeraj because we declare varible before the console..

/*

let b = "Neeraj";
b = "Rahul"
console.log(b)
// now the result is rahul.. 


// variable declaration with CONST

// CONST==============================

const c = "Neeraj";
// const c = "Rahul"        // error
// c = "Rahul"              // error
console.log(c + " " + "Verma");



//=================================
"use strict"  // always use at the top of the code
a = "Neeraj"
console.log(a);   // error because we cannot declared the variable... neither it's  let , var, or const..



//=====================================
// template string

var a = "Neeraj";
var b = "Kumar";

// without using template string ====================


console.log(a + " " + b) //old method



// using Template String ( ` ` ) =====================

// console.log(`${a} ${b}`)    // new way to write multiline strings in JS....

// OR

const getData2 = `${a} ${b}`;
console.log(getData2);   

*/