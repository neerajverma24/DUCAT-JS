console.log("Hello World")

console.log("3" > "11")
// true //

// why? The reason is ascii value... it will count 1-1 not eleven and in ascii table the of 1 is 49, and the value of 3 is 51... this is the reason....


console.log("3" > 11);  // this is not the same data type, so javascript converts the string into the number before comparing both the values.. so here, 3 is not greater than 11, hence the result is false....


console.log("" > -1);
// in this case, there is an empty string, so before comparing javascript converts an empty string into zero, hence zero is greater than -1, so the result will be true...

console.log("Rowdy" > 1);
// here "Rowdy" is a string, when we trying to compare a number with an string, js is converted a string into a number before comparing, hence 'Rowdy' is a string, so according to js this is NaN, there whenever we compare a NaN to a string , the result will be False...

console.log("3" + +5);  //  35

console.log("3" + 4);  // 34

console.log("3" + "5"); // 35



//====================
function hello() {
    // var name = "Neeraj";  // when we declare a variable before console, it will give the result...
    console.log(name);  // Neeraj

    // but
    console.log(age);   // undefined..
    var age = 10;  // we cannot declare a variable after the console

    // now we are using let instead of var

    let lastName = "Verma";
    console.log(lastName)   // Verma...

    // console.log(mobile);
    // let mobile = 1231231230  // error  , becoz it cannot access 'mobile' before initialization

}
hello()


// for loop


for (i = 0; i <= 9; i++);
console.log(i)

//==================
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
    console.log(x);  // for of loop, that runs through all each items of an array...
}

// iteration

const colors = ['red', 'green', 'blue'];
colors.forEach((color) => {
    console.log("The Color is : ", color);
});