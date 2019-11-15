"use string";

let $searchForm = $("#search-form");
let $bookList = $("#book-list");
let $currentBook = $("#current-book");
let books = [];

$searchForm.on("submit", function(event) {
  event.preventDefault();

  let query = $(this)
    .find("#search-term")
    .val()
    .replace(/\s/g, "+");
  console.log(query);
  getBooks();
});

function getBooks(query) {
  let url = "https://www.googleapis.com/books/v1/volumes";

  $.ajax({
    url,
    method: "GET",
    data: `q=${query}`
  })
    .done(response => {
      books = response.items;
      console.log("response ", response);
      addBooks(response.items);
    })
    .fail(erro => {
      console.log("error ", error);
    });
}

function addBooks(data) {
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

  let bookId = $(this).data("id");
  //find
  // console.log(bookId);
  let book = books.find(item => item.id === bookId);
  console.log(book);

  $currentBook.fadeIn();
  //text this is method
  $currentBook.find("book-title").text(`
  ${book.volumeInfo.title}
     ${
       book.volumeInfo.authors
         ? book.volumeInfo.authors.join(", ")
         : "No author"
     }
    ${book.volumeInfo.publishedDate}`);

    $("<img>").attr
});
//atriboot => target  }}} "blank"
//appedTo