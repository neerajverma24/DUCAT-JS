class Parent {
    constructor(getName1, getAge1, getName2, getAge2) {
        console.log("Parent Class is working...")

        this.getName1 = getName1;
        this.getAge1 = getAge1;
        this.getName2 = getName2;
        this.getAge2 = getAge2;

    }

    studentA() {
        console.log("studentA is working...");
        console.log(`The name studentA is ${this.getName1} and his  age is ${this.getAge1}`)
    }

    studentB() {
        console.log("studentB is working...")
        console.log(`The name studentA is ${this.getName2} and his  age is ${this.getAge2}`)

    }
}
// const parentData = new Parent();
// parentData.studentA();
// parentData.studentB();


class Child extends Parent {
    constructor(getName1, getAge1, getName2, getAge2) {
        super(getName1, getAge1, getName2, getAge2);
        console.log("Child Class is working...")

        this.getName1 = getName1;
        this.getAge1 = getAge1;
        this.getName2 = getName2;
        this.getAge2 = getAge2;


    }
}

const childData = new Child("Neeraj", "24", "Rahul", "24");
childData.studentA();
childData.studentB();