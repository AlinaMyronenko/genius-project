// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

let checkAge2 = (age) =>{
    return age > 18 ? true : confirm('Батьки дозволили?'); 
};
console.log(checkAge2(52))
// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
  
// let min = (a, b) => {
//     if (a < b) {
//         return  a;
//     }  else if(a > b){
//         return b;
//     };
//     return "значення рівні";
// };
// console.log(min(10, 5));

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask("Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask2 = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask2('Ви згодні?', ()=>{ alert("Ви погодились."); }, ()=>{ alert("Ви скасували виконання."); })