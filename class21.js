// parent ==============================
/*
class Parent {
    constructor() {
        console.log("Constructor is working..")
    }
    getBike() {
        console.log("getBike is working...")
    }

    getCar() {
        console.log("getCar is working...")
    }

}
// new Parent();  // if we only write this,  we get output : Constructor is working...

getParentData = new Parent();

getParentData.getBike();  // getBike is working...


// using "extends" keyword =====================================================

// parent and child class ===================

class Parent {
    constructor() {
        console.log("Parent Constructor is working..")
    }
    getBike() {
        console.log("getBike is working...")
    }

    getCar() {
        console.log("getCar is working...")
    }

}

class Child extends Parent {

}
new Child // output : Parent Constructor is working..

//====================================================================

class Parent {
    constructor() {
        console.log("Parent Constructor is working..")
    }
    getBike() {
        console.log("getBike is working...")  // getBike is working....
    }

    getCar() {
        console.log("getCar is working...")
    }

}

class Child extends Parent {

}

const getChildData = new Child();
getChildData.getBike(); 


//==============================================================================================
//using super keyword to connect child constructor with the parent constructors=======================================

class Parent {
    constructor(getBike, getBikeFuel, getCar, getCarFuel) {
        console.log("Parent Constructor is working..")

        console.log(getBike, getBikeFuel, getCar, getCarFuel)
    }
    getBike() {
        console.log("getBike is working...")  // getBike is working....
    }

    getCar() {
        console.log("getCar is working...")
    }

}

// when we use construtor in child class we use super keyword

class Child extends Parent {
    constructor(getBike, getBikeFuel, getCar, getCarFuel) {
        // console.log("Parent Constructor is working but at the top")

        super(getBike, getBikeFuel, getCar, getCarFuel);
        console.log("Child Constructor is working..")

        console.log("Get Child constructor Data : ", getBike, getBikeFuel, getCar, getCarFuel)
    }
}

const getChildData = new Child("Bike1 : ", "5 Ltr ,", "Car : ", "10Ltr");
getChildData.getBike();


// ===============================================================================

class Parent {
    constructor(getCar, getCarFuel) {
        console.log("Parent Constructor is working..")

        console.log("Parent Data : ", getCar, getCarFuel)

        this.getCar = getCar;
        this.getCarFuel = getCarFuel;
    }

    getCarFunc() {
        console.log("getCar is working...")

        console.log("Parents are getting : ", this.getCar, this.getCarFuel)
    }

}

class Child extends Parent {
    constructor(getBike, getBikeFuel, getCar, getCarFuel) {
       
        super(getCar, getCarFuel);
        console.log("Child Constructor is working..")

        //  console.log("Child is Getting : ", getBike, getBikeFuel)

        this.getBike = getBike;
        this.getBikeFuel = getBikeFuel;
    }

    getBikeFunc() {
        console.log("Bike Details : ", this.getBike, this.getBikeFuel)
    }

}

const getChildData = new Child("Bike1 : ", "5 Ltr", "Car : ", "10Ltr");

getChildData.getBike;

getChildData.getBikeFunc();

getChildData.getCarFunc();

*/