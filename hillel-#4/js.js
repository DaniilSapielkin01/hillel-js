// //--- Функции ---
// //---#1
// let a = +prompt("#1");
// let b = +prompt("#2");

// function max() {
//   let c = Math.max(a, b);
//   console.log(c);
// }
// max();

//---#2
// let arr = [0, -1, 100, 500, 100500];
// let min = arr[0];

// function func() {
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   console.log(min);
// }
// func();

// // ---#3

let users = [
  {
    firstName: "Igor",
    lastName: "Rogi",
    age: 18
  },
  {
    firstName: "Denis",
    lastName: "Sined",
    age: 29
  },
  {
    firstName: "Georg",
    lastName: "Groeg",
    age: 45
  },
  {
    firstName: "Dima",
    lastName: "Amid",
    age: 14
  },
  {
    firstName: "Klerk",
    lastName: "Krelk",
    age: 19
  },
  {
    firstName: "Katy",
    lastName: "Parry",
    age: 20
  },
  {
    firstName: "Inna",
    lastName: "Anni",
    age: 16
  },
  {
    firstName: "Felix",
    lastName: "Xilef",
    age: 18
  },
  {
    firstName: "Vladimir",
    lastName: "Rimidal",
    age: 14
  }
];
function newUser() {
  let filterUsers;
  filterUsers = users.filter(function({ age }) {
    return age >= 18;
  });
  filterUsers.forEach(function(item, i, filterUsers) {
    var ourput = [];
    item.fullName = item.firstName + " " + item.lastName;
    ourput = item.fullName;
    console.log(ourput);
  });
}
newUser();

//---#4
// let mus = [1, 2, 3, 4];
// function func() {
//   let musDel = mus.splice(0, 1);
//   console.log(mus);
//   console.log(musDel);
// }
// func();

//---#5
// let mus = [1, 2, 3, 4, 1];
// let value = prompt("");
// let total;

// function func() {
//   newMus = mus.concat(value);
//   total = newMus.length;
//   let lastTotal = newMus[total - 1];

//   console.log(lastTotal);
//   console.log(total);
// }
// func();

//---#6
// function func () {

// }
// var source = { firstname: "Tom", age: 10 };
// var s = extend(source, { firstname: "John" }, { lastname: "Doe" });
// console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

//---#7
//Date list
// let date = new Date(prompt("Date: yyyy-mm-dd"));
// let dateYear = date.getFullYear();
// let dateMonth = date.getMonth() + 1;
// let dateDay = date.getDate();
// let allDate = dateYear + "-" + dateMonth + "-" + dateDay;
//---
// let messenge = prompt("Messenger");
// let author;

// function setComment(allDate, messenge, author) {
//   if (dateYear && messenge) {
//     author = prompt("Author");
//     if (author) {
//     } else {
//       author = "Anonymous";
//     }
//     console.log(
//       author,
//       allDate,
//       `
//      `,
//       messenge
//     );
//   } else {
//     console.log("not work");
//   }
// }
// setComment(allDate, messenge, author);

// Замыкание
//---#8
// function createTimer() {
//   for (i = 0; i < 100; i++) {
//     console.log(i + "  !");
//   }
//   return function timer() {
//     createTimer = performance.now();
//     console.log(createTimer);
//   };
// }

// var timer = createTimer();
// console.log("!"); // код, время выполнения которого нужно измерить
// // Тут  undefined на 159 строке не понятно почему
// console.log(timer());
// время в мкс от начала выполнения createTimer() до момента вызова timer()
//---#9
// function createAdder(name) {
//   console.log(name + hello + " <=");

//   return function hello(nam) {

//   }
// }

// var hello = createAdder("Hello, ");
// console.log(hello("John")); // Hello, John
// console.log(hello("Harry")); // Hello, Harry

// var plus = createAdder(5);
// alert(plus(1)); // 6
// alert(plus(5)); // 10
