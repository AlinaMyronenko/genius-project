// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// class Calculator{
//     constructor(props) {
//      this.read = props.read
//     }
//     x = 0;
//     y = 0;

//      set read(information) {
//         const number = information.split(',');
//         this.x = number[0];
//         this.y = number[1];
//     }

//     sum() { 
//         if (isNaN(this.x) || isNaN(this.y)) {
//             return alert('Не вірно введені значення')
//         }
//        return alert(+this.x + +this.y)
//     }
    
//     mul() {
//          if (isNaN(this.x) || isNaN(this.y)) {
//             return alert('Не вірно введені значення')
//         }
//        return alert(this.x * this.y )
//     }
// }

// const result = new Calculator({
//     read: prompt('Введіть два числа, через кому.')
// })

// result.sum();
// result.mul();
