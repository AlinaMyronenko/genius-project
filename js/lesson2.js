// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let a = 1;
// let b = 0;
// let c = -3;
// console.log(a > 0);
// console.log(b > 0);
// console.log(b >= 0);
// console.log(c > 0);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// let value = 'test';
// let value2 = 'qwerty';
// let value3 = true;
// console.log(value === 'test');
// console.log(value2 === 'test');
// console.log(value3 === 'test');


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
// let x = 1;
// let y = 10;
// let s = 13;
// if (x > 10) {
//    console.log(x - 5);
// } else {
//    console.log(x + 5);
// }
// (y >= 10) ? console.log(y - 5) : console.log(y + 5);
// (s >= 10) ? console.log(s - 5) : console.log(s + 5);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// let month
// const number = prompt('Введіть порядковий номер місяця, щоб дізнатись його назву!');

// switch (number) {
//     case '1':
//         month = 'Січень';
//         alert(month);
//         break;
    
//     case '2':
//         month = 'Лютий';
//         alert(month);
//         break;
    
//     case '3':
//         month = 'Березень';
//         alert(month);
//         break;
    
//     case '4':
//         month = 'Квітень';
//         alert(month);
//         break;
    
//     case '5':
//         month = 'Травень';
//         alert(month);
//         break;
    
//     case '6':
//         month = 'Червень';
//         alert(month);
//         break;
    
//     case '7':
//         month = 'Липень';
//         alert(month);
//         break;
    
//     case '8':
//         month = 'Серпень';
//         alert(month);
//         break;
    
//     case '9':
//         month = 'Вересень';
//         alert(month);
//         break;
    
//     case '10':
//         month = 'Жовтень';
//         alert(month);
//         break;
    
//     case '11':
//         month = 'Листопад';
//         alert(month);
//         break;
    
//     case '12':
//         month = 'Грудень';
//         alert(month);
//         break;
    
//     default:
//         alert('такого місяця не існує');
    
// };




//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

let sum;
const number = prompt('Введіть тризначне число');
if (number.length == 3) {
    sum = +number[0] + +number[1] + +number[2];
    alert(sum);
} else {
    alert('не правильно введене число');
};