function distinct(arr) {
    //setup new array
    let result = [];
    //setup for...of loop
    for(let num of arr) {
        if(!result.includes(num)) {
            result.push(num);
        }
    }
    //return new array
    return result;
}