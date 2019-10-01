//Методы объектов и контекст исполнения функции
//---#1
// let calculator = {
//   read() {
//     this.x = +prompt(" X ");
//     this.y = +prompt(" Y ");
//     if (isNaN(this.x) || isNaN(this.y) || this.x == "" || this.y == "") {
//       alert("Нужно два числа без букв и символом");
//       location.reload();
//     }
//   },
//   sum() {
//     return this.x + this.y;
//   },
//   multi() {
//     return this.x * this.y;
//   },
//   diff() {
//     return this.x - this.y;
//   },
//   div() {
//     return this.x / this.y;
//   }
// };
// calculator.read();
// alert(calculator.div());
// alert(calculator.multi());

//---#2
// let coffeeMachine = {
//   message: "Your coffe is ready!",
//   start() {
//     setTimeout(() => alert(this.message), 3000);
//   }
// };
// coffeeMachine.start();

//---#3
// let counter = {
//   count: 0,
//   inc() {
//     this.count++;
//     return this;
//   },
//   dec() {
//     this.count--;
//     return this;
//   },
//   getValue() {
//     current = this.count + this.count;
//     return this.count;

//   }
// };
// var current = counter
//   .inc()
//   .inc()
//   .dec()
//   .inc()
//   .dec()
//   .getValue();

// alert(current); // 1

//---#4
// let me = {
//   getSum(x, y) {
//     console.log(x, y);
//     this.x = x;
//     this.y = y;
//     return calculator.sum.call(this);
//   },
//   getDiff() {
//     return calculator.diff.call(this);
//   },
//   getMulti() {
//     return calculator.multi.call(this);
//   },
//   getDiv() {
//     return calculator.div.call(this);
//   }
// };

// console.log(me.getSum(1, 4));
// console.log(me.getDiv(1, 0));

//---#5

// var country = {
//   name: "Ukraine",
//   language: "ukrainian",
//   capital: { name: "Kyiv", population: 2907817, area: 847.66 }
// };

// format.call(country, name, ""); // Ukraine
// format.apply(country, [name, ""]); // [Ukraine]
// format.call(country.capital, name, ""); // Kyiv
// format.apply(country.capital, [name, ""]); // Kyiv
// format.apply(null); // undefined ?????

//---#6
// let user = {
//   name: "John"
// };
// - - - 1
// (function(start, end) {
//  вот вариант он работает
// this.name = user.name;

// но хотель попробовать сделать через  call / но не получается
// name.call(user, "name");

//   console.log(start + this.name + end);
// })("<<< ", " >>>");
// - - - 2
// let user = {
//   name: "John"
// };
// function format(start, end) {
//   console.log(start + this.name + end);
// }
// var userFormat = format.bind(user);
// userFormat("<<< ", " >>>");
//--- #7

// function concat() {
//   this.greeting = " Hello ";
//   this.separation = " ";

//   return function hello() {
//     return this.greeting + this.separation + this.firstName;
//   };
// }
// hello("World"); // Hello World
// hello("John"); // Hello John

// concat();

//  Рекурсия
//---#8
// - - - a
// function cube(x) {
//   let result = 1;
//   for (let i = 0; i < 3; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(cube(2));
// - - - b
//был такоей вариант решения но он не работает
// function pow(x) {
//   let n = 3;
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(2));

//-----//и вот второй вариант решения он вроде рабочий , но не уверен что совсем правильно
// function cube(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * cube(x, n - 1);
//   }
// }
// let n = 3;
//ну или вместо переменной просто подставит ьсразу ввызов функции
// console.log(cube(2,n));

//---#9

// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// function sum(a) {
//   return function(b) {
//     return function(c) {
//       return function(d) {
//         return function(e) {
//           return a + b + c + d + e;
//         };
//       };
//     };
//   };
// }
// console.log(sum(1)(2)(3)(4)(5));
