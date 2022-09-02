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
console.clear();

// Numbers

const num1 = 10;
const num2 = 20;
let valuex;
valuex = num1 + num2;
valuex = valuex + 100;

console.log(valuex)

//   + * / - %
value = num1 + num2;
value = value + 100;
value += 100;
// value = 5 % 2;
value++;
value--;
++value;
--value;

value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(1));
value = ( 0.6 * 10 + 0.7 * 10 ) / 10;

// Math
value = Math.PI; // число пи
value = Math.random();   // рандом 0-1
value = Math.round(2.4); // обычное округление
value = Math.ceil(2.1); // округления в большую пользу
value = Math.floor(2.9); // округления в меньшую пользу
value = Math.min(2, 12, 15, 0, 12); //отбиракет мин значение

value = Math.floor(Math.random() * 10 + 1); // рандом 1-10

const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
value = Math.floor(Math.random() * arr.length);

console.log(value, arr[value])


