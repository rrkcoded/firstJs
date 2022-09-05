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
str = ` 
 <ul> 
 <li>First name: ${ firstName }</li>
 <li>Last name: ${ lastName }</li>
 <li>Age: ${ age }</li>
 <li>Random number: ${ Math.random() }</li>
 <li>5 + 5 = ${ 5+6 }</li>
</ul>
`;
// let price  = 20;
// let discount = 5;
// let priceElement = document.getElementById('price');
// priceElement.innerHTML = getFinalPrice(price, discount);
// function getFinalPrice(price, discount)
// {
//     return price - discount;
// }
document.body.innerHTML = str;