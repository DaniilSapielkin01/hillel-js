"use strict";

let $searchForm = $("#search-form");

$searchForm.on("submit", function(event) {
  //форма сама не отправляется и страница сама не перезагрузиться из-за метода .preventDefault();
  event.preventDefault();
  //необходимо получить то что находится в инпуте и отправить данные на сервер / в query находиться строка которую будем  кидать / method .find() находит елемент и принимает css selector / .val()  метод позволяет получить value нашего input
  let query = $(this)
    .find("[name='search-term']")
    .val()
    .replace(/\s/g, "+");

  getBooks(query);
});

//функция которая получает строку которую мы запрашуем //query
function getBooks(query) {
  let url = "https://www.googleapis.com/books/v1/volumes";
  console.log("$", $);
  // метот .ajax({}) // Необходим передать обьекь раздел настроеек
  $.ajax({
    url,
    method: "GET",
    data: `q=${query}`
  }) //done - это подписка на успех
    .done(response => {
      console.log("response", response);
    }) //fail - это подписка на ошибку
    .fail(error => {
      console.log("error", error);
    });
}

// - - - setting slider - - -

$(".carousel").carousel({
  interval: false
});
let video = document.querySelectorAll("iframe");

let btnNext = (document.querySelector(
  ".carousel-control-next"
).onclick = () => {
  iframe.src = "";
});
let btnPrev = (document.querySelector(
  ".carousel-control-prev"
).onclick = () => {
  iframe.src = " ";
});
