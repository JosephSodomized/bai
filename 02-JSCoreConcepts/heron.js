// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
let a = () => {
    let p = 1 / 2 * (b + c + h);
    let pole = Math.sqrt(p * ((p - b) * (p - c) * (p - h)));
    return pole;
};

let txt = `Pole trókąta o bokach ${b},${c} oraz ${h} wynosi ${a()}`

console.log(txt);