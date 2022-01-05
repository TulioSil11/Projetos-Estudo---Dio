function somaNumeros(arr) {
    return arr.reduce(function(prev, current){
        return prev + current;
    })
}

const nums = [1,2,40,41248,5441,5244,21185,21874,2485474,2484,346532];

console.log(somaNumeros(nums));