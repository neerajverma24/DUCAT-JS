// Fill method ==================================
/*
var a = [];
console.log(a);


// new Array() method ============================

const getArr = new Array(10)
console.log("Before fill : ", getArr); // output : (10) [ empty x 10]
//yaha se length bana dega

getArr.fill(1)
console.log("After fill : ", getArr);  // output: After fill :  (10) [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]



// example 2 : 
const getArr = new Array(10)

console.log("Before fill : ", getArr);       // output : (10) [ empty x 10]

getArr.fill(1, 2, 5)  // iska matlab 1 ko fill kardo,  2 se 5 undex tak

console.log("After fill : ", getArr);       // output : 10) [empty × 2, 1, 1, 1, empty × 5]




// splice method : ================================

let arr = ["apple", "banana", "cherry"];
arr.splice(-3, -4, "orange", "grape");
console.log('Spliced array:', arr);   //output - Spliced array: ['apple


// splice with delete =================================

var a = ["Apple", "Ball", "Cat", "Dog"]
console.log(a);
// a.splice(1,1);


//a.splice(1, 2); // iska matlab 1 index se 2 items delete kardo
//  console.log(a);  // output : apple, dog

var getDeletedData = a.splice(1, 2);
console.log("After Delete : ", getDeletedData); // here output : Ball, Cat


// splice with insert =============================

var a = ["Apple", "Ball", "Cat", "Dog"]
console.log(a);
a.splice(1, 0, "Cherry",);    // 1 ka mtlb pehle parameter par chale jao, zero ka mtlb zero item delete kardo, or pehle 1 index pe cherry word insert kardo....
console.log("Data After Insert : ", a);  // output : ['Apple', 'Cherry', 'Ball', 'Cat', 'Dog']



var a = ["Apple", "Ball", "Cat", "Dog"]
console.log(a);
a.splice(1, 2, "Cherry",);
console.log("Data After Insert : ", a); // output : ['Apple', 'Cherry', 'Dog']



// for of, for in ==============================================

var a = ["Apple", "Ball", "Cat", "Dog"]
for (var i = 0; i < a.length; i++) {
    //console.log(a);
    console.log(a[i]);  // output : names
}



// for of =================================

var arrItems = ["Apple", "Ball", "Cat", "Dog"];
for (item of arrItems) {
    console.log(item)  
}       // output :  all names

// for in =====================

var arrItems2 = ["Apple", "Ball", "Cat", "Dog"];
for (items in arrItems2) {
    console.log(items)  // output :  index numbers..
}

// Example  ===============================

// How to combine/relate (  empty array , push method, for in ) 


var getIndexArr = [];
var arrItems = ["Apple", "Ball", "Cat", "Dog"]
for (itemIndex in arrItems) {
    console.log(itemIndex)   // output : index numbers
    getIndexArr.push(itemIndex)
}
console.log(getIndexArr); // output : ['0', '1', '2', '3']   index number in the array form...

*/