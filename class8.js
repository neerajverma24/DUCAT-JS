/*

var a = ["Apple", "Ball", "Cat", "Dog"];

console.log(a);

const getAppleData = a[0];
console.log(getAppleData);   // output : Apple

console.log(a[0]);  // we can print with this also..   output :  Apple

*/

/*
var a1 = ["Apple", "Ball", "Cat", "Dog"];
console.log("before update :", a1 );

a1[1] = "Banana";       // here we are replace the Ball with Banana which is at the index value 1
console.log("after update :", a1);   // 


//===========================================

// OBJECT

const objData = {
    studentName : "Neeraj",
    studentCourse : "JavaScript",
    studentEmail : "neeraj@gmail.com",
    studentMobile : 9711330353,

    "student Branch" : "CSE"  // this is in double quote....
}
// get data   WAY1
console.log(objData.studentName, objData.studentMobile);
console.log(objData.studentEmail);

// WAY2
console.log(objData['studentName']);

// way3 with student branch 
//console.log(objDat.student Branch); // this will give error

console.log(objData['studentName']); // this will show the result

// update
objData['studentName'] = "Naveen Verma";
console.log(objData);



//===============================

// another example 
const objData = {
    studentName : "Neeraj",
    studentCourse : "JavaScript",
    studentEmail : "neeraj@gmail.com",
    studentMobile : 9711330353,
    studentAddress : ["South Extension", "D27", 1234, "India"],
    "student Branch" : "CSE" 
}
const getAddress = objData.studentAddress;
console.log(getAddress);
console.log(getAddress[2]);

//==============

const objData2 = {
    studentName : "Neeraj",
    studentCourse : "JavaScript",
    studentEmail : "neeraj@gmail.com",
    studentMobile : 9711330353,
    
    "student Branch" : "CSE" ,
    studentAddress : function() {
        console.log('address');
        console.log(20);
    }
}

// direct print
//    objData2.studentAddress();   // by using this we can directly output the result....



 const getAddressData2 =objData2.studentAddress();
 console.log(getAddressData2);
 console.log(getAddressData2);

*/
