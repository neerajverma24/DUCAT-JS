// getter and setter

/*
// getter =======================================
class Parent {
    constructor(getCar, getCarFuel) {
        console.log("Parent Constructor is working..")
    }

    bikeFunc() {
        console.log("Bike is working")
    }

    carFunc() {
        console.log("Car is working")

    }
}
new Parent()

const getParentData = new Parent();
console.log(getParentData.bikeFunc());





(WATCH LECTURE)




// getter method ==============================================

class Parent {
    constructor(getBike, getCar) {
        console.log("Parent Constructor is working..")
        this.getBike = getBike;
        this.getCar = getCar;
    }

    get getDataFunc() {
        console.log("getDataFunc is working", this.getBike, this.getCar)
    }

    setData(getBike, getCar) {
        this.getBike = getBike;
        this.getCar = getCar;
    }
}

const getParentData = new Parent("Bike", "Car");
console.log(getParentData.getDataFunc);
console.log(getParentData.getDataFunc);



// Setter ========================== 

class Parent {
    constructor(getBike, getCar) {
        console.log("Parent Constructor is working..")
    }

    get getDataFunc() {
        console.log("getDataFunc is working", this.getBike, this.getCar)
    }

    setData(getBike, getCar) {
        this.getBike = getBike;
        this.getCar = getCar;
    }
}

const getParentData = new Parent("Bike", "Car");
// console.log(getParentData.getBike);
// console.log(getParentData.getCar);

getParentData.setData("New Bike", "New Car")
console.log(getParentData.getBike);  // output : New Bike
console.log(getParentData.getCar);  // output : New Car

*/

/*
// Way 2 =================================================================
// Here we are using split method to split the data in setter method ============

class Parent {
    constructor(getBike, getCar) {
        console.log("Parent Constructor is working..")
    }

    get getDataFunc() {
        console.log("getDataFunc is working", this.getBike, this.getCar)
    }

    set getDataFunc(getDataItems) {
        const [getBike, getCar] = getDataItems.split(" ");
        this.getBike = getBike;
        this.getCar = getCar;
    }
}

const getParentData = new Parent("Bike", "Car");

// getParentData.getDataFunc("NewBike NewCar")      // syntax error getParentData is not a function...

getParentData.getDataFunc = "NewBike NewCar"
console.log(getParentData.getBike); // output : NewBike
console.log(getParentData.getCar);  // output : NewCar

*/






