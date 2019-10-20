"use strict";
let $searchForm = $("#search-form");
let $carouselInner = $(".carousel-inner");
let videos = [];
let $btnSearch = $("#button-addon2");
let $leftBtn = $(".carousel-control-prev");
let $rigthBtn = $(".carousel-control-next ");
let body = document.querySelector("body");

body.style.background = " black";

$searchForm.on("submit", function(event) {
  event.preventDefault();
  let query = $(this)
    .find('[name="search-term"]')
    .val();

  getVideo(query);
  // console.log(query);
});

function getVideo(query) {
  let server = "https://itunes.apple.com/search";

  $.ajax({
    url: server,
    method: "GET",
    dataType: "json",
    data: `limit=10&entity=musicVideo&term=${query}`
  })
    .done(function(response) {
      videos = response.results;
      addVideo(videos);
    })
    .fail(function(error) {
      console.log("error =>>>", error);
    });
}

//--- setting carousel---
$(".carousel").carousel({
  interval: false
});

$leftBtn.on("click", function() {
  $("video").trigger("pause");
});

$rigthBtn.on("click", function() {
  $("video").trigger("pause");
});

function addVideo(data) {
  $carouselInner.empty();

  $("<div>")
    .addClass("carousel-item d active")
    .appendTo($carouselInner);

  // первый обьект в слайдере всегда с классом "active"
  let $firstVideo = $(".active");

  $("<video>")
    .addClass("d-block w-100")
    .attr("src", data[0].previewUrl)
    .attr("controls", "controls")
    .appendTo($firstVideo);
  //перебераем и получаем весь контент
  for (var i = 1; i < data.length; i++) {
    $("<div>")
      .addClass("carousel-item")
      .attr("id", i)
      .appendTo($carouselInner);
    let $allVideo = $(`#${i}`);
    $("<video>")
      .attr("src", data[i].previewUrl)
      .attr("controls", "controls")
      .appendTo($allVideo);
  }
  $leftBtn.removeClass("delete");
  $rigthBtn.removeClass("delete");
  console.log(data);
}
