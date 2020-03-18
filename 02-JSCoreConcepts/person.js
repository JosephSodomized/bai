class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    giveName(){
        return name+' '+surname.toUpperCase();
    }
}

var jack = new Person("Dominik", "Malcharczyk");
console.log(jack.giveName());