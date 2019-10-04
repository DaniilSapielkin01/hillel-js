// let us = {
//  lastName: 'Golard'
// };
// let user = {
//  name: 'John',
//  age: 15,
//  getinfo: function (lastName) {
//   return "hello " + this.name + ' ' + lastName + ' ' + this.age;
//  }
// }
// let user2 = {
//  name: 'Kate',
//  age: 20
// }
// console.log(user.getinfo.apply(user2, ['Doe']))
// console.log(user.getinfo.call(user2, "Doe"));
// let newUs = user.getinfo.bind(user2, 'Doe');
// console.log(newUs())
//Средняя трада
// let a = 58;
//Бюджет
// let b = 187;
// let days = 1;

// function day(days) {
//  if (days < 5) {
//   if (b - a >= 0) {
//    days += 1;
//    b -= a;
//    return day(days);

//   } else {
//    console.log("none " + days);
//   }
//  } else {
//   return;
//  }
// }
// day(days);

//-----------------------------------------------------------
//16.09 (Monday)
function Human() {
  let name;
  this.setName = function(newName) {
    name = newName;
  };
  this.getName = function() {};
}

function Person(age) {
       Human.call(this);
this.age = age;

  this.age = function() {
    this.age = this.age + 10;
  };
  this.setName = function() {};
}

function User(value) {
  this.name = value || "";
  this._isActive = false;
  this.activate = function() {
    this._isActive = true;
  };
  this.deactivate = function() {
    this._isActive = false;
  };
}
function Admin(value) {
  User.call(this, value);
  /* переопределение родительского метода */
  this.activate = function() {
    this._isActive = 1;
  };

  /* расширение родительского метода */
  let parentMethod = this.deactivate;

  this.deactivate = function() {
    let agree = confirm("Are you sure?");
    if (agree) parentMethod.call(this);
  };
}

