// by Filter Method ==============================
/*
const arrData = [{
    productName: "Lenovo Laptop",
    productBrand: "Lenovo",
    productDescription: "Good",
    productPrice: 4999

}, {
    productName: "HP Laptop",
    productBrand: "HP",
    productDescription: "Very Good",
    productPrice: 5999
}, {
    productName: "Nokia Mobile",
    productBrand: "Nokia",
    productDescription: "Very Very Good",
    productPrice: 999
}, {
    productName: "Redmi Laptop",
    productBrand: "Redmi",
    productDescription: "Excellent",
    productPrice: 7999
}, {
    productName: "Samsung Laptop",
    productBrand: "Samsung",
    productDescription: "Great Product",
    productPrice: 8999
}
];

/* wrong method ========
const getAbove999 = arrData.filter((productAbove, index) => {
    console.log(getAbove999.productName);
    return productPrice > 999

}) //

const getFilteredData = arrData.filter((items, index, arr) => {
    //console.log(arr);
    // console.log(items); // result array of object

    return items.productPrice > 4999
})
console.log(getFilteredData);  // result object of HP, REDMI, SAMSUNG...


// by Reduced Method ==============================================================================

const arrData1 = [{
    productName: "Lenovo Laptop",
    productBrand: "Lenovo",
    productDescription: "Good",
    productPrice: 4999

}, {
    productName: "HP Laptop",
    productBrand: "HP",
    productDescription: "Very Good",
    productPrice: 5999
}, {
    productName: "Nokia Mobile",
    productBrand: "Nokia",
    productDescription: "Very Very Good",
    productPrice: 999
}, {
    productName: "Redmi Laptop",
    productBrand: "Redmi",
    productDescription: "Excellent",
    productPrice: 7999
}, {
    productName: "Samsung Laptop",
    productBrand: "Samsung",
    productDescription: "Great Product",
    productPrice: 8999
}
];

// way 1 : -  // may be write or wrong
const totalPrice = arrData1.reduce((acc, crrValue) => {
    // console.log(acc);  // result only starting value
    // console.log(crrValue);  // result all the above data
    return acc.productPrice = 999 + 4999 + 8999 + 7999 + 4999;

})
console.log("Total price of the products are : ", totalPrice);


// way 2 : 
const getReducedData = arrData1.reduce((acc, crrValue) => {
    // console.log(acc);  // result only starting value
    // console.log(crrValue.productPrice);  // result all the above data
    return acc + crrValue.productPrice

}, 0)  // zero is used to initialise the term..
console.log("Total price of the products are : ", getReducedData);


//  by Sort Method ==============================================================================

const arrData3 = [{
    productName: "Lenovo Laptop",
    productBrand: "Lenovo",
    productDescription: "Good",
    productPrice: 4999

}, {
    productName: "HP Laptop",
    productBrand: "HP",
    productDescription: "Very Good",
    productPrice: 5999
}, {
    productName: "Nokia Mobile",
    productBrand: "Nokia",
    productDescription: "Very Very Good",
    productPrice: 999
}, {
    productName: "Redmi Laptop",
    productBrand: "Redmi",
    productDescription: "Excellent",
    productPrice: 7999
}, {
    productName: "Samsung Laptop",
    productBrand: "Samsung",
    productDescription: "Great Product",
    productPrice: 8999
}
];

const getSortedData = arrData3.sort((a, b) => {
   // return a.productPrice - b.productPrice    // this is for ascending order

    return b.productPrice - a.productPrice    // this is for ascending order
})
console.log(getSortedData);

//===========================================
*/ 