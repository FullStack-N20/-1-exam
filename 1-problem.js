function permute(numbers) {
    const result = [];
    let original = [...numbers];
    let count = 0;

    result.push([...numbers]);

    while (true) {
        let next = nextPermutation(numbers);
        result.push([...numbers]);

        if (arraysAreEqual(numbers, original)) {
            count++;
            if (count === 2) break;
        }

        if (!next) break; 
    }

    return result
}

function nextPermutation(arr) {
       
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    if (i < 0) {
        arr.reverse();
        return false; 
    }

    
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

   
    [arr[i], arr[j]] = [arr[j], arr[i]];

   
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return true;
}


function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(permute([1,2,3,5,6]))