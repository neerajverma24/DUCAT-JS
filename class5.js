//push method...

/*
// WITHOUT USING CLONING ==================

var a = ["Apple", "Ball", "Cat", "Dog"];

var b = a
console.log("before push a :", a)
console.log("before push b :", b)

a.push("Hello Student");

console.log("after push a :", a)
console.log("after push b :", b)    // without pushing 'Hello student' in b.. automatically will print..

//==========================================================

// use of Cloning :  Ek array me kaam kare or dusre array me kuch farak na pade...

// CLONING ================================

//  cloning matlab kisi cheej ko copy karna without affecting the other arrays

var a = ["Apple", "Ball", "Cat", "Dog"];

// way 1 ===========================
var b = ["Apple", "Ball", "Cat", "Dog"];  // yaha variable ka naam change hai...

console.log("before push a :", a)
console.log("before push b :", b)

a.push("Hello Student");

console.log("after push a :", a)    // changes only in this line


console.log("after push b :", b)


// way 2 =========================
var a = ["Apple", "Ball", "Cat", "Dog"];

var b = [].concat(a);
// [] = ["Apple", "Ball", "Cat", "Dog"]

console.log("before push a :", a)
console.log("before push b :", b)

a.push("Hello Student");

console.log("after push a :", a);    // changes only in this line

console.log("after push b :", b)


// topic : slice ================================

var a = ["Apple", "Ball", "Cat", "Dog"];

var getSliceData = a.slice(0, 2)   // // this means zero item delete karne hai or total 2 length tak item output me dene hai...
console.log(getSliceData);  // output : Apple and Ball

var getSliceData2 = a.slice(1, 2)           // this means 1 item delete karna hai , total 2 length tak.... isliye only Ball output dega....
console.log(getSliceData2);  // output : Ball only..


//=============================================

var a = ["Apple", "Ball", "Cat", "Dog"];

var getSliceData = a.slice(1, 3)
console.log(getSliceData);      // output : Ball and Cat

getSliceData.push("Push Data")
console.log("Data after push : ", getSliceData);

// checking if 'a' has some changes or not
console.log(a);  // there is no change in 'a' after we print


// way 3 ==========================

var a = ["Apple", "Ball", "Cat", "Dog"];

// var b = a.slice(2);  // slice(2) here result cat and dog only... it cut apple and dog...
// [] = ["Apple", "Ball", "Cat", "Dog"]


var b = a.slice(0);  // if we dont use second argument here, it will goes to infinity


console.log("before push a :", a)
console.log("before push b :", b)

a.push("Hello Student");

console.log("after push a :", a) // changes only in this line
console.log("after push b :", b)


// way 4 ==============================

// SPREAD OPERATOR ( ... ) TRIPLE DOT

var a = ["Apple", "Ball", "Cat", "Dog"];

var b = [...a];  // using spread operator

console.log("before push a :", a)
console.log("before push b :", b)

a.push("Hello Student");

console.log("after push a :", a) // changes only in this line

console.log("after push b :", b) // no changes after push   , the result will be array without pushing

*/


// topic : return =================================

/*


function abc() {
    console.log("Hello abc..")
}
abc()
// copy the above function, and check it in console, it will result  undefined.. why?

// with return keyword  (use this in console..)

function abc() {
    console.log("Hello abc..")
    return 'Hello World !'
}
abc()
// with return keyword , function will not show undefined...


//==================
function abc() {
    return 'JavaScript'
}
// abc()    // by printing it directly it will show no result...

// way 1
//console.log(abc());     // this is how it will give the result..

// way 2
const getData = abc();
console.log(getData);




// FUNCTION  =====================
There are six types of function

// Here we will study the function by three methods only
1. function declaration
2. function expression
3. Arrow functions

*/