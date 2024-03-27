//data types ===================

/*
// 1. primitive data type (Value type)
string
number
undefined
boolean
null
bigInt
symbol

// 2. Non-primitive data type (Reference type)
array
object
function

*/


/*
// typeof ===================================
var studentName = "Rahul";
console.log(typeof studentName);

// string =================
var a = "Neeraj";
console.log("Type of a : ", typeof a);  // typeof used to check the type of operator

//number ======================
var b = 123;
console.log("Type of b : ", typeof b);

//undefined =======================
var c;
console.log("Type of c : ", typeof c);

//boolean =====================
var d = true;
var e = false;
console.log("Type of d : ", typeof d);
console.log("Type of e : ", typeof e);


//bigInt  ===========================

//console.log(Number.MAX_SAFE_INTEGER);
// it will results max 16-digit number

var x = 123;
//console.log(typeof BigInt(x), BigInt(x));
const getData3 = BigInt(x);
//console.log(`getData3: ${getData3}`);
console.log(getData3);
//console.log(getData3 + 2); // it will throw an error because BigInt always work with BigInt...

// if we add 2n at with getData3 , the result is 125n....
console.log(getData3 + 2n);


// null =================================

// null means nothing
let z = null;
console.log(z);  // result null, but
console.log(typeof z); // results object..

// symbol ======================


//array  : []   ===========================

// array is the collection of data
var arrData = ["Neeraj", 24, "javaScript", 9711330353];   // [] content in this are called "Array of Element" , and these are indicated by index [0] which means "Neeraj" is at Zero Index

console.log(arrData);
console.log("Length of array is :", arrData.length);
console.log(typeof arrData);  // this result object, not array... this is a "bug"...

// to check this as Array use
// console.log(Array);     // will study this in further lectures..



// array method =============================================

// push, pop, shift, unshift

//push method :- is used to add an element at the end of an array
var a = ["Apple", "Banana", "Dog", "Cat"];
console.log("before push :", a);
a.push("Fish");  // to
console.log("after push :", a);

// pop method : is used to delete an item which is at last
var a2 = ["Apple", "Banana", "Dog", "Cat"];
console.log("before pop : ", a2)
a2.pop()
console.log("after pop : ", a2);

// use this method to get deleted item
const getPop = a2.pop();
console.log("Deleted item is : ", getPop); // in this line the result is "Dog" according to the line 99;

// unshift : to add an element at the starting of the array

var a3 = ["Apple", "Banana", "Dog", "Cat"];
console.log("before unshift :", a3);
a3.unshift("Fish");  // to
console.log("after unshift :", a3);


// shift method : it will remove starting index of an array
var a4 = ["Apple", "Banana", "Dog", "Cat"];
console.log("before shift :", a4);
a4.shift();  // to
console.log("after shift :", a4);

const getItem = a4.shift();
console.log("Get Deleted Item :", getItem)
*/


/*
//object ===================================
// object syntax

var getObjData = {

}
console.log(getObjData);

console.log("Checking the type of getObjData : ", typeof getObjData);    // result is object


// for multiple data, we use key.values
var getObjData = {           // getObjData is object
    studentName: "Neeraj",
    studentEmail: "neeraj@gmail",
    studentMobile: 9711330353   // {} data in this are values..
}
//console.log(getObjData);
console.log(getObjData.studentName);
console.log(getObjData.studentEmail, getObjData.studentMobile);

*/

//function


