//Create a function which receives as a parameter the object 
//corresponding to the shopping cart and returns its total value, as in the example below:
const blackFridayCart = {
    phone: "350",
    console: "250",
    tv: "450",
    headPhones: "10.60",
    watch: "20.34",
    bag: "22.36"
};

function getCartValue(array) {
    var sum = 0;
    const keys = Object.keys(array);

    keys.forEach(element => {
        sum += parseFloat(array[element])
    });

    return sum;
};

console.log(getCartValue(blackFridayCart));