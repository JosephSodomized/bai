class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getName() {
        return this.name + ' ' + this.surname.toUpperCase();
    }

    getInicials() {
        return this.name[0].toUpperCase() + '.' + this.surname[0].toUpperCase() + '.';
    }
}

var jn = new Person("Jan", "Nowak");
var dm = new Person("Dominik", "Malcharczyk");
console.log(jn.getName());
console.log(jn.getInicials());
console.log(dm.getName());
console.log(dm.getInicials());