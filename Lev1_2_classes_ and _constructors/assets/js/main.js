class Person {
    constructor(name, age) { // setz ballType eine default Eigenschaft
        this.name = name;
        this.age = age;

    }
    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const person1 = new Person("Roman", 29);

// Ausgabe in der Konsole
person1.info();
