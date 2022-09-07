//     while,   do while,   for,   for of,   for in

let i = 10;
while(i < 15) {
    console.log(i);
    i++;
}

do {
    console.log('123... action');
} while (i < 0);

for (let i = 1; i < 4; i++){
    console.log(i)
}

let str = 'Hello';
let res = '';
for (let i = 0; i < str.length; i++) {
    console.log(str[i] + '.');
}

let colors = ['Red', 'White', 'Blue', 'Green', 'Black'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

for (let i = 0; i < 10; i++){
    if (i === 5) {
        continue;
    }
    console.log(i)
}
const users = [
    {
        name: 'Andrii',
        age: 17,
        City: 'Zhytomyr'
    },
    {
        name: 'Max',
        age: 77,
        City: 'Lviv'
    },
    {
        name: 'OLeg',
        age: 60,
        City: 'Kyiv'
    },
    {
        name: 'Dan',
        age: 12,
        City: 'Paris'
    },
];
const userObj = {};

for (let i = 0; i < users.length; i++){
    userObj[users[i].name] = [users[i]];
}
console.log(userObj)


const player = {
    name: 'Oleg',
    age: '14',
    city: 'Kyiv'
};
for (let key in player) {
    console.log(key)
    console.log(player[key])
}
console.clear()

for (let value of users) {
    console.log(value)
}