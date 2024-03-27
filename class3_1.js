
// SWITCH ==============================
/*

switch ("Friday") {
    case "Monday":
        console.log("Today is Monday");
    case "Tuesday" :
        console.log('Today is Tuesday');
    case "Friday" :
        console.log('Today is Friday..') //result
    }
 // by using switch method we do not need to write 20-25 lines of code, we just write switch and it will automatically match the data..



//ONE LEVEL UP in Switch

// use of break;=========================

var checkDay = "Wednesday";  // now you can find any day..
switch (checkDay) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log('Today is Tuesday');
        break;
    case "Wednesday":
        console.log('Today is Wednesday');
        break;
    
        // it will print all the days belows wednesday, if we dont use break keyword...

        // so, here we can use break; word to make the condition true..

    case "Thursday":
        console.log('Today is Thursday');
        break;
    case "Friday":
        console.log('Today is Friday..');
        break;
    case "Saturday":
        console.log('Today is Saturday');
        break;
    case "Sunday":
        console.log('Today is Sunday');
        break;
}


// default  ===========
var checkDay = "MWF";
switch (checkDay) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log('Today is Tuesday');
        break;
    case "Wednesday":
        console.log('Today is Wednesday');
        break;
    case "Thursday":
        console.log('Today is Thursday');
        break;
    case "Friday":
        console.log('Today is Friday..');
        break;
    case "Saturday":
        console.log('Today is Saturday');
        break;
    case "Sunday":
        console.log('Today is Sunday');
        break;
    default:
        console.log("There is no match of your data");
        break;
}


// LOOPS ===============================================================

// example

1
2
3
4
5

if someone said add
0+1=1
1+2=3
3+3=6
6+4=10
10+5=15
then,

var sum = 0;
var sum = sum + 1;  // 0 + 1 = 1
var sum = sum + 2;  // 1 + 2 = 3
var sum = sum + 3;  // 3 + 3 = 6
var sum = sum + 4;  // 6 + 4 = 10
var sum = sum + 5; // 10 + 5 = 15
console.log(sum)  // then the result is 15... (checked in cosole)



// now using loops

// for loop  :- ka matlab ke liye ===============================

// syntax
for ( initialisation; Condition; increment/decrement) {
    // code to be executed...
}



// counting 1 to 10;  increment
for (var i = 1; i <= 10; i++) {
    // condition 1<=10
    // increment i++  : i+1 = 1+1 = 2, i=2 now and so on until 10....
    console.log(i);  // 1, 2 .... 10
}
console.log(i);  // result is 11, this is because to check the condition , it will show the output... 11 <=10 , ek baar 11 par jake wapas aata ki condition false ho gai hai...



//this example
 var sum = 0;
 var sum = sum + 1;  // 0 + 1 = 1

=============
var sum = 0;
for (var i = 1; i <= 5; i++) {
    var sum = sum + i;
    // console.log(sum);  // result is, 1, 3, 6, 10, 15
}
console.log(sum); // result is only 15...



// while loop matlab  'jab'  ===============

//syntax
while(yourCondition) {
    // code to be executed

    // increment/decrement
}

// case 1  :-   print 1 to 5 counting
var i = 1;
while (i <= 6) {
    console.log(i)  // this is goes to infinity... (hang the system)
}


// case 2 :-   print 1 to 5 counting

var i = 1;          // 1<=5  // 2<=5 // so on
while (i <= 6) {
    console.log(i)
    i++;  // 1+1 => 2 // 2+1=>3  so on...
}
// console.log(i)  // it will print till 6..



//example of adding the counting till 5..
var i = 1;
var sum = 0;
while (i <= 5) {
    sum = sum + i;  // 0+1=1 // 1+2=3 // 3+3=6 and so on....
    ++i;  //incrementing counter variable by one in each iteration
    //  console.log(sum);  // this will print all the summ // and after commenting this ,
}
console.log(sum); // it will return 15 only after commenting the line number 175..


// do-while loop ===========================================

// example 1 : false condition , result is 10 , because in do-while ek baar to condition chalegi hi chalegi...

var i = 10;
while (i <= 5) {
    console.log(i);
    i++;
}

do {
    console.log(i)  // result is 10 here
    i++
    console.log(i) // after increment result is 11, so idhar bhi condition false ho jati hai
} while (i <= 5)

// do-while me Ek baar condition execute hoti hi hoti hai..

// do-while kaha istemaal hoti hai, jaise hum ek e-commerce site bana rahe hai, lekin hum chahte hai ki wo bs home page par hi visit kar paye, or wo jaise hi kisi product par click kare tab sign in ka option aa jaye... kisi bhi page ko visit na kar paye jab tak wo login na kare..


// example 2 : in true condition
var i = 1;
do {
    //console.log(i);
    i++;
    console.log(i);
} while (i <= 5)  
// result start from 2, because humne print increment ke baad karwaya hai...


///==========================
// example by own

// counting by using for method
// for
for (i = 1; i <= 100; i++) {
    console.log(i)
}

var a = 1;
while (a <= 25) {

    console.log(a);
    a++;
}

var b = 1;
do {

    console.log(b);
    b++;
} while (b <= 5);

// i = starting number , condition to stop the loop and incrementing variable in each iteration.

*/