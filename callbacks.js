// function fu() {
//     console.log("HELLO");
// }
//
// fu();
// fu.test = 'Andrii';
// console.log(fu.test);
//
// const mass = ['Max', 'Oleg', 'Alex', 'Andrii']
// console.log(mass)
//
//
//
//
// let newMass = [];
// for (let i = 0; i < mass.length; i++){
//     newMass.push(mass[i].length);
// }
// console.log(newMass); // => [3, 4, 4, 6]
// // Вместо имён вписывает количество символов в одном элементе
//
//
//
//
// let newMass2 = [];
// for (let i = 0; i < mass.length; i++) {
//     newMass2.push(mass[i].toUpperCase());
// }
// console.log(newMass2); // Все элементы пишет капсом


const names = ['Max', 'Oleg', 'Alex', 'Andrii']

function mapArray(mass, fn) {
    const res = [];
    for (let i = 0; i < mass.length; i++) {
        res.push(fn(mass[i]));
    }
    return res;
}
 function nameLenght(el) {
    console.log(el);
    return el.length;
 }

 function nameToUpperCase(el) {
    return el.toUpperCase();
 }


const result = mapArray(names, nameLenght);
const result2 = mapArray(names, nameToUpperCase);

console.log(result2);


function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}
const testGreeting = greeting('Andrii')('Zhel');
// console.log(testGreeting)// function
// const fullName = testGreeting('Zhel')
// console.log(fullName)
console.log(testGreeting);








function question2(job){
    if(job === 'developer') {
        return function (name){
            return `${name}, what is it JS?`;
        };

    } else if (job === 'teacher') {
        return function (name){
            return `${name}, what is your subject?`;
        };
    }
}
const developerQuestion2 = question2('developer');
console.log(developerQuestion2('Andrey 1'));

const teacherQuestion2 = question2('teacher');
console.log(teacherQuestion2('MAX 1'));








function question(job){
    const jobDictionary = {
        developer : 'what is it JS?',
        teacher : 'what is your subject?',
        school : 'what about School?',
    };
    return function(name){
        return `${name}, ${jobDictionary[job]}?`;
    };
}

const developerQuestion = question('developer');
console.log(developerQuestion('Andrey 2'));

const teacherQuestion = question('teacher');
console.log(teacherQuestion('MAX 2'));

const schoolQuestion = question('school');
console.log(schoolQuestion('School'))






