const newArray = ["eslam", "mohamed", "hussin", "aly", "hassan", "eslam", "mohamed", "aly"];

// not a easy way to remove duplication

/* const removeDuplication = (arr) => {
    const result1Way = [] // new empty array
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]; /remove duplication
        if(!result1Way.includes(element)) result1Way.push(element) // then add element
    }
    return result1Way
}

console.log(removeDuplication(newArray)); */


// simple way to remove duplication

const duplication2 = (arr2) => {
    const result = [] // new empty array for backing result
    arr2.forEach(newArray => { // forEach checking array if there duplication
        if(!result.includes(newArray)) result.push(newArray); // remove duplication
    });
    return result
}

console.log(duplication2(newArray));