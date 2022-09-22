//Implement the reduce method that executes a reducer function (that you provide) on each element of the array, 
//resulting in a single output value:
Array.prototype.myReduce = function (callbackFunction, initialVal) {
    const array = this;
    let accumulator = (initialVal === undefined) ? undefined : initialVal;

    let newArray = [];
    // your code here
    for (let i = 0; i < array.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callbackFunction(accumulator, this[i], i, this);
        }
        else {
            accumulator = this[i];
        }
    }
    return accumulator
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log([1, 2, 3, 4].reduce(reducer)); // 10
console.log([1, 2, 3, 4].myReduce(reducer)); // 10