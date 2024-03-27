// IIFE Function ========================================================

/*
(function () {
    console.log("Hello IIFE execution..")
})()



//=======================================

(function (getName, getCourse, getRollNo, getBranch) {
    console.log("Hello IIFE execution..")

    console.log(getName, getCourse, getRollNo, getBranch);
})("Neeraj Verma", "MERN Stack", 123456, "CSE");


*/
//============================================


// TOPICS = Promise , Call Back , Async - Await....=================================================================

/* functionally work karta hai...

console.log("Task A")   // 4 ms
console.warn("Task B")  // 2 ms
console.log("Task C")   // 5 ms
console.warn("Task D")  // 1 ms

// (synchronous programming language)



// asynchronous ==============================================================================================

setTimeout(() => {
    console.log("Task A")
}, 4000);


setTimeout(() => {
    console.log("Task B")
}, 2000);

setTimeout(() => {
    console.log("Task C")
}, 5000);


setTimeout(() => {
    console.log("Task D")
}, 1000);
// output : (according to time taken)
Task D  
Task B
Task A
Task C  //



// ========================

setTimeout(() => {
    console.log("Task A")
}, 4000);


setTimeout(() => {
    console.log("Task B")
}, 2000);

console.log("Task E")

setTimeout(() => {
    console.log("Task C")
}, 5000);


setTimeout(() => {
    console.log("Task D")
}, 1000);

//
Task E
Task D
Task B
Task A
Task C  //



//==============================================

setTimeout(() => {
    console.log("Task A")
}, 4000);

setTimeout(() => {
    console.log("Task B")
}, 2000);

setTimeout(() => {
    console.log("Task C")
}, 5000);


setTimeout(() => {
    console.log("Task D")
}, 1000);

console.log("Task E");

// task E ko jyada priority dega kyuki wo console.log() javaScript ka part hai..
/*
Task E
Task D
Task B
Task A
Task C



// ms paint example===

// Call Stack with main()  then NODE API then Call Queue then output..............

b
*/


