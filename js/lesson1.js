//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).
// let name;
// let city;
// name = 'Іван';
// city = (name);
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
//  let a = "5";
// console.log(Number.parseInt(a));
// console.log(typeof a);
//  let b = "13cvb";
// console.log(Number.parseInt(b));
// console.log(typeof b);
//  let c = "12.9sxdcfgv";
// console.log(Number.parseFloat(c));
// console.log(typeof c);
// вивести в консоль тип

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log((0.1 * 10 + 0.2 * 10) / 10);
 
//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами

// let message2 = 'Привіт давно не бачились';
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let object = {};
// object.name = 'Alina';
// object.age = 29;
// object.city = 'Kiev';
// console.log(object);
// delete object.city;
// object['like flowers'] = true;
// console.log(object);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (let key in object){
//     console.log(key);
//     console.log(object[key])
// };