// Conversion===============
/*
// string to number conversion===============
var a = "1";
console.log("typeof a : ", typeof a);  // result is string
console.log("Way 1 : ", typeof Number(a)); // result number
console.log("Way 2 : ", typeof +a); // result is number

// number to string conversion=================


// example 
var data = 971 + " " + 1330353
console.log(typeof data);  // result is string


var b = 1;
console.log("Way 1 : ", typeof String(b));
console.log("Way 2 : ", b.toString());


// practical example
function abc(getData1, getData2) {                  // getData1 and getData2 are a parameters
    console.log("Hello abc...")
    console.log(getData1, getData2)
    console.log(getData1 + getData2)

}
abc(2, 5);  // 2 , 5 are an arguments


// how it works in debugging...
// we want the addition of both the data, so first we have to check the typeof both the data

// way1 : -
function abc(getData1, getData2) {
    console.log("check the typeof getData1 : ", typeof getData1)

    console.log("check the typeof getData2 : ", typeof getData2)

    console.log("Hello abc..")  // to check

    console.log(getData1, getData2)

    console.log(getData1 + +getData2)   // output : 7

}
abc(2, "5"); 


//==================================
// this is the type of work we done in debugging...

// way 2 : 
function abc(getData1, getData2) {
    console.log("check the typeof getData1 : ", typeof getData1)

    console.log("check the typeof getData2 : ", typeof +getData2)   // addition sign to change string into a number

    var changedGetData2 = +getData2;        // changing variable

    console.log(getData1, getData2)

    console.log(getData1 + changedGetData2) // adding parameter + variable

}
abc(2, "5");  // now the result is 7...

*/