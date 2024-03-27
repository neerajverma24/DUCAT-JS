// parent class ============
/*
class Abc {
    constructor() {
        console.log('constructor is working..')
    }

    methodA() {
        console.log('Method is Working..')
    }
}
// new Abc();

const getAbcData = new Abc();
getAbcData.methodA();


// parent and child class =========================

class Data {
    constructor() {
        console.log('child extends working..')
    }

    Student1() {
        console.log();
    }

    Student2() {
        console.log();
    }
}

class child extends Data {

}

new child();


// child extend parent example ==============================

class User {
    constructor() {
        console.log('Parent is working...')
    }

    User1() {
        console.log('User1 is Working')
    }

    User2() {
        console.log('User2 is Working')

    }
}

class Child1 extends User {

}

const childToParent = new Child1()
childToParent.User1();
childToParent.User2();




/*==================================================================================================================================

// child extends parent with super keyword to connect both class

class Parent {
    constructor(getCar, getCarFuel) {
        console.log('Parent constructor is working..');

        this.getCar = getCar;
        this.getCarFuel = getCarFuel;
    }

    getCarFunc() {
        console.log('Car is', this.getCar, 'having fuel', this.getCarFuel);

    }
}

class Child extends Parent {
    constructor(getBike, getBikeFuel, getCar, getCarFuel) {
        super(getCar, getCarFuel);
        // this will call the parent's constructor


        console.log("Child Constructor is working..")

        // console.log("The Bike Data is : ", getBike, getBikeFuel);

        this.getBike = getBike;
        this.getBikeFuel = getBikeFuel;

    }

    getBikeFunc() {
        console.log("Bike Details : ", this.getBike, this.getBikeFuel);
    }
}

const getChildData = new Child("Bullet", "10 Ltr", "Swift", "20 Ltr");

getChildData.getBike;  // this is the only data we have call, if you want other you should call...

getChildData.getBikeFunc();

getChildData.getCarFunc();

*/




// the above example doing by own=============

class Parent {
    constructor(getName1, getSurname1, getName2, getSurname2) {
        console.log('Parent Constructor is working..')

        this.getName1 = getName1;
        this.getSurname1 = getSurname1;
        this.getName2 = getName2;
        this.getSurname2 = getSurname2;
    }

    student1() {
        console.log("student1 is working...");

        console.log("Here is your student1 : ", this.getName1, this.getSurname1);
    }

    student2() {
        console.log("stundent2 is working...");

        console.log("Here is your student2 : ", this.getName2, this.getSurname2);

    }
}

class Child extends Parent {
    constructor(getName1, getSurname1, getName2, getSurname2) {

        console.log("Child constructor is working...")
        super(getName1, getSurname1, getName2, getSurname2);

        console.log("The Full Name of student1 is : ", getName1, getSurname1);

        this.getName1 = getName1;
        this.getSurname1 = getSurname1;
    }
}

const Names = new Child("Neeraj", "Kumar", "Rahul", "Nagar");
Names.getName1;
Names.getSurname1;
Names.student1();
Names.student2();