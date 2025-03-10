function twoIndex(arr, target) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target && i != j) {
                result.push(i, j)
            }
        }
    }

    return result
}

console.log(twoIndex([3,2,3], 6));
