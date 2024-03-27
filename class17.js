// Topic  :  Set  [ES6 feature] =============================

// Set gives the unique value... [means the repeated value in an array , only shows one time only after using Set Method...]
/*
var a = [1, 2, 1, 4, 2, 4, 5, 6];   // here , 1 2 and 4 repeated , but after using Set the output showed only one time.....

const getSetData = new Set(a);          // here we are using 'new' keyword...

console.log(getSetData);                // output : Set(5) {1, 2, 4, 5, 6}

console.log(getSetData[0]);             // result : undefined


const getData = new Set('abc')
console.log(getData); // output :  Set(3) {'a', 'b', 'c'}


const getItems = new Set();
console.log("Before adding set : ", getItems);  // output : {size: 0}

// example 1 ================
getItems.add(1)
getItems.add(1)
getItems.add(3)
getItems.add(2)
getItems.add(1)

console.log("After adding set : ", getItems); // output  : After adding set :  Set(3) {1, 3, 2}

// example 2 ================
var b = ["Apple", "Ball", "Cat", "Dog"];
const getData = new Set()

getData.add(b);
console.log("After add :", getData);     // output : Set(1) {"Apple", "Ball", "Cat", "Dog"}


// important example 3 =======================
const getData = new Set()

getData.add(["Apple", "Ball", "Cat", "Dog"]);
getData.add(["Apple", "Ball", "Cat", "Dog"]);

console.log("After add : ", getData)       // output : After add :  Set(2) {Array(4), Array(4)}
// this is due to the different address , it will print different sets..


// Another example  :-  ==============================

//  with "has" property =============================================
const getData = new Set()

getData.add(["Apple", "Ball", "Cat", "Dog"]);
getData.add(["Apple", "Ball", "Cat", "Dog"]);
getData.add(1);

console.log("After add : ", getData)     //output : Set(3) {Array(4), Array(4), 1}

if (getData.has(1)) {
    console.log('yes, this is true')     // output : yes
} else {
    console.log('No, this is not true...')
}

// way 2 =====
if (getData.has(4)) {
    console.log('yes, this is true')
} else {
    console.log('No, this is not true...')      // output : No, this is not true...
}



// Topic : 'this' keyword ========================================================

// window is the global object of javaScript
console.log(window);  //
console.log(this);  // output : same as window...

console.log(window === this) // output : true

// Next Lecture
*/



