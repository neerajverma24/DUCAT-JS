//Function

/*
// function declaration... Or named function
function abc() {
console.log("Hello Abc..")
}
abc();

// function expression
def = function () {
    console.log("Hello def..")
    }
    def();
// jis function ka naam nahi hota usko anonymous function kehte hai..


// arrow function                 
         // => is called  fiat..
const xyz = () => {          
    console.log("Hello xyz!...")
}
xyz();

//===========================
// argument and parameters

// function declaration with argument and parameters


function abc(d,e) {
    // d and e are parameters...
    console.log("Hello Abc..")
    console.log(d, e)
    console.log(d + e)
    }
abc(2, 5);  // 2 is an argument

 
// similarly with function expression


// arrow function with arguments and paramteres

const x = (d,e) => {
    // d and e are parameters...
    console.log("Arrow function with argument and parameter..")
    console.log(d, e)
    console.log(d + e)
    }
x(2, 5);  // 2, 5 are arguments


//=========
//Practice by own...
function myfun() {
    console.log("Hello ab")
}
myfun();

// function with expression

mno = function abc() {
    console.log("Hello de")
}
mno();

// function with arrow function
const fun = () => {
    console.log("Hello Function..")
}
fun();
//=========


// function returning function
function xyz() {
    console.log("Hello xyz...")

    function abc() {
        console.log("Hello abc function")
    }
    return abc;
}
// console.log(xyz()()); (way1)

const getXyz = xyz();
console.log(getXyz()); // (same as way1)

//===============
function Abc() {
    console.log("Hello xyz...")

    function efg() {
        console.log("Hello abc function")
        return "Hello Students"
    }

    return efg;
}
// console.log(xyz()()); (way1)

const getAbc = Abc();
console.log(getAbc()); // (same as way1)


//=======================
var a = "javaScript";
const b = "React"
let c = "Nord"
*/


