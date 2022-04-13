function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item %2 === 0;
}

const nums = [12,218,24154,2121,211,2454,62450,524541,23152163424,212125,12245,145];

console.log(filtraPares(nums));