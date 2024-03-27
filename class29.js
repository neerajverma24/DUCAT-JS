/*
// curring function  ======================================================================================================

function calculateVolume(length) {
    return function (width) {
        return function (height) {
            return length * width * height
        }
    }
}
// console.log("Volume is : ", calculateVolume(2)(4)(5));

const getResult = calculateVolume(2)(4)(5);
console.log(getResult);


// example 2 =======================

function getValue(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log("Sum is :", getValue(1)(2)(3));
console.log(getValue()()())



// link : https://jsonplaceholder.typicode.com/todos/


// workimg with fake api

const Api = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    }
]




async function fetchApi() {
    const getApiData = await fetch(`https://jsonplaceholder.typicode.com/todos`);

    // console.log(getApiData);

    const getJsonData = await getApiData.json();
    // console.log(getJsonData);

    /*
    getJsonData.map((items, index) => {
        // console.log(items)
        console.log(items.title)
    })



}
fetchApi();

*/