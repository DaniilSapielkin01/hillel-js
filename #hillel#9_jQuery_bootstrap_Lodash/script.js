"use strict";

let $searchForm = $("#search-form");
let $bookList = $("#book-list");
let $currentBook = $("#current-book");
let $bookDescription = $(".book-description");
let books = [];

let body = document.querySelector("body");
body.style.background = " black";

$searchForm.on("submit", function(event) {
  event.preventDefault();
  let query = $(this)
    .find('[name="search-term"]')
    .val();
  getBooks(query);
  console.log(query);
});

function getBooks(query) {
  let server = "https://itunes.apple.com/search";

  $.ajax({
    url: server,
    method: "GET",
    dataType: "json",
    data: `limit=10&entity=musicVideo&term=${query}`
  })
    .done(function(response) {
      books = response.items;
      addBooks(books);
    })
    .fail(function(error) {
      console.log(error);
    });
}

// function addBooks(data) {
//   $bookList.empty();

//   data.forEach(book => {
//     $("<a href=''>")
//       .addClass("list-group-item")
//       .text(book.volumeInfo.title)
//       .attr("data-id", book.id)
//       .appendTo($bookList);
//   });
// }

// $bookList.on("click", "[data-id]", function(event) {
//   event.preventDefault();

//   let bookId = $(this).data("id");
//   let book = books.find(item => item.id === bookId);

//   $currentBook.fadeIn();
//   $currentBook.find(".book-title").text(`${book.volumeInfo.title}
//     | ${
//       book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No author"
//     }
//     ${book.volumeInfo.publishedDate}`);

//   $bookDescription.empty();

//   $("<img>")
//     .attr("src", book.volumeInfo.imageLinks.thumbnail)
//     .appendTo($bookDescription);

//   $("<p>")
//     .text(book.volumeInfo.description)
//     .appendTo($bookDescription);

//   $("<a>")
//     .attr("href", book.volumeInfo.previewLink)
//     .attr("target", "_blank")
//     .text("Read more...")
//     .addClass("read-link")
//     .appendTo($bookDescription);
// });

// - - - setting carousel - - -
$(".carousel").carousel({
  interval: false
});
