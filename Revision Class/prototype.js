// prototype ====

/*  case 1 =================
var user = {
    getName: function () {
        console.log("getName is working...")
    },

    getCourse: function () {
        console.log("getCourse is course..")
    }
}

const student = {
    name: "Neeraj",
    course: "JavaScript"
}

const teacher = {
    name: "Vivek",
    course: "MERN Stack"
}

console.log("Student Info is Working..", student);

student.__proto__ = user;

*/


/*
// case 2 =====================

var user = {
    getName: function () {
        console.log("getName is working...", this.name);
    },

    getCourse: function () {
        console.log("getCourse is course..", this.course);
    }
}

const student = {
    name: "Neeraj",
    course: "JavaScript"
}

const teacher = {
    name: "Vivek",
    course: "MERN Stack"
}

// console.log("Student Info is Working..", student);  (Same result as above..)


// this case is for a specific object (example here we are using getName() )
student.__proto__ = user;

const getStudentDetails = student.getName();

console.log("student Details : ", getStudentDetails);  // getName is working... (but with the undefined...)

*/

/*
// case 3 ================================================

// by using call , aplly and bind method...

var user = {
    getName: function () {
        console.log("getName is working...", this.name);
    },

    getCourse: function () {
        console.log("getCourse is course..", this.getCourse);
    }
}

const student = {
    name: "Neeraj",
    course: "JavaScript"
}

const teacher = {
    name: "Vivek",
    course: "MERN Stack"
}

// for a specific object

student.__proto__ = user;
teacher.__proto__ = user;

const getStudentDetails = student.getName.bind(student);

console.log("student getName with Bind :", getStudentDetails());

const getTeacherDetails = teacher.getName.bind(teacher);

console.log("teacher getName  with Bind :", getTeacherDetails());


*/



// case 4 ==========================================================

var user = {
    getName: function () {
        console.log("getName is working...", this.name);
    },

    getCourse: function () {
        console.log("getCourse is course..", this.getCourse);
    }
}

const student = {
    name: "Neeraj",
    course: "JavaScript"
}

const teacher = {
    name: "Vivek",
    course: "MERN Stack"
}

Object.prototype.anyPrototype = "JavaScript";

// console.log("Student Course : ", student);  // output : full prototype as above...

console.log("Student course by Prototype : ", student.anyPrototype); // output  : JavaScript..

