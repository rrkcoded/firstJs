function sayHello() {
    // console.log('Hello !!!')

}

// sayHello();


function sayHello(name, age) {
    console.log('Hello !!!')
    console.log(name, age);
    return `Hello my name is ${name} im ${age}`;
}

let dm = sayHello('Andrii', 15);
let dm1 = sayHello('Andrii', 15 + '!');
console.log(dm);
console.log(dm1);


let x = 200;

function funcx() {
    x = 100;
    console.log(x);
};

funcx();
console.log(x);


let y = 400;

function funcy(y) {
    y = 300;
    console.log(y);
};

funcy();
console.log(y);

let i = 600;

function funci() {
    let i = 500;
    console.log(i);
};

funci();
console.log(i);

const user = {
    city: 'Kyiv',
    country: 'Ukraine'
};

function getObje(obje) {
    console.log(obje);
    obje.city = 'Location';
}

getObje(user);

console.clear();


const square = function (x) {
    return x * x;
};


function sum(a, b) {

    return a > b;
}

let d = sum(10, 15);
console.log(d);
console.log(sum(10, 15));


function rax(aa, bb) {
    if (aa < bb) {
        return bb;
    } else {
        return aa;
    }
}

rax()
console.log(rax(110, 15))


function number(counter) {
    i = 0;
    while (i < counter) {
        i++;
        console.log(i);
    }
}

number(29)
console.clear()


function lines(line) {
    return line.length;
}

lines('12345')
console.log(lines('12345333'))


function sayDay(day) {
    cont = 0;
    while (cont < 31) {
        cont++;
        console.log('Day ' + cont);
    }
}

sayDay()



