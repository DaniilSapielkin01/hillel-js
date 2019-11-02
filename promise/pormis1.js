function applyForVisa(documents) {
  console.log("Обработка заявлния ...");
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      Math.random() > 0 ? resolve({}) : reject("В визе отказано");
    }, 2000);
  });
  return promise;

  //симулируем задержку // испол-ся с мет-дом без promise
  // setTimeout(function() {
  //   Math.random() > 0.5 ? resolve({}) : reject({});
  // }, 2000);
  //----
}

function getVisa(visa) {
  console.log(" Виза получена ");
  return new Promise(function(resolve, reject) {
    //setTimeout превращаем функци/ в асинхронную для примера
    setTimeout(() => resolve(visa), 2000);
  });
}

function bookHotel(visa) {
  console.log(visa);
  console.log("Бронируем отель !");
  return Promise.resolve(visa);
}
function buyTickets(booking) {
  console.log(" Покупаем билеты !");
  console.log("Бронь", booking);
}

//в функции используем метотд обратоного вызова
applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.error(error));

// {},
// function(visa) {
//   console.info("Виза получена ");
// },

// //   bookHotel(
// //     visa,
// //     function(reservation) {
// //       buyTickets(reservation, function() {

// //       });
// //     },
// //     function(error) {}
// //   );
// // },
// //----

// function(reason) {
//   console.error("В визе отказано");
// }
// );
