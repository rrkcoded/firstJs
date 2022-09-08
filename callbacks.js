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
    return el;
 }

 mapArray(names, nameLenght)