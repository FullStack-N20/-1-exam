function sortToZero(arr) {
    let result = []
    for(let i of arr) {
        if (i == 0){
            continue
        } else {
            result.push(i)
        }
    }
    for(let i of arr) {
        if (i == 0) {
            result.push(i)
        }
    }

    return result
}

console.log(sortToZero([1,0,3,0,12,0]));
