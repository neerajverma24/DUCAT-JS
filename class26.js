// async // await =================

/*


// fake API :  https://jsonplaceholder.typicode.com/users

async function fetchApi() {
    const getApiData = await fetch(`https://jsonplaceholder.typicode.com/users`);

    // console.log(getApiData);  // Data is in ReadableStream in body

    const getJsonData = await getApiData.json()

    // console.log(getJsonData);  // yaha par poora ka poora data as an array of object ke form me milega...   (Same data wahi hai jo API me tha..)

    // ye alag se hai comment lagane ke baad..

    getJsonData.map((items, index) => {
        // console.log(items)    // this will print whole array of object.

        console.log(items.name);   // if we use items then console items.name, this will print first array of object, then at the second name, then other array of object again name and so on....  (we can print names separately also..)
    })

    fetchApi();

// example 2 : by using destructuring method .... =========================================================

async function fetchApi() {
    const getApiData = await fetch(`https://jsonplaceholder.typicode.com/users`);

    // console.log(getApiData)

    const getJsonData = await getApiData.json()

    // console.log(getJsonData)
    /*
    const [getObj1, getObj2] = getJsonData;

    console.log(getObj1);           // output : poora ka poora object print kar dega...

    console.log(getObj2);           // same as above


    // name destructing =========

    const [{ id, name, username, email, address }, { id: id2, name: name2, username: username2, email: email2 }] = getJsonData;


    console.log(id, name, username, email, address.city
    )
    console.log(id2, name2, username2, email2)  // same here we can find city also... by changing the name address2 not with city2
}
fetchApi();



// example 3 =================================================================================

async function getFetchApi() {
    const getApiData = await fetch(`https://jsonplaceholder.typicode.com/users`);

    // console.log(getApiData)

    return getApiData.json()
    // console.log(getJsonData)



}
// console.log(getFetchApi())

const getResultData = getFetchApi().then((getitems) => {
    // console.log(getitems)  // poora ka poora array of object return kar dega...

    return getitems
})
// console.group(getResultData);




const getDataResult = getResultData.then((getData) => {
    // console.log(getData)    // poora ka poora array of object return kar dega...

    // return getData

    // DESTRUCTURING ============

    const [{ name, username, email }, , item2, { name: name2, username: username2, email: email2 }] = getData

    console.log(name, username, email);  // output : Leanne Graham Bret Sincere@april.biz

    console.log(item2)  // output : {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}


    // name destructuring...
    console.log(name2);  //Patricia Lebsack
    console.log(username2, email2)  // Karianne Julianne.OConner@kory.org

})

console.log(getDataResult);

 */



