const reverse = function (arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function (arr) {
    let arrSorted = arr.sort();
    return arrSorted;
}

const even = function (arr) {
    var arrEven = [];
    arr.forEach((i) => {
        i % 2 == 0 ? arrEven.push(i) : -1;
    })
    return arrEven;
}

numbers = [8, 3, 2, 1, 5, 4, 6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(sort(numbers));
console.log(numbers.sort(function (a, b) { return a - b })) //alternatywa szybsza
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
