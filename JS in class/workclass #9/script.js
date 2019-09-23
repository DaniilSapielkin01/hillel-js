// let btnSuccess = document.querySelector(".success");
// let btnCancel = document.querySelector(".cancel");
// let divAction = document.querySelector(".action");
// let buttons = document.querySelectorAll("button");

// // console.log(buttons);
// // console.log(btnSuccess);
// // console.log(btnCancel);

// function cancelHandler(event) {
//   //перезагрузка отмена
//   // event.preventDefault();
//   // отмена всплытия
//   event.stopPropagation();
//   console.log("cancel log");
// }

// // divAction.addEventListener("click", () => {
// //   console.log("divAction click");
// // });

// btnSuccess.addEventListener("click", function() {
//   console.log("success click");
//   //произовешл захват !
//   // btnCancel.removeEventListener("click", cancelHandler);
// });

// btnCancel.addEventListener("click", cancelHandler);

let btnLink = document.querySelector(".link");

btnLink.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("work");
});
