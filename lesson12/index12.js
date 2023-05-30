// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

function printNumbers(from, to) {
  let start = from;

  let go = setInterval(function() {
   console.log(start);
    if (start == to) {
      clearInterval(go);
    }
    start++;
  }, 1000);
}
printNumbers(9, 17);

function printNumbers(from, to) {
    let start = from;
    setTimeout(function go() {
        console.log(start);
        if (start < to) {
            setTimeout(go, 1000)
        }
        start++;
    }, 1000); 

}
printNumbers(9, 15);



// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:

function delay(ms) {
return new Promise(resolved => setTimeout(resolved, ms));
}delay(3000).then(() => alert('виконалось через 3 секунди'));