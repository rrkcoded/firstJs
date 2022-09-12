function getThis() {
    console.log(this)
}
getThis();
window.getThis();
console.log(window.getThis);
console.clear()

const prod1 = {
    name: 'iPhone',
    getName() {
        console.log(this.name)
    },
    price: 1200,
    discount: 10,
    getPrice: function () {
        console.log(this);
    },
    info: {
        information: ["2.4 ghz"],
        getInfo: function () {
            console.log(this);
        }
    }
};

prod1.getPrice();
prod1.info.getInfo();




function getPrice() {
    console.log(this.price)
}
const prod2 = {
    name: "Phone",
    price: 50,
    getPrice,
};
prod2.getPrice();
prod1.getName();


let str = 'Hello world!';
const reverseStr = str
    .split('') // ['H', 'e'...]
    .reverse() // ['d', 'l'...]
    .join(""); // 'dlrow olleH'
console.log(reverseStr)

prod3 = {
    name: 'ARM',
    price: 200,
    getPrice
};
