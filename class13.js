// TOPIC : FILTER AND REDUCE
/*
//========================
//Filter method

var arrData = ["Apple", "Ball", "Cat", "Dog"];


const getFilterData = arrData.filter((items, index) => {
    //console.log(items, index)
    return items.length === 3
})
console.log("Filte Data  : ", getFilterData);

console.log("Original Data : ", arrData);


// another example =====

var a = [2, 4, 5, 6, 7, 8, 9, 10, 12, 14];

const getEvenNumber = a.filter((items, index) => {
    return items % 2 === 0;
})
console.log(getEvenNumber);


// Reduce Method ================================{check video for this}

// syntax :

// reduce() function is: array.reduce(callbackFunction[, initialValue])

var a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const getReducedData = a1.reduce((accumulator, currentValue) => {
   // console.log(accumulator);
   // console.log(currentValue);
    //console.log(accumulator + currentValue);
    return accumulator + currentValue
})        // here zero is used to initialize the data...
console.log(getReducedData);   // result is 45.. it will add all the data of array , we have return acc + curValue

// example 2 ======

var a2 = [1, 2, 3, 4, 5]
const getReduced = a2.reduce((acc, crrValue) => {
    return acc + crrValue
})
console.log(getReduced); // output : 15, it will add all the data..


// Every Method ===========================
// check all the condition
var a = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const getEveryData = a.every((item, index) => {
    // console.log(item, index)
    return item % 2 === 0
})
console.log(getEveryData); // result false..


// Some Method ============================
var a = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const getEveryData = a.some((item, index) => {
    // console.log(item, index)
    return item % 2 === 0
})
console.log(getEveryData); // check only 1 condition

*/

//
