console.log(1 /0 );
console.log(102 * "fdfs");
console.log("Hello");
console.log('Hello');
console.log(true, false);
console.log(null);
console.log(undefined);
console.table({name: 'Andrey', age: '40'});
console.log([1, 2, 3, 4, 5, 6]);

// ПЕРЕМЕННЫЕ //

// var
var name = 'Denis';
console.log(name);
name = 'Den';
console.log(name);
console.clear();

// let
let firstName = 'Oleg';
console.log(firstName);

// const
const lastName = 'user';
console.log(lastName);

const myStat = {
    name: 'Andrew',
    age: '17'
};
console.log(myStat)


// ПРЕОБРАЗОВАНИЕ

let value;

// Number to String
value = String(10);
value = String(10 + 30);
value = (66).toString();

// Boolean to string
value = String(false);

// Array to string
value = String([1, 2, 3]);

// Object to string
value = String({ name: 'Denis' });
value = 30 * 5;
value = true + 30;

console.log(value)
console.log(typeof value)



