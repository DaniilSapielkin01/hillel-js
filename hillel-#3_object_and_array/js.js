//---#1
// let arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
// let sum = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (isFinite(arr[i]) == true) {
//     sum = sum + parseInt(arr[i]);
//   } else if (isFinite(arr[i]) == false) {
//     console.log("this is not number " + arr[i]);
//   }
// }
// alert(sum);

//---#2

// let n = Math.round(12.25, 25.15, 15.52, 21.25);
// let power = 5;
// if (n > 0) {s
//   let newArr = new Array(n);
//   for (let i = 0; i < n; i++) {
//     newArr[i] = (Math.random() * 10).toFixed(2);
//     let numberPower = newArr[i];
//     for (let j = 0; j < power; j++) {
//       numberPower *= newArr[i];
//     }
//     console.log(numberPower);
//   }
// }

//---#3

// let frame = ["AngularJS", "jQuery"];

// frame.unshift("Backbone.js");
// frame.push("ReactJS", "VueJS");
// frame.splice(1, 0, "CommonJS");

// alert(frame[3] + " - Это здесь лишнее");
// frame.splice(3, 1);
// console.log(frame);

//---#4

// let arr = "Как однажды Жак звонарь, сломал фонарь головой";

// let newStr = arr.split(" ");
// //Удаляем опследний елемент
// newStr.pop();
// //Добавляем елемент куда нам нужно , без удаления
// newStr.splice(4, 0, "головой");
// console.log(newStr);
// console.log(newStr.join(" "));

//---#5

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   Age: "20",
//   Country: "USA"
// };
// let user = prompt("GO");
// if (user in person) {
//   alert(user + ": " + person[user]);
// } else if (person[user] == undefined) {
//   let valueToo = prompt("Значение ");
//   // person.push(person[user]);
//   person[user] = valueToo;
//   console.log(person);
// }

//---#6
// let person = {};

// let valueBrand = prompt("Brand ?");
// let valueModel = prompt("Model?");
// let vulueResolution = prompt("Resolution?");
// let vulueColor = prompt("Color?");

// person.brand = valueBrand;
// person.model = valueModel;
// person.resolution = vulueResolution;
// person.color = vulueColor;

// console.log(person);

//---#7

// let dates = {};
// let date = new Date();
// let secondDate = new Date(new Date().setDate(date.getDate() - 365));
// let userDate = new Date(prompt("Введите дату yyyy-MM-dd"));

// if (userDate >= secondDate && userDate <= date) {
//   console.log("work " + userDate);
//   dates.nowDate = date;
//   dates.userDate = userDate;
//   dates.lastDate = secondDate;
// } else {
//   console.log("not work");
// }
// console.log(dates);

//---#8

let numbers = [];
let total = 0;
let userInput;

do {
  userInput = prompt("Введите число", "");
  if (userInput === "" || isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз");
  }
  numbers.push(Number(userInput));
} while (userInput !== null);
for (let value of numbers) {
  total = total + value;
}
alert("Сумма равно = " + total);

//---#9
// let mas = [];

// for (j = 0; j <= 10; j++) {
//   mas[j] = [j];
//   for (i = 0; i <= 10; i++) {
//     if (i != 0 && j != 0) {
//       mas[j][i] = i + "*" + j + " = " + j * i;
//     }
//   }
// }
// console.log(mas);

//---#10

// let obj = {
//   tag: "img"
// };
// let imgHeigth = prompt("Heigth?");
// let imgWidth = prompt("Width?");
// let elementStyleImage = {
//   width: imgWidth + "px",
//   height: imgHeigth + "px",
//   margin: "auto",
//   cursor: "zoom-in"
// };

// let borderStyle = {
//   border: 1 + "px solid #ccc"
// };
// console.log(elementStyleImage);
