// "use strict";

// let $searchForm = $("#search-form");

// $searchForm.on("submit", function(event) {
//   //форма сама не отправляется и страница сама не перезагрузиться из-за метода .preventDefault();
//   event.preventDefault();
//   //необходимо получить то что находится в инпуте и отправить данные на сервер / в query находиться строка которую будем  кидать / method .find() находит елемент и принимает css selector / .val()  метод позволяет получить value нашего input
//   let query = $(this)
//     .find("[name='search-term']")
//     .val()
//     .replace(/\s/g, "+");

//   getBooks(query);
// });

// //функция которая получает строку которую мы запрашуем //query
// function getBooks(query) {
//   let url = "https://www.googleapis.com/books/v1/volumes";
//   console.log("$", $);
//   // метот .ajax({}) // Необходим передать обьекь раздел настроеек
//   $.ajax({
//     url,
//     method: "GET",
//     data: `q=${query}`
//   }) //done - это подписка на успех
//     .done(response => {
//       console.log("response", response);

//       addBoooks(response.items);
//     }) //fail - это подписка на ошибку
//     .fail(error => {
//       console.log("error", error);
//     });
// }
// //response -- в переводе  ответ
// function addBoooks(data) {
//   data.forEach(book => {
//     $("<a href =''> ")
//       .addClass("list-group-item") //bootstrap class
//       .text(book.volumeInfo) //где храница информация
//       .attr("book-id", book.id); //(1е название атрибута , 2е значение атрибута )
//   });
// }

"use strict";

let $searchForm = $("#search-form");
let $bookList = $("#book-list");
let $currentBook = $("#current-book");
let books = [];

$searchForm.on("submit", function(event) {
  event.preventDefault();
  let query = $(this)
    .find('[name="srch-term"]')
    .val()
    .replace(/\s/g, "+");

  getBooks(query);
});

function getBooks(query) {
  let server = "https://www.googleapis.com/books/v1/volumes";

  $.ajax({
    url: server,
    method: "GET",
    data: `q=${query}`
  })
    .done(function(response) {
      // в books будует хранится весь массив книг который мы получили
      books = response.items;
      addBooks(response.items);
    })
    .fail(function(error) {
      console.log(error);
    });
}

function addBooks(data) {
  //опустошает содержимое book-list
  $bookList.empty();

  data.forEach(book => {
    $("<a href=''>")
      .addClass("list-group-item")
      .text(book.volumeInfo.title)
      .attr("data-id", book.id)
      .appendTo($bookList);
  });
}

$bookList.on("click", "[data-id]", function(event) {
  event.preventDefault();

  //по этому id найдем книгу в списке
  let bookId = $(this).data("id");
  //вывод  id самой книги
  console.log(bookId);

  let book = books.find(item => {
    item.id === bookId;
  }); //вернет обьект при совпадении айдишника
  //выход currentBook когда срабатывает событие => вызываем метод fadeIn/ this method from jQuery / this card currentBook
  $currentBook.fadeIn();
  // ищем в нутри него дочерний элемент (.book-title) / устанавливаем значение метотда (.text) / который будет приминать значение
  $currentBook.fadeIn();
  $currentBook.find(".book-title").text(`${book.volumeInfo.title}
    | ${
      book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No author"
    }
    ${book.volumeInfo.publishedDate}`);
});
