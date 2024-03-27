// topic :  Prototype ==========================================================

/*
// checking prototype ======
const objData = {
    name: "Neeraj"
}
console.log(objData)     // output : {name: 'Neeraj'}   name: "Neeraj"[[Prototype]]: Object

// ========================================

var userDetails = {
    getName: function () {
        console.log("getName is working...")
    },

    getCourse: function () {
        console.log("getCourse is working...")
    }
}

const studentInfo = {
    name: "Titus",
    course: "javaScript"
}

const teacherInfo = {
    name: "Vivek",
    course: "MERN Full Stack"
}

console.log("studentInfo before adding prototype : ", studentInfo)     // output : Before adding prototype {name: 'Titus', course: 'javaScript'}

// adding prototype for a specific object======

studentInfo.__proto__ = userDetails;

// output : studentInfo before adding prototype :
    
//  { name: 'Titus', course: 'javaScript' }
     course: "javaScript"
     name:"Titus"
     [[Prototype]]:Object
     getCourse  : ƒ()
     getName: ƒ()
     [[Prototype]]:Object   //


// one level up ============== (practical use)  =====================================================

var userDetails = {
    getName: function () {
        console.log("getName is working...", this.name)
    },

    getCourse: function () {
        console.log("getCourse is working...", this.course)
    }
}

const studentInfo = {
    name: "Titus",
    course: "javaScript"
}

const teacherInfo = {
    name: "Vivek",
    course: "MERN Full Stack"
}

// console.log("studentInfo before adding prototype : ", studentInfo)

// for a specific object

studentInfo.__proto__ = userDetails;


const getStudentDetails = studentInfo.getName();
console.log(getStudentDetails);  // output : getName is working... Titus



// one level up=============================================

// way 2 :  by using call, apply, bind methods...

var userDetails = {
    getName: function () {
        console.log("getName is working...", this.name)
    },

    getCourse: function () {
        console.log("getCourse is working...", this.course)
    }
}

const studentInfo = {
    name: "Titus",
    course: "javaScript"
}

const teacherInfo = {
    name: "Vivek",
    course: "MERN Full Stack"
}

// console.log("studentInfo before adding prototype : ", studentInfo)

// for a specific object

studentInfo.__proto__ = userDetails;


const getStudentDetails = studentInfo.getName.bind(studentInfo);
console.log(getStudentDetails());  // output : getName is working... Titus

// console.log(teacherInfo)  // to check teacher info...



// way 3==========

// for a common object=========================================

// Object ============================================

var userDetails = {
    getName: function () {
        console.log("getName is working...", this.name)
    },

    getCourse: function () {
        console.log("getCourse is working...", this.course)
    }
}

const studentInfo = {
    name: "Neeraj",
    course: "javaScript"
}

const teacherInfo = {
    name: "Vivek",
    course: "MERN Full Stack"
}
Object.prototype.myPrototype = "Neeraj";

console.log("Student Info : ", studentInfo);

console.log(studentInfo.myPrototype)

*/