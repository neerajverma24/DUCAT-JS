/*
// primitive data type (Value type)

var a = 2;  //
var b = a;
console.log("Before increment Value of a : ", a);
console.log("Value of b : ", b);
a++;  // a = a + 1
console.log("After increment of a : ", a);
console.log("After increment value of b : ", b) // value is 2 according to line 4...


// Non-primitive data type (Reference type)
var x = ["Apple", "Ball", "Cat", "Dog"];
var y = x;

console.log("Before push x : ", x);
console.log("Before push y : ", y);

x.push("Hello Student");
console.log("After push x : ", x);
console.log("After push y : ", y);


//========================
var x1 = ["A", "B", "C", "D"];
var x2 = ["A", "B", "C", "D"];
console.log(x1 == x2);  // false result
// because they are different objects in HEAP memory having different address
var a1 = [];
var a2 = [];
console.log(a1 == a2); // result false, same reason above
console.log([] == []); // this is also false, reason is same...
*/

//=====================
/*
// topic : ================================================================
// conditions
if ,
if-else,
if - else  if-else if....
if - else if - else if...., else


// if ======================
var a = 2;
var b = 4;
if (a == b) {
    console.log('Both values are equal');
}  // result is blank, no output

// again above example
var a = 2;
var b = 2;
if (a == b) {
    console.log('Both values are equal');
} // result is working...


// if-else==================
var a = 2;
var b = 4;
if(a==b){
    console.log('both value are not equal') ;   
} else {
    console.log("Values are not equal..")
}                                       // output : Values are not equal..




// if - else  if-else if....  =======================
var a = 2;
var b = 4;
if(a==b){
    console.log('both value are not equal') ;   
} else if(a==b) {
    console.log('Values are equal')

} else if(a==b) {
    console.log('Values are equal')

} else if(a==b) {
    console.log('Values are equal')

} else if(a==b) {
    console.log('Values are equal')

}  // the result is nothing...

// case 2 with ! not sign...
var a = 2;
var b = 4;
if(a!=b){
    console.log('both value are not equal') ;  // result is this, it will not read any other ifs and elses... 
} else if(a==b) {
    console.log('Values are equal')

} else if(a==b) {
    console.log('Values are equal')

} else if(a==b) {
    console.log('Values are equal')

} else if(a==b) {
    console.log('Values are equal')

} 



//if - else if - else if...., else =============================

var a = 2;
var b = 4;
if (a == b) {
    console.log('both value are not equal');  // result is this, it will not read any other ifs and elses... 
} else if (a == b) {
    console.log('Values are equal')

} else if (a == b) {
    console.log('Values are equal')

} else if (a == b) {
    console.log('Values are equal')

} else if (a == b) {
    console.log('Values are equal')

} else {
    console.log("The value is not matching at all...")  // it will result this value...
}

*/