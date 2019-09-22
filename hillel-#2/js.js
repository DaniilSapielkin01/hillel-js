// //Условные и логические операторы
//---#1
// let s = prompt("Вы ввели число?");

// if (s > 0) {
//   alert("+++");
// } else if (s < 0) {
//   alert("---");
// } else if (s == "0") {
//   alert("000");
// } else if (s == "") {
//   alert("Введите только число, без букв! Так же не оставляйте пустую строку! ");
// }
// console.log(s);

//---#2
// let a = 111;
// b = 444;
// c = 3;
// let d = Math.min(a, b, c);

// if (d == c) {
//   alert("c = " + d);
// } else if (d == b) {
//   alert("b = " + d);
// } else if (d == a) {
//   alert("a = " + d);
// }

//---#3

// let a = +prompt("boy1");
// let b = +prompt("boy2");

// if (a + b >= 200) {
//   alert("Mayorka");
// } else if (a + b < 200) {
//   alert("bear");
// }

//---#4

// let age = +prompt("Ввеите свой возраст");

// if (age >= 20 && age <= 27) {
//   alert("Выслать повестку");
// } else {
//   alert("Выслать кусок пиццы");
// }

//---#5

// let home = +prompt("Введите номер своей  маршутки ");

// if (home == 7 || home == 225 || home == 255) {
//   alert("Едешь домой!");
// } else {
//   alert("Не, все таки ожидай повестку ;)");
// }

//---#6
//Понял задание именно так .

// let day = prompt("Какой сегодня день недели?");

// if (day == "суббота" || day == "воскресенье") {
//   alert("Ты сегодня выходной!");
// } else {
//   alert("У тебя робочий день!");
// }

//---#7
// let x = +prompt("Введите значения от -20 до 20 для Х.");
// let y = +prompt("Введите значения от -20 до 20 для Y.");

// if (x <= 1 && (y >= 3 || y < 0)) {
//   alert(x + y);
// } else {
//   alert("Неверно!");
// }

//---#8

// let x = +prompt("Для переменной Х");
// let y = +prompt("Для переменной Y");

// if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
//   alert(x * 2);
// } else {
//   alert(x + 5);
// }

//---#9

// let x = prompt("Your are name , please ");

// if (x == "") {
//   alert("Здравствуйте");
// } else if (x === null) {
//   //что именно при отмене делать не сказано , по этому сделал вот так )
//   alert("Попробуйте еще раз! ");
//   location.reload();
// } else {
//   alert("Приветствую Вас " + x);
// }

//---#10
//Или там где lang можно сделат через array т.е => let lang= ["ru","en" , "de"]

// let greeting = "";
// let lang = prompt(" ru or en or de ?");

// if (lang == "ru") {
//   greeting = " Привет";
//   alert(greeting);
// } else if (lang == "en") {
//   greeting = "hello";
//   alert(greeting);
// } else if (lang == "de") {
//   greeting = "Guten Tag";
//   alert(greeting);
// } else if (lang === null || lang === "") {
//   alert("Repeat Please! ");
//   location.reload();
// }
// switch (lang) {
//   case "ru":
//     greeting = " Привет";
//     alert(greeting);
//     break;
//   case "en":
//     greeting = "hello";
//     alert(greeting);
//     break;
//   case "de":
//     greeting = "Guten Tag";
//     alert(greeting);
//     break;
//   case "":
//     alert("Repeat Please! ");
//     location.reload();
//     break;
//   case null:
//     alert("Repeat Please! ");
//     location.reload();
//     break;
// }

//---#11

// let month = new Date();
// let nowMonth = month.getMonth();

// if ((nowMonth == 11 && nowMonth == 0) || nowMonth == 1) {
//   alert("зима");
// } else if (nowMonth >= 2 && nowMonth <= 4) {
//   alert("весна");
// } else if (nowMonth >= 5 && nowMonth <= 7) {
//   alert("лето");
// } else if (nowMonth >= 8 && nowMonth <= 10) {
//   alert("осень");
// }

//---#12

// let lang = ["ru", "en"];
// let day = [0, 1, 2, 3, 4, 5, 6];
// let result = "";

// if(lang == "ru") {

// }?????

//ЦЫКЛЫ
//---#13
// str = "";
// for (let i = 0; i <= 4; i++) {
//   str += ".#";
//   console.log(str);
// }

//---#14
// let step;
// for (step = 0; step <= 21; step++) {
//   if (step % 2 == 0) {
//     console.log(step);
//   }
// }

//---#15
// let username = "John";
// let i;

// for (i = 0; i <= 2; i++) {
//   if (i == 2) {
//     console.log(i + ": Happy birthday dear " + username);
//   }
//   console.log(i + ": Happy birthday to you");
// }
// }

//---#16
// let user = confirm("Вы - админ ?");

// for (i = 0; i < 10; i++) {
//   if (i == 5 && user == false) {
//     continue;
//   } else if (user == true) {
//     console.log("Не продолжается ");
//     break;
//   }
//   console.log(i + ": Продолжаетсья ");
// }

//---#17

// let nomber = +prompt("Вводиться число");
// let n = 0;

// for (i = 1; i < nomber; i++) {
//   if (i % 2) {
//     n = n + i;
//   }
// }
// console.log(n);

// //---#18

// let a = 1;
// let b = "";

// while (a < 10) {
//   b += a + " x 2 = " + a * 2 + "<br>";
//   a++;
// }
// document.write(b);

// let c = 1;
// let d = "";
// for (d = 0; d < 10; i++) {
//   b += d + " x 2 = " + c * 2 + "<br>";
// }
// document.write(d);

//---#19
//Без тело не получаеться(
// let n = 20;
// let fib = [0, 1];

// for (i = 2; i < n; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }
// console.log(fib);

//---#20

// let password = prompt("Введите пароль . ");
// let password2 = "qwerty12";

// if (password == "qwerty12") {
//   alert("Вы успешно авторизованы");
// } else if (password !== password2) {
//   alert("Введите еще раз пароль");
//   location.reload();
// } else if (password == null) {
//   alert("Aвторизация прервалась");
// }
