// Promise===================


const checkPromise = new Promise(function (resolve, rejected) {
    var a = 2;
    var b = 4;
    if (a == b) {
        resolve()
    } else {
        rejected()
    }
})
console.log(checkPromise);

checkPromise.then(() => {
    console.log("Resolve is Working..")
}).catch(() => {
    console.log("Reject is Catched..")
})

// example 2 ===============

const checkPromiseResult = new Promise(function (resolve, rejected) {
    var x = 4;
    var y = 4;

    if (x == y) {
        resolve(x)
    } else {
        rejected()
    }
})

console.log(checkPromiseResult);  // output : Promise {<fulfilled>: undefined}

// undefined because, we don't define resolve as well as rejected.. we can define it by using then and catch method in the promise.

checkPromiseResult.then((getData) => {
    console.log("Resolve is working without any undefined")
}).catch(() => {
    console.log("Data is Rejected.. Without undefined")
})