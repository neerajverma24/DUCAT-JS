/*
// operators====================================

// 2 + 3,
 here 2 and 3 are operands and
the operator is '+'

//=============================================

// type of operators :==========================

1. Arithmetic :  + , - , * , ** , / , % , ++ , -- , etc..

2. Assignment : = , += , -= , *= , /= , %= , **= ,
  &= , |= , ^= , >>= , <<=


3. Comparison :  == , ===, != ,  <> , > , <, >= , <=

4. Logical operator : && ,  || , !

5. Conditional Opearator / Ternarary Opearator :  ?

6. type operator


//Examples 1 :  ================================
// 1. Arithmetic :  + , - , * , ** , / , % , ++ , -- , etc..

// console.log(7+8); // output:  15

var a = 5;
var b = 4;
console.log(a * b);      // output  : 20
console.log(a ** b);   // output: 625


var a = 8;
var b = 4;
console.log(a / b);     // output : 2; dividend is 2
console.log(a % b);     //output : 0, remainder is zero...  // % sign is called "Modular"


// increment..
var a = 8;
console.log(a); // if we do like this , this will not work... it results 8 only..

// we have to increment first than will print...
a++;   // a = a + 1
console.log(a); // now the result is 9..

// decrement..
var b = 4;
console.log(--b); // in this case we dont need to decrement b before print... it will result 3 here...



// Example 2 =====================================
// 2. Assignment :   = , += , -= , *= , /= , %= , **= , &= , |= , ^= , >>= , <<=


var a = 5;  // 5 value is assiging to a
console.log(a); // output : 5;

// example
var a = 5;
a += 3;    // a = a + 3 => 5 + 3 => 8;

// adding and assigning new values of variable 'a' with previous one..

console.log(a); //  output : 8


var a = 5;
a -= 3;
console.log(a);   // output : 2


var a = 5;
a *= 3;
console.log(a); // output : 15

var a = 15;
a /= 3;
console.log(a);  // output : 5


var a = 15;
a %= 6;
console.log(a);  // remainder is 3 , output : 3..

var a = 5;
a **= 3;  // 5 exp 3 , 5*5*5 =125
console.log(a);  // output is 125..


// Example 3 ======================================

// 3. Comparison :  == , ===, != ,  <> , > , <, >= , <=

//example :

var a = 3;
var b = '3';
var c = 4;

console.log("typeof a : ", typeof a);  // number

console.log("typeof b : ", typeof b);  // string

//  console.log(a == b);      // output : true  // it check only value...

//  console.log(a === b);     // output : false.. beacause it check, value, type, address everything

// console.log(a != b);   // output : false   , it checks value only which is 3=3

// console.log(a !== b);  // output : true   , it checks value as well as type , 3(number) is not equal to 3(string)...

// console.log(a<c);    //true

// console.log(a>c);    // false

// console.log(a <= c);    // true

// console.log(a >= c);    // false


// Example 4 ======================================

// 4. Logical operator : && ,  || , !

// AND , && operator ===========

// in  "&& operator"  ,  all the condition has to be true , than it will work only, otherwise it will show no result...
var a = 3;
var b = 2;
var c = 1;
if (a == 3 && b == 2) {
    console.log('True Value')  // in console this part only shows.. because condition is true...
}

if (a == 3 && b == 4) {
    console.log('False Value');  // output : nothing , because cindition is false...
}

//     OR, || operator ===================

// in "|| operator", if all the condition is true doesn't matter , if only any one condition is true, it will show the output...

var a = 3;
var b = 2;
var c = 1;
if (a == 3 || b == 2) {
    console.log('True Value')  // output : True Value
}

if (a == 3 || b == 4) {
    console.log('Also the output..')  // output : Also the output..
}

// MISCELLANEOUS EXAMPLE ======= COMBINE  &&  ||

var a = 3;
var b = 2;
var c = 1;
if (a == 3 && b == 2 || b == 3) {
    console.log("True Value") // output : True Value

    // a==3 && b==2 , ye value true ho gai , iske baad OR wale b==3 se matlab hi nahi rakhega...
}

// another example
if (a == 3 || b == 3 || b == 2) {
    console.log("True")   // output : True
    // koi si bhi ek condition true hui toh result is what is written in Console...
}

var a = 3;
var b = 2;
var c = 1;
// if (a == 3 || b == 3 && b == 2) // this condition is also true..
if (a == 3 && b == 3 || b == 2) {
    console.log("True")  // output : True
    // this is also results true..
}


// NOT ! operator =============
// ye jo condition true hai usko false kar dega, jo false hai usko true kar dega....

// example=======
var a = true;
var b = false;
console.log("typeof a and b : ", typeof a)  // output : boolean
console.log(!a); // output : false
console.log(!b); // output : true

//NOTE :- Ye toggle banane ke kaam aata hai...
//  jaise ek click karo pop-up aa jata hai , dusre click pe band ho jata hai
// waise hi dusra form wagera me, ek click karte hi form aa jata hai, dusre me form band ho jata hai..  inn sabme kaam aata hai ye ! NOt operator.. yahi true false karta hai cheezon ko..




// Example 5 =====================================

// 5. Conditional Opearator / Ternary Opearator :  ?

// syntax
// "yourCondition" ? "True" : "False"

// agar hamari condition true hai to ? ke bagal wala show ho jaye otherwise : colon ke right side wala...

var a = 3;
var b = 2;

const checkData = a == b ? "Yes it is true" : "Sorry Condition is not true"
console.log(checkData) // output : Sorry Condition is not true


// 6.Type operator=====================

// typeof operator....


*/