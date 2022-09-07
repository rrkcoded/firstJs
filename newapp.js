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

console.log(str)

ES6
str = `
 <ul>
 <li>First name: ${ firstName }</li>
 <li>Last name: ${ lastName }</li>
 <li>Age: ${ age }</li>
 <li>Random number: ${ Math.random() }</li>
 <li>5 + 5 = ${ 5+6 }</li>
</ul>
`;
let price  = 20;
let discount = 5;
let priceElement = document.getElementById('price');
priceElement.innerHTML = getFinalPrice(price, discount);
function getFinalPrice(price, discount)
{
    return price - discount;
}
document.body.innerHTML = str;

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

// = присваиваю
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

$a = 15;
$b = 15;
if($a !== $b){
    alert('equal')
} else {
    alert('not equal')
}

$a = 1;
$b = true;
if($a != $b){
    alert('1')
} else {
    alert('2')
}
$a = 1;
$b = true;
if($a !== $b){
    // alert('1')
} else {
    alert('2')
}
console.clear()
//         ||  &&  !

s = 100;
if (s == 10) {
    alert(true);
} else {
    alert(false);
}

mas = [1];
if (mas.length !== 0) {
    console.log(mas);
} else {
    console.log('array is empty');
}


if (Array.isArray(mas)) {
    console.log(mas);
} else {
    console.log('array is empty');
}
let users = {
    name: 'Denis'
};
if (users.hasOwnProperty('name')) {
    console.log(users.name);
} else {
    console.log('nope');
}
let god = 20;
if (god < 18 || god > 46) {
    console.log('some actions');
} else {
    console.log('else');
}



let serverNickname = 'exCoder';
let nickname = serverNickname || 'default nickname'

console.log(nickname)

proPrice = 10 && false && 22
console.log(proPrice)
proPrice = 10 && 27 && 22
console.log(proPrice)

prodCount = 11;
if (prodCount >= 9 && prodCount <= 12) {
    console.log('nice')
} else {
    console.log('nope')
}

console.clear()

let a = 1;
let b = 0;

if (a > 0) {
    b = a;
} else {
    b += 1;
}

// выражение ? если true : если false

let c = a > 0 ? b = a : b += 1;

console.log(`b: ${b}, c: ${c}`);
console.log(b);

let color = 'green';
switch(color) {
    case 'green':
        console.log('Color is green');
        break;
    case 'red':
        console.log('Color is red');
        break;
    default:
        console.log('Default')
}


