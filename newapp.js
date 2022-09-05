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
document.body.innerHTML = str;