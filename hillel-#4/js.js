// //--- Функции ---
// //---#1
// function max(a, b) {
//   return Math.max(a, b);
// }
// console.log(max(0, 1));

// //---#2
// let b = [0, -1, 100, 500, 100500];
// function min(obj) {
//   let a = obj[0];
//   for (let i = 1; i < obj.length; i++) {
//     if (obj[i] < a) {
//       a = obj[i];
//     }
//   }
//   console.log(a);
// }
// min(b);
// // ---#3

// let users = [
//   {
//     firstName: "Igor",
//     lastName: "Rogi",
//     age: 17
//   },
//   {
//     firstName: "Denis",
//     lastName: "Sined",
//     age: 29
//   },
//   {
//     firstName: "Georg",
//     lastName: "Groeg",
//     age: 45
//   },
//   {
//     firstName: "Dima",
//     lastName: "Amid",
//     age: 14
//   },
//   {
//     firstName: "Klerk",
//     lastName: "Krelk",
//     age: 19
//   },
//   {
//     firstName: "Katy",
//     lastName: "Parry",
//     age: 20
//   },
//   {
//     firstName: "Inna",
//     lastName: "Anni",
//     age: 16
//   },
//   {
//     firstName: "Felix",
//     lastName: "Xilef",
//     age: 18
//   },
//   {
//     firstName: "Vladimir",
//     lastName: "Rimidal",
//     age: 14
//   }
// ];

// function newUser() {
//   let filterUsers;
//   filterUsers = users.filter(function({ age }) {
//     return age > 17;
//   });
//   filterUsers.forEach(function(item, i, filterUsers) {
//     item.fullNamw = item.firstName + item.lastName;
//     console.log(item);
//   });
// }
// newUser();

// //---#4
// let mas = [1, 2, 3, 4, 5];

// function func() {
//   mas.forEach(function(item, i) {});
//   mas.shift();
//   alert(mas);
// }
// func();

// //---#5
// let arr = [11, 2, 3, 4, 5];
// let mas = [];

// let question = confirm(" + Значение числовое или нет? + ");

// if (question === true) {
//   var value = +prompt(" + Number + ");
//   func();
// } else if (question === false) {
//   var value = prompt(" + String + ");
//   func();
// }
// function func() {
//   mas = arr.concat(value);
//   console.log(mas);
// }

// //---#6

// var source = { firstname: "Tom", age: 10 };
// var s = extend(source, { firstname: "John" }, { lastname: "Doe" });

// console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

//---#7

// let date = new Date(prompt("Date yyyy-mm-dd", ""));
// let nowDate = date.getDate();
// let dateMonth = date.getMonth() + 1;
// let dateYear = date.getFullYear();
// let allDate = dateYear + "-" + dateMonth + "-" + nowDate;
// date = allDate;

// let message = prompt("messege", "");
// let author = "Anonymous";

// function setComment(date, message, author) {
//   if (date && message) {
//     author = prompt("Author");
//     if (author) {
//     } else {
//       author = "Anonymous";
//     }
//     console.log(
//       author,
//       date,
//       `
//     ` + message
//     );
//   } else {
//     alert("not work");
//   }
// }
// setComment(date, message, author);
//Замыкание
// ---#8
// function createTimer() {
//   for (i = 0; i < 1002; i++) {
//     console.log(i);
//   }
//   let perfom = performance.now();
//   return function time() {
//     console.log(perfom);
//   };
// }

//вроду и работает,но похоже что не так работать должно / из-за нижнего undefined.

// var timer = createTimer();
// console.log("!"); // код, время выполнения которого нужно измерить
// console.log(timer());
// // время в  мкс от начала выполнения createTimer() до момента вызова timer()

// ---#9

// function createAdder() {
//   alert(hello + "John");
//   alert(hello + "Harry");
//   function getFullName() {
//     return
//   }
// }

// var hello = createAdder("Hello, ");
// alert(hello("John")); // Hello, John
// alert(hello("Harry")); // Hello, Harry

// // var plus = createAdder(5);
// // alert(plus(1)); // 6
// // alert(plus(5)); // 10
// createAdder();
