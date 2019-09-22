// #1
// let x = 5;
// let x2 = x * 3;
// let x3 = x + x2;

// alert(x);
// alert(x2);
// alert(x3);

// #2
// let firstName = prompt(" What your name? ");
// let lastName = prompt(" What your last name? ");

// alert("What’s up " +
//  firstName +' '+ lastName);

// #3

// let x = +prompt("Writу the nomber #1");
// let y = +prompt("Write the nomber #12");
// let difference = "разность";
// let number = "чисел = ";

// alert(+x * y + " = Произведение чисел x*y");
// alert(+x / y + " = Частное  чисел x/y ");
// alert(+x - y + " = Разность чисел");
// alert(+x + y + " = Сумма чисел x+y ");

// #4
// alert('З/П за Июль ');

// let dayinWeek = prompt("Кол-во отработаных дней в неделю ");
// //5
// let hoursinDay = prompt("Кол-во часов в одном рабочем дне");
// //10
// let hour = prompt("Ваш рейт за один час");
// //10
// alert('Ваша  З/П за Июль ' + (dayinWeek * 4 + 3) * hoursinDay * hour);

// #5

// let number = prompt("Number");
// if (number % 2 == true) {
//   console.log("Не четное ");
// } else if (number % 2 == false) {
//   console.log("Четное ");
// }

//#6 Если ввести число и за чслом букву то букву откидывает .
// var age = parseInt(window.prompt('Введите число'));

// if (!isNaN(age)) {
//  alert("Your nomber " + age);
// } else {
//  alert('No, i need a number, :) try it again ');
// }

// #7 Не закончил до конца .
// let number = (Math.random() * 100).toFixed(0);
// let userNumber = prompt("Number");

// if (userNumber == null || userNumber == "") {
//   alert("Введите число!");
//   location.reload();
// } else {
//   if (userNumber > number) {
//     alert("Первое число больше второго ");
//   } else if (userNumber == number) {
//     alert("Числа одинаковые ");
//   } else if (userNumber < number) {
//     alert("Первое число меньше второго");
//   }
//   alert("Рандомное число = " + number + ", Введенное число = " + userNumber);
// }

//---#8
let str = prompt("Запишите: Мне нравится изучать Front-end ");
let str2 = prompt("Что вам нравиться изучать?");

let rusult = [];

if (str2 == null || str2 == "") {
  alert("Попробуйте еще!");
  location.reload();
} else {
  if (str2.includes("Front-end")) {
    str = str.split(" ");
    let newStr = str.slice(0, 3);
    result = newStr + " " + str2;
    console.log(newStr);
  } else console.log("not work");
}
alert(result);
