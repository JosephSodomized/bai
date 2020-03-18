function isCar(car1, car2, car3) {
    var arr = [car1, car2, car3];
    var trues = arr.filter(filtr => filtr === true);
    var falses = arr.filter(filtr => filtr === false);
    return trues.length == arr.length || falses.length == arr.length ? true : false;
}



console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));

