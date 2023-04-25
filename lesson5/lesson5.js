// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
 
// const student = {
//     name: 'Arina',
//     trade: 'physics',
//     gpa: '89',
//     omissions: '8',
//     info: function () {
//         console.log(`Name is ${this.name}`);
//         console.log(`Trade is ${this.trade}`);
//         console.log(`GPA is ${this.gpa}`);
//         console.log(`Omissions is ${this.omissions}`);
//     }
// }

// student.info();

// const study = [
// {name: 'Anna',trade: 'physics',gpa:'85',omissions:'3'},
// {name: 'Anton',trade: 'mathematics',gpa:'95',omissions:'1'},
// {name: 'Alisa',trade: 'history',gpa:'74',omissions:'5'}
// ]

// student.info.call(study[0]);
// student.info.apply(study[1]);
// student.info.bind(study[2])();



// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке


// const buttonRef = document.querySelector('button[ name="html"]');
// buttonRef.addEventListener('click', () => alert('HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері. Браузери отримують HTML документ від сервера за протоколами HTTP/HTTPS або відкривають з локального диска, далі інтерпретують код в інтерфейс, який відображатиметься на екрані монітора.'));
// const button2Ref = document.querySelector('button[ name="css"]');
// button2Ref.addEventListener('click', () => alert('CSS - це спеціальна мова (мова стилів), за допомогою якої описують вигляду документів (як і де відображати елементи веб-сторінки), написаних мовами розмітки даних.'));



// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

const shop = [
    { name: 'banana', price: 30 },
    { name: 'cherry', price: 58 },
    { name: 'orange', price: 89 }
]

const shoping = function (amount) {
    let cost = this.price * amount;
    return console.log(`Вартість ${this.name} буде складати ${cost}!`);
}


document.querySelector("#ban").addEventListener('click', shoping.bind(shop[0], 4));
document.querySelector("#che").addEventListener("click", shoping.bind(shop[1], 1));
document.querySelector("#ora").addEventListener("click", shoping.bind(shop[2], 3));



shoping.call(shop[0], 5);
shoping.apply(shop[1], [3]);
shoping.bind(shop[2], 4)();