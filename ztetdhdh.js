let text = 'Hello! My name Andrii';

function ctext(){
    console.log(text)
    console.log('First string has ' + text.length + ' characters')

}
ctext()


// function days_passed(currentDate) {
//     let start = new Date(2022, 1 , 1);
//     let res = currentDate - start;
//     res = res/1000/60/60/24 + 1;
//     return Math.ceil (res);
// };
// let currentDay = new Date(2022, 9, 12);
// console.log(days_passed(currentDay));


function days_passed(currentDate) {
    let start = new Date(2022, 1 , 1);
    let res = currentDate - start;
    res = res/1000/60/60/24 + 1;
    return Math.ceil (res);
};
let currentDay = new Date(2022, 9, 12);
console.log(days_passed(currentDay) + ' days passed from 01.01.2022');
console.log(currentDay.getMonth());

prod3




