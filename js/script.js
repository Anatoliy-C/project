// function first(){
//     // что то делаем
//     setTimeout( function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("Я учу" + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошел 3 урок!");
// }

// learnJS("Jawascript", done);

// Объекты 14

// let options =  {
//     width: 1024,
//     height: 1024,
//     name: "Kitti"
// };
// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("Свойство " + key + " Имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);

// Массивы и псевдо массивы 15

// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push("5"); 
// arr.shift();    
// arr.unshift("1"); 

// let arr = [1, 2, 3, 4, 5];

// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {

//     console.log(arr[i]);
// }

// let arr = ["first", 2, 3, "four", 5];

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + "(массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7]

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr =ans.split(',');
// console.log(arr);

// let arr = ['CSKA', 'Spartak', 'Dinamo', 'Locomotive'],
//     i = arr.join(', ');
// console.log(i);

// Объектно ориентированное програмирывание (ОПП) 16

// let arr = ['1', '15', '8', '4'],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(arr);

// let soldier = {
//     height: 400,
//     armor: 100
// };

// let john = {
//     height: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);



// Динамическая типизация в JS

// Простые типы

// 3 4 6 // Числа
// 'string', "string", `string`; // Строка
// true/false // Логический тип (boolean)

// - toString

// 1)
// console.log(typeof(String(null)));
// // 2)
// console.log(typeof("q" + 5));
// console.log('https://vk.com/catalog/' +5);

// // to number

// //1)
// console.log(typeof(Number('5')));
// //2)
// console.log(typeof(5 + +'5'));
// //3)
// console.log(typeof(parseInt('15px', 10)));

// let ans = +proq('hello', '');

// // 0, '', null, undefined, NaN - folse

// let switcher = null;

// if (switcher) {
//     console.log("Worcing..");
// }

// switcher = 1;

// if (switcher) {
//     console.log("Worcing..");
// }

// // 2)
// console.log(Boolean(Number('5')));
// // 3)
// console.log(typeof(!!'5'));


// 19) Получение элементов со страницы

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[2]);
// console.log(circle[0]);
// console.log(heart);
// console.log(oneHeart);


// 20) Действие с элементами на странице

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '10%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'tomato';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'yellow';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);


// div.innerHTML = "<h4>Kitti Kitti</h4>";
div.textContent = "Kitti Kitti";

document.body.insertBefore(div, circle[1]);
document.body.removeChild(circle[2]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);