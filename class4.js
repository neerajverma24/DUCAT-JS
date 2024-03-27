/*
// for loop    syntax======================

for (initialization, yourCondition, increment / decrement) {
    // code to be executed
}
// example 1 :  print 1 to 5 counting


// example 2 : Table of 2
for (i = 1; i <= 10; i++) {
    console.log(i * 2);
}



// while loop   syntax ===========================
while (yourCondition) {
    // code to be executed...
    increment / decrement
}

// 1 to 5
var i = 1;
while (i <= 5) {
    console.log(i);  // if we print without increment/decrement it will goes upto infinity

    i++   // without increment , it will goes to infinity...
}


// print 2 table
var i = 1;
while (i <= 10) {
    console.log(i * 2)
    i++;
}



// do - while loop   syntax =======================

do{
    //code to be executed
    // increment/decrement
}while(YourCondition)


// example 1=======
var i = 12;
do {
    console.log(i)  // result 12, ek baar result dega hi dega chahe condition true ho ya na ho.
    i++;
    console.log(i) // result 13, same explaination
} while (i < 11) // false condition 13<11


// example 2========

var i = 1;
do {
    console.log(i)
    i++;
} while (i < 11) // true, yaha condition true hai to reult 1 se 10 tak ki counting dega...

*/