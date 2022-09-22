//Implement the map function to create a new array containing the results of calling a
// function for every single element of the array:
Array.prototype.myMap = function (callbackFunction) {
    const array = this;
    let newArray = [];
    // your code here
    for (let i = 0; i < array.length; i++) {
        newArray.push(multiplicator(array[i]))
    }
    return newArray
}

function multiplicator(element) {
    return 2 * element;
}

console.log([1, 2, 3].map(multiplicator)); // [2,4,6]
console.log([2, 4, 6].myMap(multiplicator));