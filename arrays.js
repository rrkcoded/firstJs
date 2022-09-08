const numbers = [1, 33, 222, 44, 555];
const numbersV2 = [139, 333, 213, 92, 812];

let valueV2;
let value;
value = numbers.length
valueV2 = numbers.length
value = Array.isArray(numbers)  // проверка массив ли это
value = numbers[2]
numbers[1] = 77; // заменяем 1 элемент на значение 77
numbers[0] = 11;
value = numbers.indexOf(77); // в value выводим какой по счёту элемент с значением 77

value = numbers.push(200); // добавляет в конец (в value будет количество элементов в масиве)

value = numbers.pop(); // удаляет с конца (в value вернётся элемент который удалило)

value = numbers.unshift(1121); // добавляет в начало (в value будет количество элементов в масиве)

value = numbers.shift(); // удаляет с начала (в value вернётся элемент который удалило)

value = numbers.slice(0, 3); // обрезает часть масива не меняя его исходный масив

value = numbers.splice(1, 3, "GG", 882); // вырезает нужные объкты.  первое число это с какого объкта в масиве начинать, второе это по какое вырезать. Все что идёт после будет добавляться в исходный масив

valueV2 = numbersV2.reverse(); // переворачивает масив

valueV2 = numbersV2.concat(1, 2, 32, 'ff') // конкатенирует (добавляет) в масив

value = numbersV2.join() // делает из масива строку

value = numbersV2.join('') // делает из масива строку

console.log(value, numbers); // делает из масива строку + соеденяет все объекты масива в один объект

console.log(valueV2, numbersV2);