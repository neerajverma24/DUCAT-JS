// Heigher order function (HOF)
// koi function as an Input kuch le , ya as an output kuch , ya dono kaam ek sath kare input bhi le or output bhi de usko higher order function kehte hai.....

// EXAMPLE OF HOF given below
// forEach, map, reduce, filter, sort, every, find, sum...

// Important array function ====================================

/*
var arrData = ["Apple", "Ball", "Cat", "Dog"];
  // getting only one element from the array...

const fruit = arrData[0];
const fruit = arrData[1];
console.log("Here is your fruit : ", fruit);

// with function

function abc(getData) {
    console.log(getData);
}
abc(arrData[0]);
abc(arrData[1]);


//===============================================
// USING FOREACH

// forEach() Method  : it works for each elements in an array... but returns undefined

// case 1 ========================

var arrData = ["Apple", "Ball", "Cat", "Dog"];

function abc(getData, index) {
    console.log(getData)
    console.log(index)
}
arrData.forEach(abc)   /// uthake poore function ko abc ki jagah rakh diya


// case 2 =================== professional syntax of forEach
var arrData = ["Apple", "Ball", "Cat", "Dog"];

arrData.forEach(function abc(getData, index) {
    console.log(getData)
    console.log(index)
})

// by arrow method======================
var arrData = ["Apple", "Ball", "Cat", "Dog"];

arrData.forEach((getData, index) => {
    console.log(getData)
    console.log(index)
})


// In definition we write, it returns UNDEFINED, how?  =================================
var arrData = ["Apple", "Ball", "Cat", "Dog"];

const getResultData = arrData.forEach((getData) => {
    return getData
})
console.log(getResultData);


// Output: Undefined  // because the data is not returned from inside foreach loop and hence returning undefined

//========================================================================================

// map : it works for every elements of an array, it also takes call back function as an input, it also contains two parameter 1. array of elements 2. array index
// and it returns a new array


var arrData = ["Apple", "Ball", "Cat", "Dog"];

const getResultData = arrData.map((getData, index) => {
    console.log(getData, index);
})
//console.log(getResultData);


var getData2 = ["Apple", "Ball", "Cat", "Dog"];

const getResultData2 = getData2.map((getData, index) => {
    return getData
}
)
console.log(getResultData2);


// with template string

var getData2 = ["Apple", "Ball", "Cat", "Dog"];

const getResultData2 = getData2.map((getData, index) => {
    return `${getData}-Hello`
}
)
console.log("Getting new array with hello :", getResultData2);
console.log("Original Array : ", getData2)

*/