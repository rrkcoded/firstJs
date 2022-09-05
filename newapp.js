const firstName = 'Andrii';
const lastName = 'Zheleznitskiy';
const age = '17';

let str;
str = 'Hello my name is ' + firstName
    + ' and im ' + age + 'ys old';

str = '<ul>' +
    '<li>First name: ' + firstName + '</li>' +
    '<li>Last name: ' + lastName + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '</ul>';

// console.log(str)

// ES6
// str = `
//  <ul>
//  <li>First name: ${ firstName }</li>
//  <li>Last name: ${ lastName }</li>
//  <li>Age: ${ age }</li>
//  <li>Random number: ${ Math.random() }</li>
//  <li>5 + 5 = ${ 5+6 }</li>
// </ul>
// `;
// // let price  = 20;
// // let discount = 5;
// // let priceElement = document.getElementById('price');
// // priceElement.innerHTML = getFinalPrice(price, discount);
// // function getFinalPrice(price, discount)
// // {
// //     return price - discount;
// // }
// document.body.innerHTML = str;

const user = {
    firstName: 'Andrii',
    lastName: 'Zhel',
    age: 17,
    isAdmin: true,
    email: 'test@mail.com',
    'user-addres': {
        city: 'Kyiv'
    },
    skills: ['html', 'css', 'git']
};

let prop = 'skills';
let value;
value = user.firstName;
value = user['isAdmin'];
value = user['user-addres'];
value = user['user-addres'].city;
value = user['user-addres']['city'];
value = user[prop][2];

user.firstName = 'Andrey';
user.info = 'Some info';
user["user-addres"].country = 'Ukraine';

console.log(value)
console.log(user)
console.clear();

// >, <, >=, <=, ==, ===, !=, !==

let bibar;

bibar = 1 > 2
bibar = 2 <= 2
bibar = 2 == 2
bibar = 1 == true
bibar = 1 == '1'
bibar = 1 === '1'
bibar = 1 != '1'
bibar = 1 !== '1'
bibar = 'ab' > 'a'

console.log(bibar)

// if (условия) {
     //action
// } else {
    // else action
// }
price = 100;
if (price == 100){
    console.log('price: 10');
} else {
    console.log('error');
}


nick = 'rrkcode';
if (nick == 'rrkcode'){
    console.log('Correct');
} else {
    console.log('Nope');
}


