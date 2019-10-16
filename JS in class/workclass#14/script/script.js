const $addBtn = $(".add-btn");
const $todoCard = $addBtn.closest(".card-body");
let isFormShown = false;
const $progressCard = $(".progress-card .card-body");

$addBtn.on("click", function() {
  if (!isFormShown) {
    $addBtn.before(
      "" +
        "<form>" +
        "<input placeholder = 'Title' >" +
        "<textarea placeholder = 'Title'>" +
        "</textarea>" +
        "<div class ='btn btn-warning pull-right submit-btn' > ok </div>" +
        "</form>"
    );

    const $submitBtn = $(".submit-btn");

    $submitBtn.on("click", function() {
      const title = $("input").val();
      const description = $("textarea").val() || "No description ";

      $addBtn.before(
        "" +
          "<div class = 'task bg-white text-dark'>" +
          " <div class = 'btn btn-danger delete-btn float-right' >X</div>" +
          "<h3>" +
          title +
          "</h3>" +
          "<p>" +
          description +
          "</p>" +
          "<div class = 'btn btn-warning work-btn'>Work</div>" +
          "</div>"
      );

      $("form ").remove();
      isFormShown = false;
    });

    isFormShown = true;
  }
});

$todoCard.on("click", function(e) {
  const $target = $(e.target);

  if ($target.hasClass("delete-btn")) {
    $target.closest(".task").remove();
  } else if ($target.has.hasClass("work-btn")) {
    const task = $target.closest(".task").clone();
    $progressCard.append(task);
    $target.closest(".task").remove();
  }
});
