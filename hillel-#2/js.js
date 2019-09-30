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

// let lang = prompt("ru , en or de ? ", "ru");
// let greeting = "";

// if (lang == "ru") {
//   greeting = " Привет";
// } else if (lang == "en") {
//   greeting = " Hello";
// } else if (lang == "de") {
//   greeting = "Guten morgen";
// }

// switch (lang) {
//   case "ru":
//     greeting = " Привет";
//     break;
//   case "en":
//     greeting = " Hello";
//     break;
//   case "de":
//     greeting = "Guten morgen";
//     break;
// }

// console.log(greeting);

//ЦЫКЛЫ

//---#13
// str = "";
// for (let i = 0; i <= 4; i++) {
//   str += ".#";
//   console.log(str);
// }

//---#14
// let step;
// for (step = 1; step <= 21; step++) {
//   if (step % 2 == 0) {
//     step *= step;
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

// for (;;) {
//   let conf = confirm("GO");
//   if (conf == false) {
//     console.log("exit");
//     break;
//   } else if (conf == true) {
//     console.log("GO too");
//   }
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
// let sum  ;
// for (let j = 1; j <= 10; j++) {
//   for (let i = 1; i <= 10; i++) {
//     sum = j + "x" + i + " = " + j * i;
//     console.log(sum);
//   }
// }

//---#19

// let n = 30;
// let prev = 0;
// let next = 1;
// let stup;
// var fib = [0, 1];

// for (
//   i = 0;
//   i < n;
//   i++,  stup = next, next = prev + next, prev = stup, console.log(prev)
// ) {}

//---#20 => 9е задание в циклах
// let value;
// let numbers = [];
// let total = 0;
// do {
//   value = prompt(`Введите число`, "");
//   if (value == +value && value.trim()) {
//     numbers.push(+value);
//   } else if (value !== null) alert("Было введено не число, попробуйте еще раз");
// } while (value !== null);
// for (const value of numbers) {
//   total = total + value;
// }
// alert(`Общая сумма ${numbers.length} чисел равна ${total}`);
//---#21

// let password = prompt("Введите пароль . ");
// let password2 = "qwerty12";

// if (password == password2) {
//   alert("Hello Admin");
// } else if (password !== password2 || password == "") {
//   alert("Password is not correct ");
//   location.reload();
// } else if (password == null) {
//   let conf = confirm("Are you shure ?");
//   if (conf == true) {
//     alert(" Good bay");
//   } else if (conf == false) {
//     location.reload();
//   }
// }
//---#22

// for (i = 1; i <= 50; ++i) {
//   if (!(i % 3)) {
//     console.log("Fizz");
//   } else if (!(i % 5)) {
//     console.log("Buzz");
//   } else if (i % 5 && i % 3) {
//     console.log("FizzBuzz");
//   }
// }
