// Hoisting ==========================================================================

/*  it will work in this expression ( FUNCTION DECLARATION..)
abc()
function abc() {
    console.log("Hello Abc")
}


// hoisting in function expression
xyz();  
var xyz = function(){
    console.log("Hello xyz")
}
// hoisting will not work in this condition.. it will give error..



// hoisting in arrow function
def();
var def = () => {
    console.log("Hello def")
}
// hoisting will not work in this condition.. it will give error..


//========================

// lexical scope ===============================================================

// case1
function  teacher() {
    var a = "javaScript"
    function student() {
        console.log(a)
    }
    student()
}
teacher()


// case 2
function  teacher() {
    var a = "javaScript";
    function student() {
        var a = "React js"  // it will print this beacause this is under its scope..
        console.log(a)
    }
    student()
}
teacher()


// case 3

// check the result by putting var a in comment 
// priority is SCOPE..
var a = "Node Js"
function  teacher() {
    //var a = "javaScript";
    function student() {
       var a = "React js"  // it will print this beacause this is under its scope..
        console.log(a)
    }
    student()
}
teacher()



//================= with arrow function
var a = "Node Js"
var teacher = () => {
    //var a = "javaScript";
    function student() {
       var a = "React js"  // it will print this beacause this is under its scope..
        console.log(a)
    }
    student()
}
teacher()


//=========== with FUNCTION EXPRESSION
var a = "Node Js"
var teacher = function() {
    //var a = "javaScript";
    function student() {
       var a = "React js"  // it will print this beacause this is under its scope..
        console.log(a)
    }
    student()
}



// example of laxical scope with more than two scope functions..
var a = "Node Js"
var teacher = function () {
    var a = "javaScript";
    function student() {
        var a = "React js";
        function abc2() {
            console.log(a)
            console.log("abc2 function is working...")
        }
        abc2()
        console.log(a);
    }
    student()
}
teacher()  // it will give 3 result at line numbers
// results are :-
// 1. Result is at 104 line "React js"
// 2. Result is  at 105 line "abc2 function is working.."
// 3. Result is at 108 line "React Js" again..

*/