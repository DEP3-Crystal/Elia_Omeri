//Implement the filter function to create a new array containing the elements which pass the test implemented 
//by the provided function:
Array.prototype.myFilter = function (callbackFunction) {
    const array = this;
    let newArray = [];
    // your code here
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            newArray.push(array[i]);
        }
    }
    return newArray
}

function biggerThanFive(element) {
    return element > 4;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(biggerThanFive)); // [5,6,7,8,9]
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].myFilter(biggerThanFive)); // [5,6,7,8,9]