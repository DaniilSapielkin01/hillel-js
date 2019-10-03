"use string";

let $searchForm = $("#search-form");

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
      console.log("response ", response);
    })
    .fail(erro => {
      console.log("error ", error);
    });
}
