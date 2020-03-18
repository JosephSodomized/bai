fillArray = (min,max) => {
    var arr = []
    this.min = Math.ceil(min);
    this.max = Math.floor(max);
    for(let i =0;i<10;i++){
        arr.push(Math.floor((Math.random()*(max-min)) + min))
    }
    return arr;
}

console.log(fillArray(5,21));