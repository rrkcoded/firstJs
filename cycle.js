//     while,   do while,   for,   for of,   for in

let i = 10;
while (i < 15) {
    console.log(i);
    i++;
}

do {
    console.log('123... action');
} while (i < 0);

for (let i = 1; i < 4; i++) {
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

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i)
}
const users0 = [
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

for (let i = 0; i < users0.length; i++) {
    userObj[users0[i].name] = [users0[i]];
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
};

for (let value of users0) {
    console.log(value)
};
console.clear()




const users = [
    {
        _id: '035efdf88502401da9fea5ace265db69',
        index: 0,
        isActive: false,
        balance: 1,
        age: 12,
        name: 'Andrii',
        gender: 'male',
        company: 'ZXI',
        email: 'test0@mail.com',
        phone: '097122394',
        registered: '2022-07-13'
    },
    {
        _id: '9509c0db080140bebdb2c8a1399f5b5f',
        index: 1,
        isActive: true,
        balance: 2,
        age: 22,
        name: 'Alis',
        gender: 'female',
        company: 'UA-tech',
        email: 'test1@mail.com',
        phone: '050612048',
        registered: '2022-04-30'
    },
    {
        _id: 'efa1d8357c51437da74d3e41b1402ea8',
        index: 3,
        isActive: false,
        balance: 3,
        age: 45,
        name: 'Ivan',
        gender: 'male',
        company: 'google',
        email: 'test2@mail.com',
        phone: '066284017',
        registered: '2022-11-03'
    },
    {
        _id: '30bea9f2a1034dbb9da86fa231810861',
        index: 3,
        isActive: true,
        balance: 4,
        age: 19,
        name: 'Alex',
        gender: 'male',
        company: 'IP-GEN',
        email: 'test3@mail.com',
        phone: '099372732',
        registered: '2022-01-23'
    },
    {
        _id: '07d4f51147f84f26a2116790a11af4c7',
        index: 4,
        isActive: true,
        balance: 5,
        age: 40,
        name: 'Oleg',
        gender: 'male',
        company: 'IP-GEN',
        email: 'test5@mail.com',
        phone: '099472430',
        registered: '2022-09-23'
    }
];

// forEach
users.forEach((user, i, arr) => {
    console.log(users, i, arr);
});


// filter
const userLess20 = users.filter(users => users.age > 20);
console.log(userLess20);

const userActive = users.filter(users => users.isActive === false);
console.log(userActive);

console.clear()

// map

const userName = users.map(user => user.name)
console.log(userName);
const userAge = users.map(user => user.age)
console.log(userAge);
const userEmail = users.map(user => ({mail: user.email, phone: user.phone}))
console.log(userEmail);
console.clear()
// reduce

const totalBalance = users.reduce((acc, user) => {
    console.log(acc);
    return acc += user.balance;
}, 0);
console.log(totalBalance);


// some/every
const isMale = users.some(umale => umale.gender === 'male');
console.log(isMale);
const isAge = users.some(uage => uage.age === 12);
console.log(isAge);
const isAllAge = users.every(uage => uage.age === 12);
console.log(isAllAge);

//sort

const isNames = ['Denis', 'Chend', 'Andrii', 'Bill'];
isNames.sort();
console.log(isNames);
const testNumbers = [12, 79, 54, 38, 98];
testNumbers.sort();
console.log(testNumbers)


// find

const findUser = users.find(user => user.name === 'Andrii');
// console.log(findUser);