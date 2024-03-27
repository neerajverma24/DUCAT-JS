// https://jsonplaceholder.typicode.com/us


async function fetchApi() {
    const getData = await fetch(`https://jsonplaceholder.typicode.com/users`);

    // console.log(getData);

    const getJsonData = await getData.json();

    // console.log(getJsonData);

    const [getObj1, getObj2] = getJsonData;

    // console.log(getObj1); // data of object 1

    const [{ id, name, address }, { id: id2, name: name2, address: address2 }] = getJsonData;  // after colons(:), we are using the name destructing method..

    // console.log(address.street);  

    console.log(id, name);
    console.log(address.street)
}
fetchApi();