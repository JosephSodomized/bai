names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        var arr = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i][0] == letter) {
                arr.push(names[i])
            }
        }
        return arr;
    }

    sort() {
        return this.names.sort(); // names (array) in alphabetical order 
    }

    get() {
        return names;// names (array) in natural order
    }

    getFirst(n) {
        var sorted = this.names.sort()// get first 'n' names (array) 
        var newArr = []
        for (let i = 0; i < n; i++) {
            newArr.push(sorted[i])
        }
        return newArr;
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.get().sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
// console.log(students.sort().getFirst(4));
console.log(students.getFirst(4));
console.log(students.startWith('M').getFirst(2));
console.log(students.get());



