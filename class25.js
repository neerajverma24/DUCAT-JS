/*
// synchronous =========================

console.log("Task E")
console.log("Task F")
console.log("Task G")



// Asynchronous ===================

setTimeout(() => {
    console.log("Task A")
}, 5000)

setTimeout(() => {
    console.log("Task B")
}, 3000)

setTimeout(() => {
    console.log("Task C")
}, 2000)

setTimeout(() => {
    console.log("Task D")
}, 1000)



//==================================================
var a = 5;
var b = 9;
var b = 1;
console.log(a + b); // output :  6


// Asynchronous


var a = 5;
var b = 9;
setTimeout(() => {
    var b = 1;
}, 1000)

console.log(a + b);  // output : 14

*/

// PROMISE ============================================================================================================
/* THREE PHASES IN PROMISE

initial / pending
resolve
rejected



// example 1 ==================

const checkPromise = new Promise(function (resolve, rejected) {
    var x = 2;
    var y = 5;
    if (x == y) {
        resolve()
    } else {
        rejected()
    }
})
console.log(checkPromise);

checkPromise.then(() => {
    console.log("Resolve is Working..")
}).catch(() => {
    console.log("Reject is Catched...")
})


// example 2 ===========

const checkPromise = new Promise(function (resolve, rejected) {
    var x = 2;
    var y = 2;
    if (x == y) {
        resolve()
    } else {
        rejected()
    }
})
console.log(checkPromise);

checkPromise.then(() => {
    console.log("Resolve is Working..")
})


// example 3===============

// using this example in promise ======
var a = 5;
var b = 9;

setTimeout(() => {
    var b = 1;

}, 1000)
console.log(a + b);

// example 4 ======================

var a = 5;
var b = 9;
const getPromiseResult = new Promise((resolve, rejected) => {
    var b = 1;
    if (a < b) {
        resolve(b)
    } else {
        rejected()
    }
});

getPromiseResult.then((getData) => {
    console.log("Resolve is working..")
}).catch(() => {
    console.log("Reject is Catched..") // this will be the output  
})

*/





















