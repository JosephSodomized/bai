countField = (a, b, h) => {
    let pole = (1 / 2 * (a + b)) * h;
    return "Pole trapezu: " + pole;
}

console.log(countField(1, 2, 3));