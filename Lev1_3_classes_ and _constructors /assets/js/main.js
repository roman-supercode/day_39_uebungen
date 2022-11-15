const submitButton = document.getElementById("button");
const result = document.getElementById("result");
// console.log(checkBox);


class Person {
    constructor(name, age, checked) {
        this.name = name;
        this.age = age;
        this.checked = checked;

    }
    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    write() {
        let li = document.createElement("li");
        if (!this.checked) {
            li.style.color = "red";
        }
        li.textContent = `${this.name}, ${this.age} Years old.`;
        result.appendChild(li);
    }
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const checkBox = document.getElementById("examCheck").checked;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";

    let persons = new Person(name, age, checkBox);
    persons.write();

});
