/*const objData = {
    studentName : "Neeraj Verma",
    studentEmail: "neeraj@gmail.com",
    studentCourse :"javaScript",
    studentMobile : 9711330353
}*/

//=======
// array of object
/*
const arrData = [{
    studentName : "Neeraj Verma",
    studentEmail: "neeraj@gmail.com",
    studentCourse :"javaScript" ,
    studentMobile : 9711330353
}, {
    studentName : "Naveen Verma",
    studentEmail: "naveen@gmail.com",
    studentCourse :"javaScript" ,
    studentMobile : 9711330353
},{
    studentName : "Harkesh Verma",
    studentEmail: "harkesh@gmail.com",
    studentCourse :"javaScript" ,
    studentMobile : 9711330353
}, {
    studentName : "Raj Verma",
    studentEmail: "raj@gmail.com",
    studentCourse :"javaScript" ,
    studentMobile : 9711330353
}];

//console.log(arrData);

// const [item1, item2, item3, item4] = arrData;

//console.log(item1);

//console.log(item1,item3); // this will print the called items

//this is the main part for calling the different identities from the items like from item1 to take name, and from item3 is to take email

const [item1, item2, item3, item4] = arrData;
console.log(item1.studentName, item1.studentMobile);
console.log(item3.studentEmail);

*/

//======================================================

// rename in object destruction
/*
const obj = {
    studentName : "Harkesh Verma",
    studentEmail: "harkesh@gmail.com",
    studentCourse :"React Js" ,
    studentMobile : 9711330353
} */

/*
//==========
// in this part : (colon) change the object data name]

const arrData = [{
    studentName : "Neeraj Verma",
    studentEmail: "neeraj@gmail.com",
    studentCourse :"javaScript" ,
    studentMobile : 9711330353
}, {
    studentName : "Naveen Verma",
    studentEmail: "naveen@gmail.com",
    studentCourse :"javaScript" ,
    studentMobile : 9711330353
},{
    studentName : "Harkesh Verma",
    studentEmail: "harkesh@gmail.com",
    studentCourse :"javaScript" ,
    studentMobile : 9711330353
}, {
    studentName : "Raj Verma",
    studentEmail: "raj@gmail.com",
    studentCourse :"javaScript" ,
    studentMobile : 9711330353
}];

console.log(arrData);


// here we are changing the names of keyvalues like studentName changes to name only.. because above we have so many keyvalues with the studentName, we want a data of specific student so we rename it...


const [{studentName : name, studentMobile}, {studentName, studentMobile : mobile}, item3, item4] = arrData;   // use always const instead var....

console.log(name, studentMobile, studentName, mobile);
*/

//============


