//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let name = fruts.map(item => item.name);
// console.log(name);




//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i <= 10; i++)
// {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// };

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.log( `цифра ${i}!` );
//   }

// let i = 0;
// while (i < 5) {
//     console.log(`цифра ${i}!`);
//       i++;
// };

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//     value = +prompt("Введіть число більше за 100.");
//     if (!value) break
//      else if (value <= 100) {
//         +prompt("Введіть число більше за 100.");
//     } else break;
    
// };

//  -- 5 --
// Вирахуйте середній вік

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

let number = girls.map(item => item.age);
let sum = 0;
for (let i = 0; i < number.length; i += 1) {
    sum += number[i];
    let a = sum / number.length;
    console.log(a);
}
