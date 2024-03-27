/*
// find method ===============================

// find osearch only first item..(if any first is match , it will stop checking other) if we want all the data having length 3 then use filter method..

var a = ["Apple", "Ball", "Cat", "Dog"];

const getFindData = a.find((item, index) => {
    // console.log(item);
    // console.log(index);
    // return item === 'Dog';
    return item.length === 3
})
console.log(getFindData);  // output : cat , it is the first item having the length 3


// sort =========================================
// example 1 : 
var b = [1, 2, 3, 6, 8, 4, 9, 5,7, 0]
console.log(b);
const getSortData = b.sort();
console.log(getSortData);


//example 2 : 
var b = [1, 2, 3, 6, 8, 4, 9, 5, 7, 0, 14, 11, 38, 23, 31]

console.log(b);
const getSortData = b.sort();
console.log(getSortData);  //output is  [0, 1, 11, 14, 2, 23, 3, 31, 38, 4, 5, 6, 7, 8, 9]

// this is based on ascii table.. it looks numbers as a string.. ( like a dictionary )


// example 3 : 
// ascending order of this
var c = [1, 2, 3, 6, 8, 4, 9, 5, 7, 0, 14, 11, 38, 23, 31]
const getAscOrder = c.sort((a, b) => {
    //console.log(b)
    return a - b;
})
console.log(getAscOrder);  // result in ascending order

// descending order of this
var d = [1, 2, 3, 6, 8, 4, 9, 5, 7, 0, 14, 11, 38, 23, 31]
const getDscOrder = d.sort((a, b) => {
    //console.log(b)
    return b - a;
})
console.log(getDscOrder); // result descending order


// example 4 : -

// using array of object to extract Names of students by using forEach Method...

const arrData = [{
    studentName: "Neeraj Verma",
    studentEmail: "neeraj@gmail.com",
    studentCourse: "javaScript",
    studentMobile: 9711330353
}, {
    studentName: "Naveen Verma",
    studentEmail: "naveen@gmail.com",
    studentCourse: "javaScript",
    studentMobile: 9711330353
}, {
    studentName: "Harkesh Verma",
    studentEmail: "harkesh@gmail.com",
    studentCourse: "javaScript",
    studentMobile: 9711330353
}, {
    studentName: "Raj Verma",
    studentEmail: "raj@gmail.com",
    studentCourse: "javaScript",
    studentMobile: 9711330353
}];

// by using forEach method..
const getNames = arrData.forEach((items, index) => {
    console.log(items.studentName)
});

// by using map...
const getMapResult = arrData.map((data, index) => {
    return data.studentEmail
})
console.log(getMapResult);

*/
